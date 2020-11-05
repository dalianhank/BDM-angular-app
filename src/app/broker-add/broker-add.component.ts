import { Component, OnInit } from '@angular/core';
import { Broker } from 'src/app/model/broker';
import { BrokerService } from 'src/app/service/broker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broker-add',
  templateUrl: './broker-add.component.html',
  styleUrls: ['./broker-add.component.css']
})
export class BrokerAddComponent implements OnInit {
  newBroker = <Broker>{};

  constructor(private brokerService: BrokerService,
              private router: Router) { }

  ngOnInit(): void {
    
  }

  addBroker(broker: Broker) : void{
    this.brokerService
      .addBroker(this.newBroker)
      .subscribe((broker) =>(this.newBroker == broker));
    
      this.router.navigate(['brokerlist']);
  }
}
