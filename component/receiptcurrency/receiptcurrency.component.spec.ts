import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptcurrencyComponent } from './receiptcurrency.component';

describe('ReceiptcurrencyComponent', () => {
  let component: ReceiptcurrencyComponent;
  let fixture: ComponentFixture<ReceiptcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
