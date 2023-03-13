import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentDataService } from './department/department-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [{provide: DepartmentDataService, useFactory: ()=> console.log('test') }],
  bootstrap: [AppComponent]
})
export class AppModule { }
