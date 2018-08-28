import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../components/main/main.component';
import {TaskComponent} from '../../components/task/task.component';
import {NotFoundComponent} from '../../components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: MainComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
