import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionController {

    constructor(private httpClient:HttpClient){

    }
    public getBalanceBySeviceCenterID(serviceCenterID:number):Observable<any>{
        return this.httpClient.get('//localhost:8080/balance/'+serviceCenterID);
    }
    public getTransactionType():Observable<any>{
        return this.httpClient.get('//localhost:8080/transaction/type');
    }
    public getCurrencys():Observable<any>{
      
        return this.httpClient.get('//localhost:8080/currency');
        
      }
      public postTransaction(currencyCode:string,serviceID:number,personalUser:string,tranTypeID:number,amount:number):Observable<any>{
          return this.httpClient.post('//localhost:8080/transaction/new/'+currencyCode+'/'+serviceID+'/'+personalUser+'/'+tranTypeID,{
              "amount":amount
          })
      }
      public postBalance(balanceAmount:number,currencyID:string,serviceID:number):Observable<any>{
        return this.httpClient.post('//localhost:8080/balance/'+currencyID+'/'+serviceID,{
            "balanceAmount":balanceAmount
        })
      }
}
