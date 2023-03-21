import { Component, OnInit } from '@angular/core';
import { DwollaServiceService } from '../dwolla-service.service';

@Component({
  selector: 'app-dwolla-payment',
  templateUrl: './dwolla-payment.component.html',
  styleUrls: ['./dwolla-payment.component.css']
})
export class DwollaPaymentComponent implements OnInit {

  constructor( private dwollaService : DwollaServiceService) {}

  ngOnInit(): void {
  }

  createCustomer(){
    this.dwollaService.createCustomer().subscribe((response)=>{
      console.log(response);
    });
  }

  createTransfer(){
    this.dwollaService.createTransfer().subscribe((response)=>{
      console.log(response);
    });
  }
}
