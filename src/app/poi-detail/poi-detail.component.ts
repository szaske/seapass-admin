import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Poi } from '../poi';
import { PoiService } from '../poi.service';

@Component({
  selector: 'app-poi-detail',
  templateUrl: './poi-detail.component.html',
  styleUrls: ['./poi-detail.component.css'],
  providers: [PoiService]
})
export class PoiDetailComponent implements OnInit {
  poiId: string;
  
  poi;

  editFormVisable: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private poiService: PoiService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.poiId = urlParameters['autoId'];
    });

    // This fetches a Poi from FB, and turns the observable into an actual poi
    this.poiService.getPoiByAutoId(this.poiId).subscribe(emitData => {
     this.poi = new Poi(
       emitData.name,
       emitData.description,
       emitData.latitude,
       emitData.longitude,
       emitData.img_url,
        emitData.tags,
      emitData.autoId);
     console.log(this.poi);
     });
  }

}
