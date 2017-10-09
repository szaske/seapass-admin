import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiListItemComponent } from './poi-list-item.component';

describe('PoiListItemComponent', () => {
  let component: PoiListItemComponent;
  let fixture: ComponentFixture<PoiListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
