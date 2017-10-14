import { Component, OnInit } from '@angular/core';
import { Poi } from '../poi';
import { PoiService } from '../poi.service';

@Component({
  selector: 'app-poi-form',
  templateUrl: './poi-form.component.html',
  styleUrls: ['./poi-form.component.css'],
  providers: [PoiService]
})
export class PoiFormComponent implements OnInit {

  constructor(private poiService: PoiService) { }

  ngOnInit() {
  }

  submitForm( newName: string, newDesc: string, newLatitude: number, newLongitude: number, newImgUrl: string, newTags: string, newAutoId: string) {
    //code here

    // Split tags into an array
    var tagsArray = newTags.split(",");
    
          var newPOI: Poi = new Poi(
            newName,
            newDesc,
            newLatitude,
            newLongitude,
            newImgUrl,
            tagsArray,
            newAutoId);
        this.poiService.addPOI(newPOI); 
  }

}
