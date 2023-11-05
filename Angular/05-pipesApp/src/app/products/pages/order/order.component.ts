import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderby: keyof Hero | '' = '';

  public heroes: Hero[] = [
    {
      name: 'SuperMan',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    },

  ]

  toggleUpperCase(){
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ){
    this.orderby = value;
  }
}
