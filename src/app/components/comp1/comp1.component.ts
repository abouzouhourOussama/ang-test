import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  //msg:string="hello from LOGIC"
  x:number=0;
  increment(){
    this.x+=1;
  }
}
