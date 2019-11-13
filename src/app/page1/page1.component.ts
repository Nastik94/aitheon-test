import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
