from PIL import Image
import pytesseract
import json

from PIL import Image
import pytesseract
import json

img = Image.open("/Users/phamtoan/Developer/taox/my-turborepo/apps/web/public/manga-demo.webp")
W, H = img.size
print(f"Image size: {W}x{H}", flush=True)

# Process image in vertical chunks to avoid timeout
CHUNK_HEIGHT = 1500  # ~1500px per chunk
raw_detections = []
num_chunks = (H + CHUNK_HEIGHT - 1) // CHUNK_HEIGHT
print(f"Processing {num_chunks} chunks of ~{CHUNK_HEIGHT}px each...", flush=True)

for chunk_idx in range(num_chunks):
    y_start = chunk_idx * CHUNK_HEIGHT
    y_end = min(y_start + CHUNK_HEIGHT, H)
    chunk = img.crop((0, y_start, W, y_end))
    print(f"  Chunk {chunk_idx+1}/{num_chunks}: y={y_start}-{y_end}px", flush=True)

    try:
        data = pytesseract.image_to_data(
            chunk,
            lang='jpn+eng',
            output_type=pytesseract.Output.DICT,
            config='--psm 11',
            timeout=30
        )
        for i in range(len(data['text'])):
            text = data['text'][i].strip()
            conf = int(data['conf'][i])
            if text and conf > 20:
                x = data['left'][i]
                y = data['top'][i] + y_start
                w = data['width'][i]
                h_box = data['height'][i]
                raw_detections.append({'text': text, 'x': x, 'y': y, 'w': w, 'h': h_box})
    except Exception as e:
        print(f"    ERROR: {e}", flush=True)

print(f"\nRaw detections: {len(raw_detections)}", flush=True)

# --- Cluster nearby detections into blocks ---
CLUSTER_GAP_X = 60   # pixels horizontally to consider "same cluster"
CLUSTER_GAP_Y = 80   # pixels vertically to consider "same cluster"

# Sort by top then left
raw_detections.sort(key=lambda d: (d['y'], d['x']))

clusters = []
for det in raw_detections:
    det_cx = det['x'] + det['w'] / 2
    det_cy = det['y'] + det['h'] / 2
    best_cluster = None
    best_dist = float('inf')
    
    for cl in clusters:
        cl_cx = (cl['min_x'] + cl['max_x']) / 2
        cl_cy = (cl['min_y'] + cl['max_y']) / 2
        # Check if det overlaps or is close to cluster bounds
        if (det['x'] <= cl['max_x'] + CLUSTER_GAP_X and
            det['x'] + det['w'] >= cl['min_x'] - CLUSTER_GAP_X and
            det['y'] <= cl['max_y'] + CLUSTER_GAP_Y and
            det['y'] + det['h'] >= cl['min_y'] - CLUSTER_GAP_Y):
            dist = abs(det_cy - cl_cy) + abs(det_cx - cl_cx)
            if dist < best_dist:
                best_dist = dist
                best_cluster = cl
    
    if best_cluster is not None:
        best_cluster['min_x'] = min(best_cluster['min_x'], det['x'])
        best_cluster['max_x'] = max(best_cluster['max_x'], det['x'] + det['w'])
        best_cluster['min_y'] = min(best_cluster['min_y'], det['y'])
        best_cluster['max_y'] = max(best_cluster['max_y'], det['y'] + det['h'])
        best_cluster['texts'].append(det['text'])
    else:
        clusters.append({
            'min_x': det['x'],
            'max_x': det['x'] + det['w'],
            'min_y': det['y'],
            'max_y': det['y'] + det['h'],
            'texts': [det['text']]
        })

# Filter out tiny clusters (likely noise)
clusters = [cl for cl in clusters if (cl['max_x'] - cl['min_x']) * (cl['max_y'] - cl['min_y']) > 200]
clusters.sort(key=lambda c: c['min_y'])

print(f"Clusters after grouping: {len(clusters)}", flush=True)

# --- Output ocrRegions format ---
print("\n// === ocrRegions (auto-generated from OCR) ===")
ocr_regions = []
for idx, cl in enumerate(clusters):
    # Add small padding
    PAD = 4
    x1 = max(0, cl['min_x'] - PAD)
    y1 = max(0, cl['min_y'] - PAD)
    x2 = min(W, cl['max_x'] + PAD)
    y2 = min(H, cl['max_y'] + PAD)
    
    top_pct = round(y1 / H * 100, 2)
    left_pct = round(x1 / W * 100, 2)
    width_pct = round((x2 - x1) / W * 100, 2)
    height_pct = round((y2 - y1) / H * 100, 2)
    
    text_joined = ' '.join(cl['texts'][:3])
    region_id = f"r{idx+1}"
    entry = {
        "id": region_id,
        "top": top_pct,
        "left": left_pct,
        "width": width_pct,
        "height": height_pct,
        "translated": f"[{text_joined}]"
    }
    ocr_regions.append(entry)
    print(f'  {{ id: "{region_id}", top: {top_pct}, left: {left_pct}, width: {width_pct}, height: {height_pct}, translated: "..." }},  // {text_joined[:30]}')

with open("/Users/phamtoan/Developer/taox/my-turborepo/ocr_clusters.json", "w", encoding="utf-8") as f:
    json.dump(ocr_regions, f, ensure_ascii=False, indent=2)
print(f"\nSaved {len(ocr_regions)} clusters to ocr_clusters.json")
