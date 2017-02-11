import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicGridComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
