import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  apiUrl:string="https://jsonplaceholder.typicode.com/users";
  listUsers:any=[];

  constructor(private http:HttpClient){
    this.getUsers().subscribe(
      (data)=>{
        this.listUsers=data;
      }
    )
  }

  getUsers(){
    return this.http.get(this.apiUrl);
  }

}
