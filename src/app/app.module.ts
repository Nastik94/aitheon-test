import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ReportComponent } from './report/report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TimerService} from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
