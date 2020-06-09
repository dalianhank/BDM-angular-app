import { Component, OnInit } from "@angular/core";
import { Broker } from "../model/broker";
import { BrokerService } from "../service/broker.service";

@Component({
  selector: "app-broker-list",
  templateUrl: "./broker-list.component.html",
  styleUrls: ["./broker-list.component.css"],
})
export class BrokerListComponent implements OnInit {
  selectedBroker: Broker;

  brokers: Broker[];
  constructor(private brokerService: BrokerService) {}

  ngOnInit(): void {
    this.getBrokers();
  }

  onSelect(broker: Broker): void {
    this.selectedBroker = broker;
  }

  getBrokers(): void {
    this.brokerService
      .getBrokers()
      .subscribe((brokers) => (this.brokers = brokers));
  }
}
