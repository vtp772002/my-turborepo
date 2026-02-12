# Platform Orchestrator - Hướng dẫn sử dụng

## Giới thiệu

Platform Orchestrator là hệ thống quản lý và điều phối tự động các tác vụ phát triển cho platform sản phẩm AI/công nghệ của bạn. Được thiết kế theo phong cách Anthropic với landing page hiện đại và các component chuyên nghiệp.

## Cấu trúc dự án

```
my-turborepo/
├── apps/
│   └── web/                    # Next.js app - Landing page
│       ├── app/
│       │   ├── page.tsx        # Trang chủ với các sections
│       │   ├── layout.tsx      # Layout với fonts
│       │   └── globals.css     # Tailwind + Custom CSS
│       ├── components/
│       │   └── landing/        # Landing page components
│       │       ├── HeroSection.tsx
│       │       ├── ProductsSection.tsx
│       │       ├── FeaturesGrid.tsx
│       │       ├── PricingSection.tsx
│       │       └── Footer.tsx
│       └── tailwind.config.ts
├── lib/
│   └── orchestrator/           # Orchestrator system
│       ├── index.ts            # Core orchestrator
│       ├── agents/             # Specialized agents
│       │   ├── design-agent.ts
│       │   ├── frontend-agent.ts
│       │   ├── backend-agent.ts
│       │   ├── testing-agent.ts
│       │   └── deployment-agent.ts
│       └── workflows/
│           └── platform.ts     # Platform workflow
└── package.json
```

## Bắt đầu

### 1. Chạy Development Server

```bash
cd apps/web
pnpm dev
```

Truy cập: http://localhost:3000

### 2. Sử dụng Orchestrator

```bash
# Chạy workflow platform
cd /Users/phamtoan/Developer/taox/my-turborepo
node lib/orchestrator/workflows/platform.ts
```

## Landing Page Features

### 🎨 Design System

- **Typography**:
  - Instrument Serif (Headings)
  - Inter (Body)
  - DM Mono (Code/Monospace)

- **Color Palette**:
  - Primary: #E87D3E (Orange)
  - Secondary: #9D5CFF (Purple)
  - Tertiary: #3E9FE8 (Blue)
  - Background: #0A0A0A (Dark)

### 📦 Components

1. **HeroSection**
   - Gradient mesh background
   - Animated text reveals
   - CTA buttons
   - Stats showcase

2. **ProductsSection**
   - Interactive product cards
   - Hover effects
   - Features list
   - Custom icons

3. **FeaturesGrid**
   - 6 key features
   - Bento grid layout
   - Hover animations
   - Stats panel

4. **PricingSection**
   - 3-tier pricing
   - Billing toggle (Monthly/Annual)
   - Feature comparison
   - FAQ accordion

5. **Footer**
   - Multi-column layout
   - Social links
   - System status
   - Decorative accents

## Orchestrator System

### Agents

1. **DesignAgent** - UI/UX design
2. **FrontendAgent** - React/Next.js development
3. **BackendAgent** - API development
4. **TestingAgent** - Quality assurance
5. **DeploymentAgent** - CI/CD & deployment

### Workflow Example

```typescript
import { PlatformOrchestrator } from './lib/orchestrator';
import { FrontendAgent, DesignAgent } from './lib/orchestrator/agents';

const orchestrator = new PlatformOrchestrator();

// Đăng ký agents
orchestrator.registerAgent(new DesignAgent());
orchestrator.registerAgent(new FrontendAgent());

// Tạo tasks
const designTask = orchestrator.createTask({
  name: 'Thiết kế Hero Section',
  description: 'Tạo hero section với gradient background',
  agentType: 'design',
  priority: 'high',
});

const buildTask = orchestrator.createTask({
  name: 'Build Hero Component',
  description: 'Implement hero section',
  agentType: 'frontend',
  dependencies: [designTask.id],
});

// Thực thi
await orchestrator.executeAll();
orchestrator.printReport();
```

## Customization

### Thay đổi màu sắc

Chỉnh sửa `apps/web/app/globals.css`:

```css
:root {
  --color-accent-primary: #YOUR_COLOR;
  --color-accent-secondary: #YOUR_COLOR;
  --color-accent-tertiary: #YOUR_COLOR;
}
```

### Thêm sản phẩm mới

Chỉnh sửa `apps/web/components/landing/ProductsSection.tsx`:

```typescript
const products = [
  {
    name: 'Your Product',
    tagline: 'Product tagline',
    description: 'Product description...',
    features: ['Feature 1', 'Feature 2'],
    accent: 'var(--color-accent-primary)',
    icon: '🚀',
  },
  // ...
];
```

### Thay đổi pricing tiers

Chỉnh sửa `apps/web/components/landing/PricingSection.tsx`:

```typescript
const tiers = [
  {
    name: 'Your Tier',
    price: { monthly: 99, annual: 990 },
    features: ['Feature 1', 'Feature 2'],
    // ...
  },
];
```

## Build & Deploy

### Build Production

```bash
pnpm build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Tích hợp Orchestrator vào workflow

### 1. Tạo orchestrator script

```typescript
// scripts/orchestrate.ts
import { runPlatformWorkflow } from '../lib/orchestrator/workflows/platform';

runPlatformWorkflow();
```

### 2. Thêm vào package.json

```json
{
  "scripts": {
    "orchestrate": "tsx scripts/orchestrate.ts"
  }
}
```

### 3. Chạy

```bash
pnpm orchestrate
```

## Tips & Best Practices

1. **Performance**: Sử dụng các component với animations được tối ưu
2. **Accessibility**: Tất cả components đều có ARIA labels
3. **Responsive**: Mobile-first design với breakpoints
4. **SEO**: Metadata được configure trong layout.tsx
5. **Type Safety**: TypeScript strict mode enabled

## Các bước tiếp theo

1. ✅ Landing page đã hoàn thành
2. 🔄 Customize products theo nhu cầu
3. 🔄 Thêm API endpoints (Next.js API routes)
4. 🔄 Integrate authentication
5. 🔄 Setup analytics & monitoring
6. 🔄 Deploy to production

## Support

Nếu có vấn đề, check:
- Console errors trong browser
- Next.js build logs
- Tailwind config
- TypeScript errors

---

**Built with ❤️ using Next.js 16, React 19, TypeScript, and Tailwind CSS**
