import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerApiService } from 'src/app/customer-api.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  customersList$!:Observable<any[]>;

  constructor(private service : CustomerApiService) { }
  

  

  @Input() customer :any;
  customerId:number=0;
  customerName:string="";
  phoneNumber:string = "";

  ngOnInit(): void {
    this.customerId=this.customer.customerId;
    this.customerName=this.customer.customerName;
    this.phoneNumber=this.customer.phoneNumber; 
  }

  addCustomer(){
    var customer={
      customerName :this.customerName,
      phoneNumber :this.phoneNumber
    }
    this.service.addCustomer(customer).subscribe(res=>{
      var closeModalbtn = document.getElementById('add-edit-modal-close');
      if(closeModalbtn){
        closeModalbtn.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display="block";
      }
      setTimeout(function() {
        if(showAddSuccess){
          showAddSuccess.style.display="none";
        }
      } , 4000);
    })
  }
  updateCustomer(){

  }
}
