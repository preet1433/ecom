import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private http: HttpClient) { }

    jsonApiData(){
     return this.http.get('https://dummyjson.com/products');
    }
}
