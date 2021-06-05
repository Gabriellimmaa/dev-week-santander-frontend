import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../home.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService, private router : Router) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStocks();
  }

  login(){
    this.router.navigate(['login']);
  }
}
