import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CurrencyRateController } from 'src/app/service/controller/currency.rate.controller/currency-rate-controller';
import { FormatDate } from 'src/app/service/format/format-date';
import { error } from 'protractor';

export interface PeriodicElement {
  currencyCode: string;
  currencyName: string;
  curSelect: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource:Array<any>;
  dateInput:string;
  constructor(private router: Router,
    private controller:CurrencyRateController,
    private formatDate:FormatDate) { 
    
  }
  
  ngOnInit() {
    this.getExchangeRatesLast();
   
  }
  displayedColumns: string[] = ['currencyCode', 'currencyName', 'curSelect'];
  private getExchangeRatesLast(){
    this.controller.getExchangeRatesLast().subscribe(data=>{
      console.log("Data " ,data);
      this.dataSource = data;    
    },error=>{
      console.log("Error : " ,error)
    });
  }
  dateChange(){
    
    this.dateInput = this.formatDate.formatDate(this.dateInput);
    console.log(this.dateInput);
    this.controller.getExchangeRateByDate(this.dateInput).subscribe(data =>{
      this.dataSource = data;
      console.log("Data " ,data);
    },error => {
      console.log("Error : " ,error)
    });
  }
  

  skip(){
    this.router.navigate(['login']);
  }
}
