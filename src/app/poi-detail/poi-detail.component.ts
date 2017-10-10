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
  poi; // A single POI
  poiDBRef; // Reference to the specific document in FireStore

  constructor(private route: ActivatedRoute, private router: Router, private poiService: PoiService) { 
    
  }

  ngOnInit() {
    // We need to instantiate poi or we'll get errors on HTML load 
    this.poi = {};
    
    this.route.params.forEach((urlParameters) => {
      this.poiId = urlParameters['autoId'];
    });

    // Kept for Update purposes
    this.poiDBRef = this.poiService.getPoiObsByAutoId(this.poiId);

    // This fetches a Poi from FB, and turns the observable into an actual poi
    this.poiDBRef.subscribe(emitData => {
     this.poi = new Poi(
       emitData.name,
       emitData.description,
       emitData.latitude,
       emitData.longitude,
       emitData.img_url,
       emitData.tags,
       emitData.autoId);
     });

  } //end of ngOnInit

  UpdatePOI(
    editName: string, 
    editDesc: string, 
    editLatitude: number, 
    editLongitude: number, 
    editImgUrl: string, 
    editTags: string, 
    editAutoId: string) {

      console.log("STZ: update event occured");

      // Split tags into an array
      var tagsArray = editTags.split(",");

      var updatedPOI: Poi = new Poi(
        editName,
        editDesc,
        editLatitude,
        editLongitude,
        editImgUrl,
        tagsArray,
        editAutoId);
    this.poiService.updatePoi(updatedPOI);   
  }
}
