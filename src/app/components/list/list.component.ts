import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  products = [
    { id: 1, name: 'Sugar', stock: 10, price: 14 },
    { id: 2, name: 'Wheat', stock: 784, price: 125 },
    { id: 3, name: 'Rice', stock: 125, price: 75 }];


}
