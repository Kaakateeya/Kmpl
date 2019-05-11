import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymotherComponent } from './mymother.component';

describe('MymotherComponent', () => {
  let component: MymotherComponent;
  let fixture: ComponentFixture<MymotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
