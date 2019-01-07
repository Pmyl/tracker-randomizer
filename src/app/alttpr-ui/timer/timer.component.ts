import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private running: boolean;
  private display: string;
  private results: any;
  private times: Array<number>;
  private time: number;

  public async ngOnInit() {
  }

  constructor() {
    this.running = false;
    this.times = [];
    this.reset();
    this.print();
  }

  @HostListener('window:keyup.r')
  reset() {
    this.times = [0, 0, 0, 0];
    this.print();
  }
  
  @HostListener('window:keyup.q')
  public action() {
    if (this.time) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    if (!this.time) this.time = performance.now();
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.step.bind(this));
    }
  }

  stop() {
    this.running = false;
    this.time = null;
  }

  restart() {
    if (!this.time) this.time = performance.now();
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.step.bind(this));
    }
    this.reset();
  }

  step(timestamp) {
    if (!this.running) return;
    this.calculate(timestamp);
    this.time = timestamp;
    this.print();
    requestAnimationFrame(this.step.bind(this));
  }

  calculate(timestamp) {
    var diff = timestamp - this.time;
    // Hundredths of a second are 100 ms
    this.times[3] += diff / 10;
    // Seconds are 100 hundredths of a second
    if (this.times[3] >= 100) {
      this.times[2] += 1;
      this.times[3] -= 100;
    }
    // Minutes are 60 seconds
    if (this.times[2] >= 60) {
      this.times[1] += 1;
      this.times[2] -= 60;
    }
    // Hours are 60 minutes
    if (this.times[1] >= 60) {
      this.times[0] += 1;
      this.times[1] -= 60;
    }
  }

  print() {
    this.display = this.format(this.times);
  }

  format(times: Array<number>) {
    return `${this.pad0(times[0], 2)}:${this.pad0(times[1], 2)}:${this.pad0(times[2], 2)}:${this.pad0(Math.floor(times[3]), 2)}`;
  }

  private pad0(value: number, count: number) {
    var result = value.toString();
    for (; result.length < count; --count)
      result = '0' + result;
    return result;
  }
}
