/**
 * Platform Orchestrator - Quản lý phát triển sản phẩm công nghệ
 * Tích hợp với Turborepo để điều phối các tác vụ phát triển
 */

export interface Task {
  id: string;
  name: string;
  description: string;
  agentType: AgentType;
  dependencies: string[];
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  assignedTo: string | null;
  result: TaskResult | null;
  error?: string;
  metadata?: Record<string, any>;
}

export type TaskStatus = 'pending' | 'assigned' | 'in_progress' | 'completed' | 'failed' | 'blocked';
export type AgentType =
  | 'database'
  | 'backend'
  | 'frontend'
  | 'testing'
  | 'deployment'
  | 'design'
  | 'documentation'
  | 'security'
  | 'performance';

export interface TaskResult {
  status: 'success' | 'failure';
  details: string;
  artifacts?: string[];
  metrics?: Record<string, any>;
}

export interface Agent {
  type: AgentType;
  name: string;
  capabilities: string[];
  isAvailable: boolean;
  execute(task: Task): Promise<TaskResult>;
}

export class PlatformOrchestrator {
  private agents: Map<string, Agent> = new Map();
  private tasks: Map<string, Task> = new Map();
  private taskQueue: string[] = [];
  private taskHistory: Task[] = [];
  private workspaceRoot: string;

  constructor(workspaceRoot: string = process.cwd()) {
    this.workspaceRoot = workspaceRoot;
  }

  /**
   * Đăng ký agent vào hệ thống
   */
  registerAgent(agent: Agent): void {
    this.agents.set(agent.name, agent);
    console.log(`✅ Đã đăng ký agent: ${agent.name} (${agent.type})`);
  }

  /**
   * Tạo nhiệm vụ mới
   */
  createTask(params: {
    name: string;
    description: string;
    agentType: AgentType;
    dependencies?: string[];
    priority?: 'low' | 'medium' | 'high' | 'critical';
    metadata?: Record<string, any>;
  }): Task {
    const task: Task = {
      id: this.generateTaskId(),
      name: params.name,
      description: params.description,
      agentType: params.agentType,
      dependencies: params.dependencies || [],
      status: 'pending',
      priority: params.priority || 'medium',
      createdAt: new Date(),
      assignedTo: null,
      result: null,
      metadata: params.metadata,
    };

    this.tasks.set(task.id, task);
    this.taskQueue.push(task.id);

    console.log(`📝 Tạo task: ${task.name} (${task.id})`);
    return task;
  }

  /**
   * Tìm agent phù hợp cho task
   */
  private findAvailableAgent(agentType: AgentType): Agent | null {
    for (const agent of this.agents.values()) {
      if (agent.type === agentType && agent.isAvailable) {
        return agent;
      }
    }
    return null;
  }

  /**
   * Kiểm tra dependencies đã hoàn thành chưa
   */
  private areDependenciesCompleted(task: Task): boolean {
    return task.dependencies.every(depId => {
      const depTask = this.tasks.get(depId);
      return depTask?.status === 'completed';
    });
  }

  /**
   * Phân công nhiệm vụ cho agent
   */
  async assignTask(taskId: string): Promise<boolean> {
    const task = this.tasks.get(taskId);
    if (!task || task.status !== 'pending') {
      console.log(`⚠️ Task ${taskId} không thể assign`);
      return false;
    }

    // Kiểm tra dependencies
    if (!this.areDependenciesCompleted(task)) {
      task.status = 'blocked';
      console.log(`🚫 Task ${task.name} bị block do dependencies chưa hoàn thành`);
      return false;
    }

    // Tìm agent
    const agent = this.findAvailableAgent(task.agentType);
    if (!agent) {
      console.log(`⚠️ Không tìm thấy agent cho ${task.agentType}`);
      return false;
    }

    task.status = 'assigned';
    task.assignedTo = agent.name;
    console.log(`👤 Assign task "${task.name}" cho ${agent.name}`);

    return true;
  }

