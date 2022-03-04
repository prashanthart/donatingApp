import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ro:Router) { }

  ngOnInit(): void {
  }

 

  donatePage(){
    this.ro.navigateByUrl('/donate');
  }





}
