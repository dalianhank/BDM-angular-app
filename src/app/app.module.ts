import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrokerListComponent } from "./broker-list/broker-list.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrokerService } from './service/broker.service';
import { AuthService } from './service/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { BrokerAddComponent } from './broker-add/broker-add.component';

@NgModule({
  declarations: [AppComponent, BrokerListComponent, HomeComponent, LoginComponent, BrokerAddComponent],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    HttpModule,
    AppRoutingModule],
  providers: [
    BrokerService,    
    AuthService,

    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
