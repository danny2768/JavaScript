import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  title: string = 'Counter component'

  counter: number = 0;
  value: number = 1;

  constructor(){

  }

  increaseBy( value: number ): void {
    this.counter += value
  }

  decreaseBy( value: number ): void {
    this.counter -= value
  }

  resetCounter(): void {
    this.counter = 0;
  }

}
