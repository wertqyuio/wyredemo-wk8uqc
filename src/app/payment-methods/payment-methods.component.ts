import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, AbstractControl, Validators, NgControl } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {
  @ViewChild('send') send: NgForm;
  @ViewChild('getdataFrm') getdataFrm: NgForm;
  respondedData;
  alert = false;


  userId = false;

  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private sendData: HttpService) {
  }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.employeeForm = this.fb.group({
      paymentMethodType: 'INTERNATIONAL_TRANSFER',
      paymentType: 'LOCAL_BANK_WIRE',
      currency: 'USD',
      country: 'US',
      beneficiaryType: 'INDIVIDUAL',
      firstNameOnAccount: 'beingLegendary',
      lastNameOnAccount: 'isScary',
      accountNumber: '1234563890123',
      routingNumber: '123412312',
      accountType: 'CHECKING'

    })
  }


  onClose() {
    this.alert = false;
    this.send.reset();
  }

  onEdit() {
    this.userId = true;
    this.alert = false;
  }


  onSubmit() {
    // do something with the values

    console.log('hellllllllllo',this.employeeForm.value);
  }

  sendFRMData(data: any) {
    const payload = this.employeeForm.value
    console.log('payload', payload)
    console.log('data', data)

    this.sendData.createPaymentMethod(payload).subscribe(
      (data: any) => {

        this.respondedData = data

        this.alert = true;
        
        
        console.log('this.respondedData', this.respondedData)
      }
      
    );
  }

}