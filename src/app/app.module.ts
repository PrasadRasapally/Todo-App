import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { APP_CONFIG } from './app-config';
import { TASK_DI_CONFIG } from './app-config';

import { TasksService } from './services/tasks.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [AppComponent],
  providers: [
    TasksService,
    { provide: APP_CONFIG, useValue: TASK_DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
