import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buy-crypto',
  templateUrl: './buy-crypto.component.html',
  styleUrls: ['./buy-crypto.component.css']
})
export class BuyCryptoComponent implements OnInit {

  @ViewChild('send') send: NgForm;
  @ViewChild('getdataFrm') getdataFrm: NgForm;

  alert = false;

  finalResult2=[]
  displayResults;
  url:string = '';
  finalersult3;
  
  constructor(private httpClient:HttpClient){ }

  ngOnInit() {
  }

  async getCheckoutWidget(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA');

    const body = { referrerAccountId: 'AC_HTQM9T3ZR3W' }
    
    this.httpClient.post(`https://api.testwyre.com/v3/orders/reserve`, body, { headers })
    
    .subscribe(
     (data: any[]) => {


         console.log(data);
         const finalResult = Object.assign(data);
         this.finalResult2.push(finalResult.url)
         this.displayResults=this.finalResult2[0]

         this.finalersult3= finalResult.url

         console.log('yeye',this.displayResults)
         console.log('getpwned',this.finalResult2)
         console.log('wooooooooooorkkkkkkkkk',this.finalersult3)

         this.alert = true;
     }
   )
 } 

 onClose() {
  this.alert = false;

}




}
