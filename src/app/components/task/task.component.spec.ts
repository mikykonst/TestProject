import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { DataReadService } from '../../services/data-read.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from "../../models/task";
import { Observable } from "rxjs";

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let dataServiceStub;
  let routerSpy;
  let activatedRoute;
  let task: Task;

  beforeEach(async(() => {
    task = new Task();
    task.name = 'New task';
    routerSpy = jasmine.createSpyObj('Router', {
      navigate: new Promise(() => {
      })
    });
    dataServiceStub = {
      getTaskById: jasmine.createSpy('getTaskById'),
      updateTaskOnClientSide: jasmine.createSpy('updateTaskOnClientSide')
    };
    activatedRoute = {
      snapshot: jasmine.createSpy('snapshot')
    };
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [
        {provide: DataReadService, useValue: dataServiceStub},
        {provide: Router, useValue: routerSpy},
        {provide: ActivatedRoute, useValue: activatedRoute}
      ],
      imports: [MatCardModule, MatIconModule]
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to home page', function () {
    component.updateAndGoHome();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
  it('should check if "updateTaskOnClientSide" method has been called', function () {
    spyOn(component, 'updateLocalTasks');
    dataServiceStub.updateTaskOnClientSide(task);
    component.updateLocalTasks(task);
    expect(dataServiceStub.updateTaskOnClientSide).toHaveBeenCalled();
  });
  it('should navigate to home page after "updateLocalTasks" method has been called', () => {
    spyOn(component, 'updateLocalTasks');
    component.updateLocalTasks(task);
    expect(component.updateLocalTasks).toHaveBeenCalledWith(task);
  })
});
