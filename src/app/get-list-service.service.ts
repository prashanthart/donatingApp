import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListServiceService {

  _url:any = "http://localhost:8080/donate/getList";

  constructor(private hc:HttpClient) { }

  getData():Observable<any>{
    return this.hc.get<any>(this._url);

  }
}
