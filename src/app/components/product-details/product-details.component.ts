import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap   } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  products = [
    { id: 1, name: 'Sugar', stock: 10, price: 14 },
    { id: 2, name: 'Wheat', stock: 784, price: 125 },
    { id: 3, name: 'Rice', stock: 125, price: 75 }];
  
  selectedProduct:any={};

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
      this.route.paramMap.subscribe(
        (params: ParamMap)=>{
              let id=Number(params.get('id'));
              this.selectedProduct=this.products.find(
                (p)=>p.id==id
              )
        }
      )
  }
}
