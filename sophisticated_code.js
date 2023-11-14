/* sophisticated_code.js */

// This code demonstrates a complex and creative implementation of a task scheduler

class Task {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class TaskScheduler {
  constructor() {
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  runTasks() {
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      console.log(`Running task: ${task.name}`);
      this.executeTask(task);
    }

    this.tasks = [];
    console.log("All tasks completed!");
  }

  executeTask(task) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Completed task: ${task.name}`);
        this.completedTasks.push(task);
        resolve();
      }, task.duration);
    });
  }
}

// Usage:

const task1 = new Task("Task 1", 2000);
const task2 = new Task("Task 2", 3000);
const task3 = new Task("Task 3", 1000);

const scheduler = new TaskScheduler();

scheduler.addTask(task1);
scheduler.addTask(task2);
scheduler.addTask(task3);

scheduler.runTasks();