import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiDetailComponent } from './poi-detail.component';

describe('PoiDetailComponent', () => {
  let component: PoiDetailComponent;
  let fixture: ComponentFixture<PoiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
