import { ConsultarService } from './consultar.service';
import { Component, OnInit, Input } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  p: number = 1;

  stocks: Stock[] = [];

  constructor(private consultarService: ConsultarService) { }

  ngOnInit(): void {
    this.fetchStocks();

  }

  async fetchStocks(): Promise<void> {
    this.stocks = await this.consultarService.getStocks();
  }

}
