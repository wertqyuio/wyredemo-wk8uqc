import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  @ViewChild('send') send: NgForm;
  @ViewChild('getdataFrm') getdataFrm: NgForm;

  finalResult2=[]
  url:string = '';

  ngOnInit(): void {

  } 
  constructor(private httpClient:HttpClient, private sendData: HttpService){ }


  name = 'Transfer Your Crypto/Fiat';
  alert = false;
  respondedData;
  userId = false;
  submitBtn = true;
  editBtn = false;
  userData;

  sendFRMData(data: any) {
    const payload = {
      source: data.sourcefrm,
      sourceCurrency: data.sourceCurrencyfrm,
      sourceAmount: data.sourceAmountfrm,
      destCurrency: data.destCurrencyfrm,
      dest: data.destfrm,
      autoConfirm: data.autoConfirmfrm
    }
    console.log('payload', payload)
    console.log('data', data)

    this.sendData.try2(payload).subscribe(
      (data: any) => {
        // delete (data.id)
        this.respondedData = data
        this.alert = true;

        
        
        console.log('this.respondedData', this.respondedData)
      }
      
    );
  }
  onClose() {
    this.alert = false;
    this.send.reset();
  }

  onEdit() {
    this.userId = true;
    this.alert = false;
  }
  getdata(id) {
    this.sendData.getSingle(id).subscribe(
      (data: any) => {
        this.userData = data;
        this.submitBtn = false;
        this.editBtn = true;
        // this.userId = false;
        this.send.setValue(
          {
            titlefrm: this.userData.title,
            bodyfrm: this.userData.body,
            // userIdfrm: this.userData.userId,
            destfrm: this.userData.dest,
            refundTofrm: this.userData.refundTo

          }
        );
      }
    );
  }
  onEditUser(data) {
    const payload = {

      title: data.titlefrm,
      body: data.bodyfrm,
      // userId: data.userIdfrm,
      dest: this.userData.destfrm,
      refundTo: this.userData.refundTofrm
    }
    this.sendData.getUpdateUser(payload).subscribe(
      (data: any) => {
        this.alert = true;
        this.respondedData = JSON.stringify(data);
        this.send.reset();
        this.editBtn = false;
        this.submitBtn = true;
        // this.userId = false;
      }
    );
  }
  onEditClose() {
    // this.userId = false;
  }


}