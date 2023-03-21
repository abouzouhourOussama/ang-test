import { Component } from '@angular/core';

@Component({
  selector: 'app-random-calc',
  templateUrl: './random-calc.component.html',
  styleUrls: ['./random-calc.component.css']
})
export class RandomCalcComponent {

  x:number=Math.floor(Math.random()*10);
  y:number=Math.floor(Math.random()*10);
  choice:number=0;
  msg:string="";
  operations:any[]=["+","-","*","/"];
  selectedOperation:string="";
  res:number=0;

  constructor(){
    //indice entre 0 et 10
    let ind=Math.floor(Math.random()*3);
    //controller l'indice seulement <=3 
    
    //si l'indice ok
    this.selectedOperation=this.operations[ind];
    
    //calculer
    this.res=eval(this.x+this.selectedOperation+this.y);
    //console.log(eval(this.x+this.selectedOperation+this.y));
  }


  verifyAnswer(){
    if(this.choice==this.res)
      this.msg="bravo";
    else  
    this.msg="Attention !!";

  }



}
