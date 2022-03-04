import { Router } from '@angular/router';
import { DonateServiceService } from './../donate-service.service';
// donate.c.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donateMoney:boolean=false;
  user:any=[];
  items:any=["food","items","money"];
  constructor(private service:DonateServiceService,public ro:Router) { }
  
  ngOnInit(): void {
  }
  
  formSubmit(ref:any){
    let formObj = ref.value;
    console.log(formObj.amount);
    if(this.donateMoney==false){
      formObj.amount=0;
    }
    
    console.log(formObj);

    // this.user.push(formObj);

    this.service.postData(formObj)
    .subscribe(
      res=>{ if(res["message"]=="success"){
        let result=confirm("donation successfully done");
        if(result){
          this.ro.navigateByUrl("/home");
        }
        else{
          this.ro.navigateByUrl("/home");
        }
      }
      else{
        alert("failed");
      }
    },
    err=>{console.log("failed")}
    )
    
    

    

    
    
    ref.reset();
    console.log(this.user);
  }
  
  // donateMoney=false;
  validate(value:any){
    console.log(value);
    
    if(value==this.items[2]){
      this.donateMoney=true;


    }
    else{
      this.donateMoney=false;

    }

  }

}