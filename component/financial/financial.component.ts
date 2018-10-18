import { Component, OnInit } from '@angular/core';
import { TransactionController } from 'src/app/service/controller/transaction.controller/transaction-controller';

import { Router } from '@angular/router';
import { Authentication } from 'src/app/service/authentication/authentication';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
    currencySelect:string;
    employeeName:string;
    position:string;
    serviceCenterName:string;
    personalUser:string;
    expansions:Array<any>;
    serviceID:any ;
    currencys:Array<any>;
    balanceInput:number;
    transactions:Array<any> ;
    transactionSelectID:number;
    hasTransaction:boolean=true;
    balanceAmount:number;
   constructor(private controller:TransactionController,private router:Router ) {
   if (Authentication.isAuthentication() == false && !(Authentication.getPosition() == "TM")) {
      this.router.navigate(['login-admin']);
    } else {
      this.router.navigate(['transaction']);
    }
    
  }
  
  ngOnInit() {
    this.getDetail();
    this.getTransactionToList();
    this.getCurrencyToList();
    this.getTransactionType();
  }

  private getTransactionToList(){
    this.controller.getBalanceBySeviceCenterID(this.serviceID).subscribe(data =>{
      this.expansions = data;
      console.log(data);
    },error=>{
      console.log(error);
    })
  } 

  getTransactionType(){
    this.controller.getTransactionType().subscribe(data =>{
      this.transactions = data;
      console.log(data);
    })
  }
  getCurrencyToList(){
    this.controller.getCurrencys().subscribe(data =>{
      this.currencys = data;
    })
  }

  getDetail(){
    this.employeeName = Authentication.getNameAdmin();
    this.position = Authentication.getPosition();
    this.serviceCenterName = Authentication.getServiceCenterName();
    this.serviceID = Authentication.getServiceCenterID();
    this.personalUser = Authentication.getUsername();
    console.log(this.employeeName,this.position,this.serviceCenterName);
  }
  editBalance(currency:string){
    this.controller.postTransaction(currency,this.serviceID,this.personalUser,this.transactionSelectID,this.balanceInput).subscribe(data =>{
      console.log(data);
      this.getTransactionToList();
       },error =>{
         alert('The balance is not enough.')
      console.log(error);
    });
    
  }
  newBalance(){
    this.controller.postBalance(this.balanceAmount,this.currencySelect,Authentication.getServiceCenterID()).subscribe(data => {
      console.log(data);
      this.getTransactionToList();
      this.balanceAmount= null;
    },error =>{
      alert('Not found Currency.')
      console.log(error);
    })
  }
 checkDissableCurrency(currency){

  console.log("currency : ",currency);
  //  this.controller.getBalanceBySeviceCenterID(this.serviceID).subscribe(data =>{
  //    if(this.currencys. == data.currency.currencyCode){
  //     return true;
  //   }
    
  //  });

   return false;
 }


 

}


