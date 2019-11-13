import { Component, OnInit } from '@angular/core';
import {TimerService} from '../services/timer.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit() {
    console.log(this.timerService.userTimer);
  }
  sum() {
    return this.timerService.userTimer.timers.reduce(function (x, item) { return x + item.time; }, 0);
  }
}
