import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeController } from 'src/app/service/controller/exchange.controller/exchange-controller';




@Component({
  selector: 'app-exchangecurrency',
  templateUrl: './exchangecurrency.component.html',
  styleUrls: ['./exchangecurrency.component.css']
})
export class ExchangecurrencyComponent implements OnInit {
 
  currencyBaseList:Array<any>;
  genders:Array<any>;
  genderIdSelect:number;

  countrys:Array<any>;
  countryIdSelect:string;

  baseCurrencySelect:string;
  distCurrencySelect:string;
  constructor(private controller:ExchangeController) {
   
  }

  ngOnInit() {
   this.getGenderToList();
   this.getCountrysToList();
   this.getCurrencys();
  }

  title = 'Exchange Currency';

  getGenderToList(){
    this.controller.getGenders().subscribe(data =>{
      this.genders = data;
    })
  }
  getCountrysToList(){
    this.controller.getCountrys().subscribe(data =>{
      this.countrys = data;
    })
  }
  getCurrencys(){
    this.controller.getCurrencys().subscribe(data =>{
      this.currencyBaseList = data;
      console.log(data);
    })
  }
  test(data:any){
    console.log("ID : Gender ",data)
  }

}
