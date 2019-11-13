import { Injectable } from '@angular/core';
import {timer} from 'rxjs';
import { TimerStates } from './timer.classes';

@Injectable()

export class TimerService {
  userTimer: TimerStates;
  subscriber: any;
  timer = timer(0, 1000);
  constructor() { if (localStorage.getItem('timers')) {
    this.userTimer = JSON.parse(localStorage.getItem('timers'));
  } }
  setUserTimer(value: string) {
    this.userTimer = new TimerStates(value, 3);
  }
  stopTimers() {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
      this.userTimer.timers.map(item => item.status = false);
    }
  }
  startTimer(index: number) {
    if (!this.userTimer.timers[index].status) {
      this.stopTimers();
      this.userTimer.timers[index].status = true;
      this.subscriber = this.timer.subscribe(() => {
        ++this.userTimer.timers[index].time;
        localStorage.setItem('timers', JSON.stringify(this.userTimer));
      });
    }
  }
}
