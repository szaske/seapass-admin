import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poi-list-item',
  templateUrl: './poi-list-item.component.html',
  styleUrls: ['./poi-list-item.component.css']
})
export class PoiListItemComponent implements OnInit {
 
  @Input() poi;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  poiDetails(passedObject) {
    this.router.navigate(['poi', passedObject.autoId]);
  }
}
