import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poi-list-item',
  templateUrl: './poi-list-item.component.html',
  styleUrls: ['./poi-list-item.component.css']
})
export class PoiListItemComponent implements OnInit {
 
  @Input() poi;
  constructor() { }

  ngOnInit() {
  }

}
