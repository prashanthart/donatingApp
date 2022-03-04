import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonateServiceService {
  
  _url = "http://localhost:8080/donate/createDonor";
  constructor(private hc:HttpClient) { }

  postData(user:any){
    return this.hc.post<any>(this._url,user);
  }





}
