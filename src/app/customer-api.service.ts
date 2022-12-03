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
    return this.http.get<any>(this.apiUrl + 'getallcustomers');
  }
  addCustomer(data:any){
    return this.http.post('https://localhost:7009/CreateCustomer' , data);
  }
updateCustomer(data:any){
  return this.http.put(this.apiUrl + 'UpdateCustomer' , data);
  }

}
