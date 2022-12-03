import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerApiService } from 'src/app/customer-api.service';
@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customersList$!:Observable<any[]>;
  customerMaps:Map<number,string> = new Map()
  constructor(private service : CustomerApiService) { }

  ngOnInit(): void {
    this.customersList$ = this.service.getcustomers();
  }

}
