import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Broker } from "../model/broker";
import { Email } from '../model/email';
import { EmailAddressType } from '../model/enum/emailAddressType';
import { AuthService } from '../service/auth.service';
import { BrokerService } from "../service/broker.service";

@Component({
  selector: "app-broker-list",
  templateUrl: "./broker-list.component.html",
  styleUrls: ["./broker-list.component.css"],
})
export class BrokerListComponent implements OnInit {
  selectedBroker: Broker;
  emails: Email[];
  // keys: any[];
  emailAddressTypeEnum = EmailAddressType;

  brokers: Broker[];
  constructor(private brokerService: BrokerService,              
              private router: Router,
              public authService: AuthService ) 
  {  
    // this.keys = Object.keys(this.emailAddressTypeEnum).filter(f => !isNaN(Number(f)));
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.getBrokers();
    }else{
      this.router.navigate(['login']);
    }
  }

  onSelect(broker: Broker): void {
    this.selectedBroker = broker;
    this.emails = broker.emailAddresses;  
    this.emailAddressTypeEnum; 
  }

  getBrokers(): void {
    this.brokerService
      .getBrokers()
      .subscribe((brokers) => (this.brokers = brokers));
  }

  updateRecord(broker: Broker): void{
  //  let input = <Broker>{};
  //  input = this.selectedBroker; 
   
  //  input.emailAddresses.forEach(element => {
  //    element.emailAddressType = Number(element.emailAddressType);
  //  }); 
    
    this.brokerService
      .updateBroker(this.selectedBroker)
      .subscribe((broker) => (this.selectedBroker = broker));      
  }
}
