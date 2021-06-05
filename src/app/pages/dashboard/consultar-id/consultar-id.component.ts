import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, } from '@angular/forms';
import Stock from 'src/app/shared/models/stock-model';


@Component({
  selector: 'app-consultar-id',
  templateUrl: './consultar-id.component.html',
  styleUrls: ['./consultar-id.component.css']
})


export class ConsultarIdComponent implements OnInit {

  readonly baseUrl = 'https://backend-bootcamp-santander.herokuapp.com/bootcamp';

  getStocks(id): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/${id}`).toPromise();
  }

  getStocksAll(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

  name;
  date;
  price;
  variation;

  statusMessage = "";
  log = "";
  log2 = "";
  status = false;
  stocks: Stock[] = [];
  stocksAll: Stock[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async fetchStocks(ID): Promise<void> {
    var lista = [];
    this.stocksAll = await this.getStocksAll();
    for(let stock of this.stocksAll){
      lista.push(stock['id']);
    }
    var x = Number(ID)
    if(lista.includes(x)){
      this.stocks = await this.getStocks(ID);
      this.name = this.stocks['name']
      this.date = this.stocks['date']
      this.price = this.stocks['price']
      this.variation = this.stocks['variation']
      this.status = true;
      this.statusMessage = "";
    }else{
      this.status = false;
      this.statusMessage = "ID não encontrado";
      this.log = `Esses são os ID's resgistrados`;
      this.log2 = `${lista}`;
    }

  }

}
