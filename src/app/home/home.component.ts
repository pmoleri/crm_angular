import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { ECommerceService } from '../services/ecommerce.service';
import { CRMAppDataService } from '../services/crmapp-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public eCommerceRevenue: any = null;
  public northwindCustomers: any = null;
  public cRMAppDataMeetingsTasks: any = null;

  constructor(
    private eCommerceService: ECommerceService,
    private northwindService: NorthwindService,
    private cRMAppDataService: CRMAppDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.eCommerceService.getRevenue().subscribe(data => this.eCommerceRevenue = data);
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.cRMAppDataService.getMeetingsTasks().subscribe(data => this.cRMAppDataMeetingsTasks = data);
  }
}
