import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryComponent } from './ordersummary.component';

describe('OrdersummaryComponent', () => {
  let component: OrdersummaryComponent;
  let fixture: ComponentFixture<OrdersummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
