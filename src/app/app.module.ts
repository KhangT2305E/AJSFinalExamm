import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule ,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './page/todo/todo.component';
import { InprogressComponent } from './page/inprogress/inprogress.component';
import { InreviewComponent } from './page/inreview/inreview.component';
import { DoneComponent } from './page/done/done.component';

const appRoute: Routes = [
  {path: "todo", component: TodoComponent},
  {path: "inprogress", component: InprogressComponent},
  {path: "inreview", component: InreviewComponent},
  {path: "done", component: DoneComponent},
];

@NgModule({
  declarations: [
    AppComponent, TodoComponent, InprogressComponent,
    InreviewComponent, DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
