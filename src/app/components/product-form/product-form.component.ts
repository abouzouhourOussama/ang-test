import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  selectedProduct:any={name:"",price:0};

  products:Array<any>=[
    {
    name:"p1",price:20
  },
  {
    name:"p2",price:20
  }
]
  qt:number=0;
  sum:number=0;
  showDetails:boolean=false;

  calcul(){
    this.sum=this.selectedProduct.price*this.qt;
    //console.log(this.sum);
    this.showDetails=true;
  }

  f(event:any){
    //console.log(event.target.value);
    let name=event.target.value;
    this.products.map(
      (elm)=>{
        if(elm.name==name){
          this.selectedProduct=elm;
        }
      }
    )
    //this.selectedProduct=event.target.value;
    console.log(this.selectedProduct);
    
  }
}
