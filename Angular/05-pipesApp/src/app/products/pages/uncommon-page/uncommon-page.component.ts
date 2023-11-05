import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect Pipe
  public name: string = 'Daniel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(){
    this.name = 'Martha';
    this.gender = 'female';
  }

  // i18nPlural Pipe
  public clients: string[] = ['Maria', 'Pedro', 'Daniel', 'Hernando', 'Martha', 'Silvia']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(){
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'Daniel',
    age: 22,
    address: 'Montreal, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })

}
