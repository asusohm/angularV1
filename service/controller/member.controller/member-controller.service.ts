import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberControllerService {

  constructor(private httpClient:HttpClient) { }
  public postMember(username:string,password:string):Observable<any>{
    return this.httpClient.post('//localhost:8080/member',{
      "memUser":username,
      "memPass":password,
     
    });    
  }
  public postUserProfile(nameProfile:string,emailProfile:string,genderSelect:number,countrySelect:string,passportNumProfile:number,member:string):Observable<any>{
    return this.httpClient.post('//localhost:8080/userprofile/'+genderSelect+'/'+countrySelect+'/'+member,{
      "name":nameProfile,
      "email":emailProfile

    })
  }

  public getMemberByUsername(username:string):Observable<any>{
    return this.httpClient.get('//localhost:8080/member/'+username);
  }
  public getGender():Observable<any>{
    return this.httpClient.get('//localhost:8080/gender');
  }
  public getCountry():Observable<any>{
    return this.httpClient.get('//localhost:8080/countrys');
  }
}

