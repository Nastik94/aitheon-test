export class TimerStates {
  name: string;
  timers: Timer[];
  constructor(value: string, count: number) {
    this.name = value;
    this.timers = [];
    while (count--) {
      this.timers.push(new Timer());
    }
  }
}
export class Timer {
  time: number;
  status: boolean;
  constructor() {
    this.time = 0;
    this.status = false;
  }
}
