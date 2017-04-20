import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';

import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService) { }

  //lifecyle start
  ngOnInit() {
    let map = new Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 12,
      center: [-0.1376611323, 51.52172253]
    });
    this.mapService.map = map;
  }

}
