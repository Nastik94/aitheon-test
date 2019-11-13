import { Component, OnInit } from '@angular/core';
import {TimerService} from '../services/timer.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log(this.timerService.userTimer);
  }

}
