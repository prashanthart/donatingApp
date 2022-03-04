import { GetListServiceService } from './../get-list-service.service';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.css']
})
export class DonorlistComponent implements OnInit {

   ListForTable:any = [];
  constructor(private _getS:GetListServiceService) { }

  ngOnInit(): void {
    this._getS.getData().subscribe(
      res=>{
        this.ListForTable=res;
        console.log(res);
        
      },
      err=>{
        console.log("error in donorlist.ts")
      });
  }

  


}
