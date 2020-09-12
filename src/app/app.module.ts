import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoRoutingModule } from './todo/todo-routing.module';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,    
    TodoRoutingModule,
    AppRoutingModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
