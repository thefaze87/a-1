import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name!: string;
  isAddingTask = false;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
  
  onStartAddTask (){
    this.isAddingTask = true;
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
