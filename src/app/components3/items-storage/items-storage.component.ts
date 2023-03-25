import { Component } from '@angular/core';

@Component({
  selector: 'app-items-storage',
  templateUrl: './items-storage.component.html',
  styleUrls: ['./items-storage.component.css']
})
export class ItemsStorageComponent {

  items:any[]=[];
  itemName:string="";
  constructor(){
    this.items=[
      {
        name:"item 1",qty:2
      },
      {
        name:"item 2",qty:2
      }
    ]

    let itemsString=JSON.stringify(this.items)
    localStorage.setItem("lists",itemsString)

    /*let arr=localStorage.getItem("lists")
    if(arr!=null){
      var arrObj=JSON.parse(arr)
    }
    //JSON.parse(arr)
    arrObj.push(
      {
        name:"item 3",qty:2
      }
    )
    
    let itemsUpdateString=JSON.stringify(arrObj)
    localStorage.setItem("lists",itemsUpdateString)
    console.log(localStorage.getItem("lists"))
    //console.log(arrObj);*/

    
    //let arrObj=JSON.parse(arr)

    //console.log(itemsString);
    
  }

  addItem(){

    //recuperer 
    let arr=localStorage.getItem("lists")

    //string => objet
    if(arr!=null){
      var arrObj=JSON.parse(arr)
    }
    //ajouter
    arrObj.push(
      {
        name:this.itemName,qty:-1
      }
    );
    // stocker
    let itemsString=JSON.stringify(this.items)
    localStorage.setItem("lists",itemsString)
    //màj tableau courant
    this.items=arrObj

  }

}
