import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataReadService } from './services/data-read.service';
import { AppRoutingModule } from './router/router/router.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskComponent } from './components/task/task.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [DataReadService, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
