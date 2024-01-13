import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">

      <ng-content #name/>

    </section>
  `

})
export class HeavyLoadersFastComponent {

  @Input({ required: true})
  public cssClass!: string;

  constructor() {
    console.log('Heavy Loader Fast Creado');
  }

}
