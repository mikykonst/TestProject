import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { MatTableModule } from "@angular/material";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const testRoutes: Route[] = [
    {path: 'tasks', component: AppComponent}
  ];

  @Component({template: '<router-outlet></router-outlet>'})
  class RouterOutletStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent
      ],
      imports: [ RouterTestingModule.withRoutes(testRoutes) ]
    });
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
});
