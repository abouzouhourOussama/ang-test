import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCalcComponent } from './random-calc.component';

describe('RandomCalcComponent', () => {
  let component: RandomCalcComponent;
  let fixture: ComponentFixture<RandomCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
