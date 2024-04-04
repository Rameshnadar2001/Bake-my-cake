import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeOrdersComponent } from './cake-orders.component';

describe('CakeOrdersComponent', () => {
  let component: CakeOrdersComponent;
  let fixture: ComponentFixture<CakeOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeOrdersComponent]
    });
    fixture = TestBed.createComponent(CakeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
