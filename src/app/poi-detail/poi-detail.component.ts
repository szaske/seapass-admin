import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Poi } from '../poi';
import { PoiService } from '../poi.service';

@Component({
  selector: 'app-poi-detail',
  templateUrl: './poi-detail.component.html',
  styleUrls: ['./poi-detail.component.css']
})
export class PoiDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
