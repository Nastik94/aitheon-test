import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page3Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
