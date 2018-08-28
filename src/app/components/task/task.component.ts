import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataReadService } from '../../services/data-read.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task: Task;
  id: number;

  constructor(private activateRouter: ActivatedRoute, private dataService: DataReadService, private router: Router) {
  }

  ngOnInit() {
    this.id = this.getIdFromUrl();
    if (this.dataService.tasks.getValue().length === 0) {
      this.showJSONTasks();
    } else {
      this.showLocalTasks();
    }
  }

  getIdFromUrl() {
    return this.activateRouter.snapshot.params['id'];
  }

  showJSONTasks() {
    this.dataService.getTaskById(this.id).subscribe(data => {
      this.task = data[0];
    });
  }

  showLocalTasks() {
    this.dataService.tasks.getValue().forEach(item => {
      if (item.id == this.id) {
        this.task = item;
      }
    });
  }

  onBlurNameUpdate(e) {
    this.task.name = e.target.innerText;
    this.makePutRequest(this.task);
    this.updateLocalTasks(this.task);
  }

  updateAndGoHome() {
    this.router.navigate(['/']);
  }

  updateLocalTasks(task: Task) {
    this.dataService.updateTaskOnClientSide(task);
  }

  makePutRequest(task: Task) {
    this.dataService.sendTaskById(task).subscribe(() => {
      alert(`Task ${task.name} has been sent`);
    });
  }
}
