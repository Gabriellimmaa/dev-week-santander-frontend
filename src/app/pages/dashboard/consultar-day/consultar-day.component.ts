import { HttpClient } from '@angular/common/http';
import Stock from '../../../shared/models/stock-model';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consultar-day',
  templateUrl: './consultar-day.component.html',
  styleUrls: ['./consultar-day.component.css']
})
export class ConsultarDayComponent implements OnInit {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  teste ="";

  ngOnInit(): void {
    this.fetchStocks();
    this.statusMessage = new Date().toLocaleDateString();
  }


  readonly baseUrl = 'https://backend-bootcamp-santander.herokuapp.com/bootcamp';

  getStocksAll(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/today`).toPromise();
  }

  name;
  date;
  price;
  variation;
  p: number = 1;
  stocksAll: Stock [] = []

  status = true;
  statusMessage = "";

  async fetchStocks(): Promise<void> {
    this.stocksAll = await this.getStocksAll();
  }

}
