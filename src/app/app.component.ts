import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';

import { BuyCryptoComponent } from './buy-crypto/buy-crypto.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  @ViewChild('send') send: NgForm;
  @ViewChild('getdataFrm') getdataFrm: NgForm;

  finalResult2=[]
  url:string = '';
 
  ngOnInit(): void {

  }
  constructor(private httpClient:HttpClient, private sendData: HttpService){ }

  name = 'Swap Your Crypto';
  alert = false;
  respondedData;
  userId = false;
  submitBtn = true;
  editBtn = false;
  userData;

  sendFRMData(data: any) {
    const payload = {
      sourceCurrency: data.sourceCurrencyfrm,
      destCurrency: data.destCurrencyfrm,
      dest: data.destfrm,
      refundTo: data.refundTofrm
    }
    console.log('payload', payload)
    console.log('data', data)

    this.sendData.try(payload).subscribe(
      (data: any) => {
        delete (data.id)
        this.respondedData = JSON.stringify(data);
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
    // this.userId = false; trythisyes
  }

  
  async postProfile(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA');

    const body = { referrerAccountId: 'AC_HTQM9T3ZR3W' }
    
    this.httpClient.post(`https://api.testwyre.com/v3/orders/reserve`, body, { headers })
    
    .subscribe(
     (data: any[]) => {


         console.log(data);
         const finalResult = Object.assign(data);
         this.finalResult2.push(finalResult.url)
         console.log('finalResult',finalResult.url);
        //  console.log('finalResult2',this.finalResult2);

     }
     
   )


 }

 getReady(){
  console.log('finalResult2',this.finalResult2);
 }
  
}
