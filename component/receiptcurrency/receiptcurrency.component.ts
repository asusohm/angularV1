import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiptcurrency',
  templateUrl: './receiptcurrency.component.html',
  styleUrls: ['./receiptcurrency.component.css']
})
export class ReceiptcurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'ReceiptCurrency';

  displayedColumns: string[] = ['rID', 'customer', 'personnelexchange','currencyA','currencyB', 'servicecenter','time','date'];
  dataSource = ELEMENT_DATA_RE;
}

export interface ReceiptCurrencyElement {
  currencyA: number;
  currencyB: number;
  customer: string;
  rID: number;
  personnelexchange: string;
  servicecenter: string;
  date: string;
  time: string;
}

const ELEMENT_DATA_RE: ReceiptCurrencyElement[] = [
  {rID: 1, customer: 'นาย xxxx xxxx', personnelexchange: 'นาย มณฑล แก่นโพธิ์',currencyA: 0.00,currencyB:0.00, servicecenter: 'สุรนารี',time:'xx.xx',date:'xx/xx/xxxx'}
];