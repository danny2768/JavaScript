import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './contry-table.component.html',
  styleUrls: ['./contry-table.component.css']
})
export class ContryTableComponent {
  @Input()
  public countries: Country[] = [];
}
