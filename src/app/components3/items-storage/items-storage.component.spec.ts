import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsStorageComponent } from './items-storage.component';

describe('ItemsStorageComponent', () => {
  let component: ItemsStorageComponent;
  let fixture: ComponentFixture<ItemsStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
