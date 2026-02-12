#!/usr/bin/env node

/**
 * Platform Orchestrator - Workflow cho phát triển platform sản phẩm
 * Ví dụ: Tạo landing page như Anthropic với các sản phẩm công nghệ
 */

import { PlatformOrchestrator } from './index';
import {
  FrontendAgent,
  DesignAgent,
  BackendAgent,
  DeploymentAgent,
  TestingAgent,
} from './agents';

async function main() {
  console.log('╔═══════════════════════════════════════════════════╗');
  console.log('║   🚀 PLATFORM ORCHESTRATOR - AI PRODUCT PLATFORM ║');
  console.log('╚═══════════════════════════════════════════════════╝\n');

  // Khởi tạo orchestrator
  const orchestrator = new PlatformOrchestrator();

  // Đăng ký các agents
  console.log('📋 Đăng ký các agents...\n');
  orchestrator.registerAgent(new DesignAgent());
  orchestrator.registerAgent(new FrontendAgent());
  orchestrator.registerAgent(new BackendAgent());
  orchestrator.registerAgent(new TestingAgent());
  orchestrator.registerAgent(new DeploymentAgent());

  console.log('\n📝 Tạo workflow cho platform...\n');

  // === PHASE 1: DESIGN ===
  const designLandingTask = orchestrator.createTask({
    name: 'Thiết kế Landing Page như Anthropic',
    description: 'Tạo design system và layout cho trang chủ giới thiệu sản phẩm AI',
    agentType: 'design',
    priority: 'critical',
    metadata: {
      action: 'landing-page',
      style: 'anthropic-inspired',
      sections: ['hero', 'products', 'features', 'pricing', 'footer'],
    },
  });

  const designSystemTask = orchestrator.createTask({
    name: 'Tạo Design System',
    description: 'Component library với color scheme, typography, spacing',
    agentType: 'design',
    priority: 'high',
    metadata: {
      action: 'design-system',
    },
  });

  // === PHASE 2: FRONTEND DEVELOPMENT ===
  const heroSectionTask = orchestrator.createTask({
    name: 'Tạo Hero Section',
    description: 'Hero section với gradient background và CTA buttons',
    agentType: 'frontend',
    priority: 'high',
    dependencies: [designLandingTask.id],
    metadata: {
      action: 'create-component',
      componentName: 'HeroSection',
    },
  });

  const productsPageTask = orchestrator.createTask({
    name: 'Tạo Products Page',
    description: 'Trang giới thiệu các sản phẩm công nghệ AI (tương tự Claude, API, etc.)',
    agentType: 'frontend',
    priority: 'high',
    dependencies: [designSystemTask.id],
    metadata: {
      action: 'create-page',
      pageName: 'products',
    },
  });

  const productCardTask = orchestrator.createTask({
    name: 'Tạo Product Card Component',
    description: 'Component hiển thị thông tin sản phẩm với animation',
    agentType: 'frontend',
    priority: 'medium',
    dependencies: [designSystemTask.id],
    metadata: {
      action: 'create-component',
      componentName: 'ProductCard',
    },
  });

  const featureGridTask = orchestrator.createTask({
    name: 'Tạo Feature Grid',
    description: 'Grid layout hiển thị các tính năng của sản phẩm',
    agentType: 'frontend',
    priority: 'medium',
    dependencies: [designSystemTask.id],
    metadata: {
      action: 'create-component',
      componentName: 'FeatureGrid',
    },
  });

  const pricingTableTask = orchestrator.createTask({
    name: 'Tạo Pricing Table',
    description: 'Bảng giá các gói sản phẩm',
    agentType: 'frontend',
    priority: 'medium',
    dependencies: [designSystemTask.id],
    metadata: {
      action: 'create-component',
      componentName: 'PricingTable',
    },
  });

  // === PHASE 3: BACKEND API ===
  const productsAPITask = orchestrator.createTask({
    name: 'Tạo Products API',
    description: 'API endpoint để lấy danh sách sản phẩm',
    agentType: 'backend',
    priority: 'medium',
    metadata: {
      action: 'create-api',
      resource: 'products',
    },
  });

  const contactAPITask = orchestrator.createTask({
    name: 'Tạo Contact API',
    description: 'API endpoint xử lý form liên hệ',
    agentType: 'backend',
    priority: 'low',
    metadata: {
      action: 'create-endpoint',
      path: '/contact',
    },
  });

  // === PHASE 4: TESTING ===
  const componentTestTask = orchestrator.createTask({
    name: 'Test Components',
    description: 'Viết và chạy unit tests cho components',
    agentType: 'testing',
    priority: 'medium',
    dependencies: [
      heroSectionTask.id,
      productCardTask.id,
      featureGridTask.id,
      pricingTableTask.id,
    ],
  });

  const e2eTestTask = orchestrator.createTask({
    name: 'E2E Testing',
    description: 'Test end-to-end user flows',
    agentType: 'testing',
    priority: 'low',
    dependencies: [componentTestTask.id],
  });

  // === PHASE 5: BUILD & DEPLOYMENT ===
  const buildTask = orchestrator.createTask({
    name: 'Build Production',
    description: 'Build ứng dụng cho production',
    agentType: 'frontend',
    priority: 'high',
    dependencies: [componentTestTask.id],
    metadata: {
      action: 'build',
    },
  });

  const deployTask = orchestrator.createTask({
    name: 'Deploy to Vercel',
    description: 'Deploy platform lên Vercel',
    agentType: 'deployment',
    priority: 'critical',
    dependencies: [buildTask.id, e2eTestTask.id],
  });

  // Thực thi workflow
  console.log('\n🎬 Bắt đầu thực thi workflow...\n');
  await orchestrator.executeAll();

  // In báo cáo
  orchestrator.printReport();

  console.log('\n💡 Các bước tiếp theo:');
  console.log('   1. Chạy dev server: cd apps/web && npm run dev');
  console.log('   2. Mở http://localhost:3000 để xem platform');
  console.log('   3. Customize các components trong packages/ui');
  console.log('   4. Thêm sản phẩm của bạn vào data/products.json\n');
}

// Chạy nếu được gọi trực tiếp
if (require.main === module) {
  main().catch(console.error);
}

export { main as runPlatformWorkflow };
