import {Component, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {timer} from 'rxjs';
import {TimerService} from './services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMenu = false;
  timer = timer(120000);
  timerSubscriber: any;
  timerPages = ['/page1', '/page2', '/page3'];
  pageIndex = -1;
  constructor(private router: Router, public timerService: TimerService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pageIndex = this.timerPages.indexOf(event.url);
        if (this.pageIndex !== -1) {
          this.showMenu = true;
          this.resetTimer();
        } else {
          this.timerService.stopTimers();
        }
      }
    });
  }
  @HostListener('window:keydown', ['$event'])
  @HostListener('window:click', ['$event'])
  hostEvent(event) {
    if (this.pageIndex !== -1) {
      this.resetTimer();
    }
  }
  logOut() {
    localStorage.removeItem('user');
    this.showMenu = false;
    this.router.navigate(['./report']);
  }
  resetTimer() {
    this.timerService.startTimer(this.pageIndex);
    if (this.timerSubscriber) { this.timerSubscriber.unsubscribe(); }
    this.timerSubscriber = this.timer.subscribe(() => {
      this.timerService.stopTimers();
    });
  }
}
