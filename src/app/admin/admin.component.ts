import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public ro:Router) { }

  ngOnInit(): void {
  }

  adminSubmit(adm:any){

    // console.log(adm.value);
    console.log(adm.value.email);
    if(adm.value.email=="admin" && adm.value.psw=="admin"){
      this.ro.navigateByUrl('/donorList');
    }
    else{
      alert("invalid username or password");
    }
  }

}
