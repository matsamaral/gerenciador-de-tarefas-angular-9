import { TarefasModule } from './tarefas';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
