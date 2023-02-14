import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

// ! Es de suma importancia agregar el export
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;

    base: number = 5;

    acumular(valor: number) {
        this.numero += valor
    }
}