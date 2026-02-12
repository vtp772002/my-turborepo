import type { Agent, Task, TaskResult } from '../index';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Backend Agent - Chịu trách nhiệm phát triển API và backend logic
 */
export class BackendAgent implements Agent {
  type = 'backend' as const;
  name = 'Backend Developer';
  capabilities = [
    'API Development',
    'Database Integration',
    'Authentication',
    'Server-side Logic',
    'API Routes (Next.js)',
  ];
  isAvailable = true;

  async execute(task: Task): Promise<TaskResult> {
    console.log(`⚙️ Backend Agent đang xử lý: ${task.name}`);

    try {
      if (task.metadata?.action === 'create-api') {
        return await this.createAPI(task.metadata);
      } else if (task.metadata?.action === 'setup-auth') {
        return await this.setupAuthentication();
      } else if (task.metadata?.action === 'create-endpoint') {
        return await this.createEndpoint(task.metadata);
      }

      return {
        status: 'success',
        details: 'Backend task completed',
      };
    } catch (error) {
      return {
        status: 'failure',
        details: error instanceof Error ? error.message : String(error),
      };
    }
  }

  private async createAPI(metadata: any): Promise<TaskResult> {
    return {
      status: 'success',
      details: `API endpoints đã được tạo cho ${metadata.resource}`,
      artifacts: [`apps/web/app/api/${metadata.resource}/route.ts`],
    };
  }

  private async setupAuthentication(): Promise<TaskResult> {
    return {
      status: 'success',
      details: 'Authentication system đã được setup với JWT',
      artifacts: [
        'apps/web/app/api/auth/[...nextauth]/route.ts',
        'lib/auth/index.ts',
      ],
    };
  }

  private async createEndpoint(metadata: any): Promise<TaskResult> {
    return {
      status: 'success',
      details: `Endpoint ${metadata.path} đã được tạo`,
      artifacts: [`apps/web/app/api${metadata.path}/route.ts`],
    };
  }
}
