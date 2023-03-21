import { Component } from '@angular/core';

@Component({
  selector: 'app-xo-game',
  templateUrl: './xo-game.component.html',
  styleUrls: ['./xo-game.component.css']
})
export class XoGameComponent {

  loopTable:any[]=["1","2","3"];

  gameTable:any[]=[];
  currentVal:string="";

  add(pos:any){
    console.log(pos);
    this.gameTable.push(
      {
      ind:pos,
      val:this.currentVal
      }
      );
    this.verify();
  }
  verify(){

  }


}
