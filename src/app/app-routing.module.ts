import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {ReportComponent} from './report/report.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'page1', canActivate: [AuthGuard], component: Page1Component},
  {path: 'page2', canActivate: [AuthGuard], component: Page2Component},
  {path: 'page3', canActivate: [AuthGuard], component: Page3Component},
  {path: 'report', component: ReportComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
