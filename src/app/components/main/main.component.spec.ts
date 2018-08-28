import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { DataReadService } from '../../services/data-read.service';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let dataServiceStub;
  let routerSpy;

  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router', {'navigate': new Promise(() => {})});
    dataServiceStub = {
      getAllTasks: jasmine.createSpy('getAllTasks')
    };
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [
        {provide: DataReadService, useValue: dataServiceStub},
        {provide: Router, useValue: routerSpy},
      ],
      imports: [MatTableModule]
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate task component when "onClick method was called"', function () {
    component.onClick(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/task/1']);
  });
});
