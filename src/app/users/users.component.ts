import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, AbstractControl, Validators, NgControl } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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
      blockchains: this.fb.array(['ALL']),
      immediate: 'false',
      scopes: this.fb.array(['TRANSFER']),
      fields: this.fb.group({
        firstName: '',
        lastName: '',
        dateOfBirth: '1990-01-01',
        // residenceAddress: this.fb.group({
        //   street1:'',
        //   city: '',
        //   state:'',
        //   postalCode:'',
        //   country:''

        // })
      })
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

    this.sendData.try4(payload).subscribe(
      (data: any) => {

        this.respondedData = data

        this.alert = true;
        
        
        console.log('this.respondedData', this.respondedData)
      }
      
    );
  }


}