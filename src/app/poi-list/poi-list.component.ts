import { Component, OnInit } from '@angular/core';

import { Poi } from '../poi';
import { PoiService } from '../poi.service';
import { Observable } from 'rxjs/Observable';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
  providers: [PoiService]
})
export class PoiListComponent implements OnInit {

  // Variables
  pois;

  constructor(private poiService: PoiService) { }

  ngOnInit() {
    this.pois = this.poiService.getPois();
    console.log(this.pois);
  }

}

export interface Poi {
  name: string;
  latitude: number;
}
