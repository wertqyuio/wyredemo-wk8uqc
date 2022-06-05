import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BuyCryptoComponent } from './buy-crypto/buy-crypto.component';
import { SwapsComponent } from './swaps/swaps.component';
import { TransfersComponent } from './transfers/transfers.component';
import { WalletsComponent } from './wallets/wallets.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { GetExchangeRatesComponent } from './get-exchange-rates/get-exchange-rates.component';
import { GetWalletsComponent } from './get-wallets/get-wallets.component';
import { GetTransfersComponent } from './get-transfers/get-transfers.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { AnalyticsComponent } from './analytics/analytics.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, BuyCryptoComponent, SwapsComponent, TransfersComponent, WalletsComponent, UsersComponent, UserComponent, GetExchangeRatesComponent, GetWalletsComponent, GetTransfersComponent, PaymentMethodsComponent, AnalyticsComponent],
  bootstrap:    [ AppComponent ],
  providers: [HttpService]

})
export class AppModule { }
