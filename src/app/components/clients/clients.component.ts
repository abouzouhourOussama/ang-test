import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  currentName:string="";
  currentTel:string="";

  clients:any[]=[];
  
  addClient(){
    this.clients.push(
      {
        name:this.currentName,
        tel:this.currentTel
      }
    )
  }
  resetClients(){
    this.clients=[]
  }




}
