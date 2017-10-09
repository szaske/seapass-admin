import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiFormComponent } from './poi-form.component';

describe('PoiFormComponent', () => {
  let component: PoiFormComponent;
  let fixture: ComponentFixture<PoiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
