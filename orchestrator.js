 // Orchestrator cho xây dựng ứng dụng web full-stack
  class SoftwareOrchestrator {
    constructor() {
      this.agents = [];
      this.tasks = [];
      this.taskHistory = [];
    }

    // Thêm agent vào hệ thống
    addAgent(agent) {
      this.agents.push(agent);
    }

    // Tạo nhiệm vụ mới
    createTask(name, description, agentType, dependencies = []) {
      const task = {
        id: Date.now().toString(),
        name,
        description,
        agentType,
        dependencies,
        status: 'pending',
        createdAt: new Date(),
        assignedTo: null,
        result: null
      };
      this.tasks.push(task);
      return task;
    }

    // Phân công nhiệm vụ
    assignTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (!task || task.status !== 'pending') return null;

      // Tìm agent phù hợp
      const agent = this.agents.find(a => a.type === task.agentType);
      if (!agent) return null;

      task.status = 'assigned';
      task.assignedTo = agent.name;
      return task;
    }

    // Thực thi nhiệm vụ
    executeTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (!task || task.status !== 'assigned') return false;

      task.status = 'in_progress';
      task.startedAt = new Date();

      // Gọi agent để thực hiện
      const agent = this.agents.find(a => a.name === task.assignedTo);
      if (agent) {
        try {
          const result = agent.execute(task);
          task.result = result;
          task.completedAt = new Date();
          task.status = 'completed';
          this.taskHistory.push(task);
          return true;
        } catch (error) {
          task.status = 'failed';
          task.error = error.message;
          this.taskHistory.push(task);
          return false;
        }
      }

      return false;
    }

    // Lấy danh sách nhiệm vụ chưa hoàn thành
    getPendingTasks() {
      return this.tasks.filter(task => task.status === 'pending');
    }

    // Lấy danh sách nhiệm vụ đang thực hiện
    getInProgressTasks() {
      return this.tasks.filter(task => task.status === 'in_progress');
    }

    // Lấy danh sách nhiệm vụ đã hoàn thành
    getCompletedTasks() {
      return this.tasks.filter(task => task.status === 'completed');
    }

    // Kiểm tra xem tất cả nhiệm vụ đã hoàn thành chưa
    allTasksCompleted() {
      return this.tasks.every(task => task.status === 'completed' || task.status === 'failed');
    }

    // Lấy trạng thái tổng thể
    getStatus() {
      const pending = this.getPendingTasks().length;
      const inProgress = this.getInProgressTasks().length;
      const completed = this.getCompletedTasks().length;

      return {
        total: this.tasks.length,
        pending,
        inProgress,
        completed,
        status: this.allTasksCompleted() ? 'completed' : 'in_progress'
      };
    }
  }

  // Agent cho thiết kế database
  class DatabaseDesigner {
    constructor() {
      this.type = 'database';
      this.name = 'Database Designer';
    }

    execute(task) {
      console.log(`Database Designer đang thực hiện: ${task.name}`);
      // Logic thiết kế database
      return {
        schema: 'created',
        status: 'success',
        details: 'Database schema đã được thiết kế xong'
      };
    }
  }

  // Agent cho backend API
  class BackendDeveloper {
    constructor() {
      this.type = 'backend';
      this.name = 'Backend Developer';
    }

    execute(task) {
      console.log(`Backend Developer đang thực hiện: ${task.name}`);
      // Logic xây dựng API
      return {
        api: 'created',
        status: 'success',
        details: 'Backend API đã được xây dựng'
      };
    }
  }

  // Agent cho frontend
  class FrontendDeveloper {
    constructor() {
      this.type = 'frontend';
      this.name = 'Frontend Developer';
    }

    execute(task) {
      console.log(`Frontend Developer đang thực hiện: ${task.name}`);
      // Logic xây dựng giao diện
      return {
        ui: 'created',
        status: 'success',
        details: 'Giao diện người dùng đã được xây dựng'
      };
    }
  }

  // Agent cho testing
  class QAEngineer {
    constructor() {
      this.type = 'testing';
      this.name = 'QA Engineer';
    }

    execute(task) {
      console.log(`QA Engineer đang thực hiện: ${task.name}`);
      // Logic kiểm thử
      return {
        tests: 'completed',
        status: 'success',
        details: 'Tất cả test đã được thực hiện'
      };
    }
  }

  // Agent cho deployment
  class DevOpsEngineer {
    constructor() {
      this.type = 'deployment';
      this.name = 'DevOps Engineer';
    }

    execute(task) {
      console.log(`DevOps Engineer đang thực hiện: ${task.name}`);
      // Logic triển khai
      return {
        deployment: 'successful',
        status: 'success',
        details: 'Ứng dụng đã được triển khai thành công'
      };
    }
  }

  // Sử dụng Orchestrator
  function setupFullStackOrchestrator() {
    // Tạo Orchestrator
    const orchestrator = new SoftwareOrchestrator();

    // Thêm các agent
    orchestrator.addAgent(new DatabaseDesigner());
    orchestrator.addAgent(new BackendDeveloper());
    orchestrator.addAgent(new FrontendDeveloper());
    orchestrator.addAgent(new QAEngineer());
    orchestrator.addAgent(new DevOpsEngineer());

    // Tạo các nhiệm vụ theo thứ tự thực hiện
    const dbTask = orchestrator.createTask(
      'Thiết kế database',
      'Thiết kế schema cho ứng dụng web',
      'database'
    );

    const apiTask = orchestrator.createTask(
      'Xây dựng API backend',
      'Tạo REST API backend với Node.js/Express',
      'backend'
    );

    const uiTask = orchestrator.createTask(
      'Thiết kế UI/UX',
      'Tạo giao diện người dùng với React',
      'frontend'
    );

    const testTask = orchestrator.createTask(
      'Kiểm thử phần mềm',
      'Viết và thực hiện test case',
      'testing'
    );

    const deployTask = orchestrator.createTask(
      'Triển khai ứng dụng',
      'Triển khai lên server',
      'deployment'
    );

    // In ra thông tin các nhiệm vụ
    console.log('=== DANH SÁCH NHIỆM VỤ ===');
    orchestrator.tasks.forEach(task => {
      console.log(`${task.id}: ${task.name} (${task.agentType})`);
    });

    return orchestrator;
  }

  // Ví dụ sử dụng
  console.log('=== TẠO ORCHESTRATOR CHO ỨNG DỤNG WEB FULL-STACK ===');
  const orchestrator = setupFullStackOrchestrator();

  console.log('\n=== TRẠNG THÁI BAN ĐẦU ===');
  console.log(orchestrator.getStatus());

  // Phân công và thực thi lần lượt các nhiệm vụ
  console.log('\n=== PHÂN CÔNG VÀ THỰC HIỆN NHIỆM VỤ ===');

  // Thực thi database task
  const dbTask = orchestrator.tasks.find(t => t.name === 'Thiết kế database');
  if (dbTask) {
    orchestrator.assignTask(dbTask.id);
    orchestrator.executeTask(dbTask.id);
  }

  // Thực thi API task
  const apiTask = orchestrator.tasks.find(t => t.name === 'Xây dựng API backend');
  if (apiTask) {
    orchestrator.assignTask(apiTask.id);
    orchestrator.executeTask(apiTask.id);
  }

  // Thực thi UI task
  const uiTask = orchestrator.tasks.find(t => t.name === 'Thiết kế UI/UX');
  if (uiTask) {
    orchestrator.assignTask(uiTask.id);
    orchestrator.executeTask(uiTask.id);
  }

  // Thực thi test task
  const testTask = orchestrator.tasks.find(t => t.name === 'Kiểm thử phần mềm');
  if (testTask) {
    orchestrator.assignTask(testTask.id);
    orchestrator.executeTask(testTask.id);
  }

  // Thực thi deploy task
  const deployTask = orchestrator.tasks.find(t => t.name === 'Triển khai ứng dụng');
  if (deployTask) {
    orchestrator.assignTask(deployTask.id);
    orchestrator.executeTask(deployTask.id);
  }

  console.log('\n=== TRẠNG THÁI CUỐI CÙNG ===');
  console.log(orchestrator.getStatus());

  console.log('\n=== LỊCH SỬ NHIỆM VỤ ===');
  orchestrator.taskHistory.forEach(task => {
    console.log(`${task.name}: ${task.status}`);
    if (task.result) {
      console.log(`  Chi tiết: ${task.result.details}`);
    }
  });

  // Export để sử dụng
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      SoftwareOrchestrator,
      DatabaseDesigner,
      BackendDeveloper,
      FrontendDeveloper,
      QAEngineer,
      DevOpsEngineer,
      setupFullStackOrchestrator
    };
  }

