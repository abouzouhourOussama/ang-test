import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  apiUrl:string="http://localhost:3000/posts"

  constructor(private http:HttpClient) { }

  public getPosts():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  //public addPost():Observable


}
