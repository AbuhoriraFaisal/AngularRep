import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
readonly apiUrl = "https://localhost:7009/";
  constructor(private http : HttpClient) { }
  
  
  getcustomers():Observable<any[]>{
    return this.http.get<any>('https://localhost:7009/getallcustomers');
  }


}
