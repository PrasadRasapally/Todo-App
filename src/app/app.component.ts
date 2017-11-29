import { Component, Inject } from '@angular/core';
import { Headers } from '@angular/http';

import { TasksService } from './services/tasks.service';
import { Task } from './Task';

import { APP_CONFIG } from './app-config';
import { AppConfig } from './app-config-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  tasks: any;

  apiEndpont: string;

  isFormOpen = false;

  isUpdate = false;

  model = new Task(1, "task1", "pending");

  constructor(
    private tasksService: TasksService,
    @Inject(APP_CONFIG) config: AppConfig
  ) {
    this.apiEndpont = config.apiEndpoint;
    this.getExistingTasks();
  };

  getExistingTasks() {

    this.tasksService.getTasks(this.apiEndpont)
      .then(response => {
        this.tasks = JSON.parse(response._body);
      })

  };

  showTaskForm() {
    this.isFormOpen = true;
  };

  hideTaskForm() {
    this.isFormOpen = false;
    this.isUpdate = false;
  };

  clearTask() {
    this.model = new Task(1, '', '');
  };

  onSubmit(formData: any) {
    this.isFormOpen = false;
    console.log("formData ", formData);

    formData.taskId = parseInt(formData.taskId);

    this.tasksService.addNewTask(this.apiEndpont, formData, this.headers)
      .then(response => {
        console.log(response);
        this.getExistingTasks();
      })
      .catch(error => console.log("error ", error))
  };

  showFormForUpdate(task: any) {
    this.isUpdate = true;
    this.model = new Task(parseInt(task.taskId), task.name, task.status);
    this.showTaskForm();
  };

  updateTask() {
    this.isUpdate = false;
    console.log("this.model ", this.model);
    this.tasksService.updateTaskWithId(this.apiEndpont, this.model, this.headers)
      .then(response => {
        console.log(response);
        this.hideTaskForm();
        this.getExistingTasks();
      })
      .catch(error => console.log("error ", error))
  }

  removeTask(taskId) {
    this.tasksService.deleteTaskWithId(this.apiEndpont, taskId)
      .then(response => {
        console.log(response);
        this.getExistingTasks();
      })
      .catch(error => console.log("error ", error))
  }

}