  /**
   * Thực thi nhiệm vụ
   */
  async executeTask(taskId: string): Promise<boolean> {
    const task = this.tasks.get(taskId);
    if (!task || task.status !== 'assigned') {
      console.log(`⚠️ Task ${taskId} chưa được assign`);
      return false;
    }

    const agent = this.agents.get(task.assignedTo!);
    if (!agent) {
      console.log(`⚠️ Không tìm thấy agent ${task.assignedTo}`);
      return false;
    }

    try {
      task.status = 'in_progress';
      task.startedAt = new Date();
      console.log(`🚀 Bắt đầu thực hiện: ${task.name}`);

      const result = await agent.execute(task);

      task.result = result;
      task.completedAt = new Date();
      task.status = 'completed';
      this.taskHistory.push(task);

      const duration = task.completedAt.getTime() - task.startedAt.getTime();
      console.log(`✅ Hoàn thành: ${task.name} (${duration}ms)`);

      // Unblock các task phụ thuộc
      await this.unblockDependentTasks(taskId);

      return true;
    } catch (error) {
      task.status = 'failed';
      task.error = error instanceof Error ? error.message : String(error);
      this.taskHistory.push(task);
      console.error(`❌ Thất bại: ${task.name} - ${task.error}`);
      return false;
    }
  }

  /**
   * Unblock các task đang chờ task này hoàn thành
   */
  private async unblockDependentTasks(completedTaskId: string): Promise<void> {
    for (const task of this.tasks.values()) {
      if (task.status === 'blocked' && task.dependencies.includes(completedTaskId)) {
        if (this.areDependenciesCompleted(task)) {
          task.status = 'pending';
          console.log(`🔓 Unblock task: ${task.name}`);
        }
      }
    }
  }

  /**
   * Thực thi tất cả tasks theo thứ tự ưu tiên
   */
  async executeAll(): Promise<void> {
    console.log('\n🎯 Bắt đầu thực thi workflow...\n');

    const sortedTasks = Array.from(this.tasks.values()).sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    for (const task of sortedTasks) {
      if (task.status === 'pending') {
        await this.assignTask(task.id);
        await this.executeTask(task.id);
      }
    }

    console.log('\n🎉 Workflow hoàn thành!\n');
  }

  /**
   * Lấy trạng thái tổng thể
   */
  getStatus(): {
    total: number;
    pending: number;
    inProgress: number;
    completed: number;
    failed: number;
    blocked: number;
    completionRate: number;
  } {
    const tasks = Array.from(this.tasks.values());
    const stats = {
      total: tasks.length,
      pending: tasks.filter(t => t.status === 'pending').length,
      inProgress: tasks.filter(t => t.status === 'in_progress').length,
      completed: tasks.filter(t => t.status === 'completed').length,
      failed: tasks.filter(t => t.status === 'failed').length,
      blocked: tasks.filter(t => t.status === 'blocked').length,
      completionRate: 0,
    };

    stats.completionRate = stats.total > 0
      ? Math.round((stats.completed / stats.total) * 100)
      : 0;

    return stats;
  }

  /**
   * Generate task ID duy nhất
   */
  private generateTaskId(): string {
    return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Lấy danh sách tasks
   */
  getTasks(filter?: { status?: TaskStatus; agentType?: AgentType }): Task[] {
    let tasks = Array.from(this.tasks.values());

    if (filter?.status) {
      tasks = tasks.filter(t => t.status === filter.status);
    }

    if (filter?.agentType) {
      tasks = tasks.filter(t => t.agentType === filter.agentType);
    }

    return tasks;
  }

  /**
   * Lấy task history
   */
  getHistory(): Task[] {
    return this.taskHistory;
  }

  /**
   * In báo cáo
   */
  printReport(): void {
    const status = this.getStatus();

    console.log('\n╔════════════════════════════════════════╗');
    console.log('║     PLATFORM ORCHESTRATOR REPORT      ║');
    console.log('╚════════════════════════════════════════╝\n');

    console.log(`📊 Tổng quan:`);
    console.log(`   Tổng số tasks: ${status.total}`);
    console.log(`   ⏳ Pending: ${status.pending}`);
    console.log(`   🔄 In Progress: ${status.inProgress}`);
    console.log(`   ✅ Completed: ${status.completed}`);
    console.log(`   ❌ Failed: ${status.failed}`);
    console.log(`   🚫 Blocked: ${status.blocked}`);
    console.log(`   📈 Completion Rate: ${status.completionRate}%\n`);

    if (this.taskHistory.length > 0) {
      console.log(`📜 Task History:`);
      this.taskHistory.forEach((task, index) => {
        const duration = task.completedAt && task.startedAt
          ? task.completedAt.getTime() - task.startedAt.getTime()
          : 0;
        const icon = task.status === 'completed' ? '✅' : '❌';
        console.log(`   ${index + 1}. ${icon} ${task.name} (${duration}ms)`);
      });
    }
  }
}
