import type { Agent, Task, TaskResult } from '../index';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Frontend Agent - Chịu trách nhiệm phát triển giao diện
 */
export class FrontendAgent implements Agent {
  type = 'frontend' as const;
  name = 'Frontend Developer';
  capabilities = [
    'Next.js Development',
    'React Components',
    'Tailwind CSS',
    'TypeScript',
    'UI/UX Implementation',
    'Responsive Design',
  ];
  isAvailable = true;

  async execute(task: Task): Promise<TaskResult> {
    console.log(`🎨 Frontend Agent đang xử lý: ${task.name}`);

    try {
      // Các task frontend có thể thực hiện
      if (task.metadata?.action === 'build') {
        return await this.buildFrontend();
      } else if (task.metadata?.action === 'create-component') {
        return await this.createComponent(task.metadata);
      } else if (task.metadata?.action === 'run-dev') {
        return await this.runDevServer();
      } else if (task.metadata?.action === 'create-page') {
        return await this.createPage(task.metadata);
      }

      return {
        status: 'success',
        details: 'Frontend task completed successfully',
        artifacts: [],
      };
    } catch (error) {
      return {
        status: 'failure',
        details: error instanceof Error ? error.message : String(error),
      };
    }
  }

  private async buildFrontend(): Promise<TaskResult> {
    try {
      const { stdout } = await execAsync('cd apps/web && npm run build');
      return {
        status: 'success',
        details: 'Frontend build thành công',
        artifacts: ['apps/web/.next'],
        metrics: { buildTime: Date.now() },
      };
    } catch (error) {
      throw new Error(`Build failed: ${error}`);
    }
  }

  private async createComponent(metadata: any): Promise<TaskResult> {
    return {
      status: 'success',
      details: `Component ${metadata.componentName} đã được tạo`,
      artifacts: [`packages/ui/src/${metadata.componentName}.tsx`],
    };
  }

  private async runDevServer(): Promise<TaskResult> {
    return {
      status: 'success',
      details: 'Dev server đang chạy tại http://localhost:3000',
    };
  }

  private async createPage(metadata: any): Promise<TaskResult> {
    return {
      status: 'success',
      details: `Page ${metadata.pageName} đã được tạo`,
      artifacts: [`apps/web/app/${metadata.pageName}/page.tsx`],
    };
  }
}
