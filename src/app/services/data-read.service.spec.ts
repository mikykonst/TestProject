import { TestBed, inject } from "@angular/core/testing";

import { DataReadService } from "./data-read.service";
import { Task } from "../models/task";
import { BehaviorSubject } from "../../../node_modules/rxjs";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe("DataReadService", () => {
  let dataService: DataReadService;
  let data: string;
  let url;
  let task: Task;
  let service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const taskServiceStub = {
      tasks: new BehaviorSubject([])
    }
    task = new Task();
    data = `[
      {
        "id": 1,
        "name": "Today_task1",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
      },
      {
        "id": 11,
        "name": "Today_task11",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0,
        "tags": [
          "meeting"
        ]
      }
    ]`;
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataReadService
      ]
    });
    service = TestBed.get(DataReadService);
  });
  it('should create', () => {
    expect(service).toBeTruthy();
  });
  
});
