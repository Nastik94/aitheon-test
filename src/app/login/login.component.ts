import {ChangeDetectionStrategy, Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginData} from './login.classes';
import {Router} from '@angular/router';
import {TimerService} from '../services/timer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  user = new LoginData();
  form: FormGroup;
  constructor(private router: Router, private timerService: TimerService) {
    this.form = new FormGroup({
      'login': new FormControl(this.user.login),
      'password': new FormControl(this.user.password)
    });
  }
  get login() { return this.form.get('login'); }
  logIn() {
    localStorage.setItem('user', JSON.stringify(this.form.value));
    this.timerService.setUserTimer(this.login.value);
    this.router.navigate(['./page1']);
  }
}
