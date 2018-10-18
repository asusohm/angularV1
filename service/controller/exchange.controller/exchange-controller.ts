import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ExchangeController {
    constructor(private httpClient:HttpClient){

    }
//     public postReceipt(name:string,passport:string,genderId:number,countryId:number):Observable<any>{
//         // return this.httpClient.post('//localhost:8080/receipt'+)
// return
//     }
    public getGenders():Observable<any>{
        return this.httpClient.get('//localhost:8080/gender');
    }
    public getCountrys():Observable<any>{
        return this.httpClient.get('//localhost:8080/countrys');
    }
    public getCurrencys():Observable<any>{
        return this.httpClient.get('//localhost:8080/currency');
    }
}
