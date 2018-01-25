import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { TemplateEditComponent } from './template-edit/template-edit.component';


@NgModule
({
  declarations: 
  [
    AppComponent,TemplateEditComponent
  ],
  imports: 
  [
    BrowserModule,NoopAnimationsModule,FormsModule,MatInputModule,MatSelectModule,MatMenuModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [TemplateEditComponent]
})
export class AppModule { }
