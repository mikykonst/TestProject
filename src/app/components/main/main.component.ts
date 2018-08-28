import {Component, OnInit} from '@angular/core';
import {DataReadService} from '../../services/data-read.service';
import {Task} from '../../models/task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tasks: Array<Task>;
  displayedColumns: string[] = ['name', 'tags', 'actual_effort', 'estimated_effort', 'due_date'];

  constructor(private dataService: DataReadService, private router: Router) {
  }

  ngOnInit() {
    if (this.dataService.tasks.getValue().length === 0) {
      this.dataService.getAllTasks().subscribe(data => {
        this.tasks = data;
        const arr = this.tasks.filter((task) => {
          if (task.obj_status === 'active') {
            return task;
          }
        });
      });
    } else {
      this.tasks = this.dataService.tasks.getValue();
    }
  }

  onClick(id) {
    this.router.navigate([`/task/${id}`]);
  }
}
