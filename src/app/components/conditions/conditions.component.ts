import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
  msg:string="";
  choice:number=0;
  x:number=Math.floor(Math.random()*10);
  
  editMsg(){
    if(this.x==this.choice){
        this.msg="bravo";
    }else if(this.x<this.choice){
      this.msg="plus petit svp!";
    }else{
      this.msg="plus grand svp!";
    }
  }
  
}
