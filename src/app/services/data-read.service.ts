import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataReadService {

  updatedTasks: Array<Task>;
  tasks: BehaviorSubject<Array<Task>>;
  dataUrl: string = './../assets/tasks.json';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.tasks = new BehaviorSubject([]);
  }

  getAllTasks() {
    return this.http.get(this.dataUrl).pipe(map((data: Array<Task>) => {
      this.tasks.next(data);
      return this.tasks.getValue().map((task: any) => {
        return {
          'id': task.id,
          'name': task.name,
          'creation_date': task.creation_date,
          'due_date': task.due_date,
          'start_date': task.start_date,
          'is_completed': task.is_completed,
          'is_archived': task.is_archived,
          'is_high_priority': task.is_high_priority,
          'estimated_effort': task.estimated_effort,
          'actual_effort': task.actual_effort,
          'physical_progress': task.physical_progress,
          'obj_status': task.obj_status,
          'description': task.description,
          'project_id': task.project_id,
          'tags': task.tags
        };
      });
    }));
  }

  getTaskById(id: number) {
    return this.http.get(this.dataUrl).pipe(map((data: Array<any>) => {
      return data.filter((item: Task) => {
        if (item.id == id) {
          return item;
        }
      });
    }));
  }

  sendTaskById(task: Task) {
    return this.http.put<Task>('https://somesite.com', task, this.httpOptions);
  }

  updateTaskOnClientSide(task: Task) {
    this.updatedTasks = this.tasks.getValue();
    this.updatedTasks.forEach(item => {
      if (item.id === task.id) {
        item.name = task.name;
      }
    });
    this.tasks.next(this.updatedTasks);
  }
}
