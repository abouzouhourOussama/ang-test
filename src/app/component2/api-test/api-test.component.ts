import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit{

  listPost:any[]=[];

  constructor(private myService:MyServiceService){

  }

  ngOnInit(): void {
      this.getPosts();
  }
  
  public getPosts(){
      this.myService.getPosts().subscribe(
        (data)=>{
            this.listPost=data;
            console.log(this.listPost);     
        }
      )
  }

}
