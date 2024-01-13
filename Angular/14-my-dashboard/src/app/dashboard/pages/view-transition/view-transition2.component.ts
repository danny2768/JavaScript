import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View transition 2"/>

    <section class="flex justify-end">

      <img
        srcset="https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Golden Retriver"
        width="200"
        height="300"
        style="view-transition-name: golden1"
        >

      <img
        srcset="https://plus.unsplash.com/premium_photo-1661951641996-3685492b78ed?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Golden Retriver"
        width="200"
        height="300"
        style="view-transition-name: golden2"
        >

      <div
        class="bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: div1"
        ></div>


    </section>
  `

})
export default class ViewTransitionComponent {

}
