import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10); //@ This signal is Writable

  public squareCounter = computed( () => this.counter() * this.counter() ) //@ This signal NOT is Writable

  increaseBy( value: number ) {
    // this.counter.set( this.counter() + value);
    this.counter.update( current => current + value );
  }



}
