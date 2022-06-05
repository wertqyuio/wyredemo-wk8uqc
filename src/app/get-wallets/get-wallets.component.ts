import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-wallets',
  templateUrl: './get-wallets.component.html',
  styleUrls: ['./get-wallets.component.css']
})
export class GetWalletsComponent implements OnInit {
  @ViewChild('send') send: NgForm;

  res;
  err;
  name = 'Get Exchange Rates';

  alert = false;



  ngOnInit(): void {

  }
  constructor(private httpClient:HttpClient, private sendData: HttpService){ }

  getData() {
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', 'Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA');
    this.httpClient.request('GET', 'https://api.testwyre.com/v2/wallets', { headers })
        .subscribe(
          res => {
            this.res = res;
            console.log('Result:', res)

            let prettyJson = JSON.stringify(res, null, 2);

            const appDiv = document.getElementById('app');
            this.alert = true;
  
          },
          err => {
            console.log('Error', err);
            this.err = err;
          },
        )
  }

  onClose() {
    this.alert = false;
    this.send.reset();

  }


}