import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivaldepartureComponent } from './arrivaldeparture.component';

describe('ArrivaldepartureComponent', () => {
  let component: ArrivaldepartureComponent;
  let fixture: ComponentFixture<ArrivaldepartureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivaldepartureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivaldepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
