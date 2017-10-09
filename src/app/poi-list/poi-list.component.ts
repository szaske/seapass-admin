import { Component, OnInit } from '@angular/core';

import { Poi } from '../poi';
import { Router } from '@angular/router';
import { PoiService } from '../poi.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
  providers: [PoiService]
})
export class PoiListComponent implements OnInit {

  // Variables
  pois;

  constructor(private router: Router, private poiService: PoiService) { }

  ngOnInit() {
    this.pois = this.poiService.getPois();
    console.log(this.pois);
  }

}
