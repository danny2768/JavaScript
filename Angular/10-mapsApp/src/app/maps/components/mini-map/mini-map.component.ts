import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  @Input()
  public lngLat?: [number, number];

  public map?: Map;

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'The HTML element hasnt been found';
    if ( !this.lngLat ) throw 'LngLat can not be null.';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
      interactive: false,
    });

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    new Marker({
      color: color,
      draggable: true,
    }).setLngLat( this.lngLat )
      .addTo( this.map );
  }
}
