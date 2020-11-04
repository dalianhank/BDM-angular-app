import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Broker } from "../model/broker";
import { AuthService } from '../service/auth.service';
import { BrokerService } from "../service/broker.service";

@Component({
  selector: "app-broker-list",
  templateUrl: "./broker-list.component.html",
  styleUrls: ["./broker-list.component.css"],
})
export class BrokerListComponent implements OnInit {
  selectedBroker: Broker;

  brokers: Broker[];
  constructor(private brokerService: BrokerService,              
              private router: Router,
              public authService: AuthService ) 
  {  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.getBrokers();
    }else{
      this.router.navigate(['login']);
    }
  }

  onSelect(broker: Broker): void {
    this.selectedBroker = broker;
  }

  getBrokers(): void {
    this.brokerService
      .getBrokers()
      .subscribe((brokers) => (this.brokers = brokers));
  }

  updateRecord(broker: Broker): void{
    this.brokerService
      .updateBroker(this.selectedBroker)
      .subscribe((broker) => (this.selectedBroker = broker));      
  }
}
