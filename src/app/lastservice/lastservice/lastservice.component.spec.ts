import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastserviceComponent } from './lastservice.component';

describe('LastserviceComponent', () => {
  let component: LastserviceComponent;
  let fixture: ComponentFixture<LastserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
