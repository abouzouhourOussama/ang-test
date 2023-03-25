import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather2',
  templateUrl: './weather2.component.html',
  styleUrls: ['./weather2.component.css']
})
export class Weather2Component {
  currentCity:string="";
  api = `https://api.openweathermap.org/data/2.5/weather?q=`;
  appId=`&appid=2c23967b93e4c579667ed47267852811`
  city:any=null;


  constructor(private _http:HttpClient){}
  

  getWeather(){
    this._http.get(this.api+this.currentCity+this.appId).subscribe(
      (data)=>{
        //console.log(data);
        this.city=data 
        console.log(this.city);    
      }
    )
  }

}
