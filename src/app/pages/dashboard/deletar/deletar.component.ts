import Stock from 'src/app/shared/models/stock-model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  readonly baseUrl = 'https://backend-bootcamp-santander.herokuapp.com/bootcamp';

  name;
  date;
  price;
  variation;

  statusMessage = "";
  log = "";
  log2 = "";
  statusConfirm = "";
  saveID;
  status = false;
  stocks: Stock[] = [];
  stocksAll: Stock[] = [];

  getStocks(id): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/${id}`).toPromise();
  }

  getStocksAll(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
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
      this.saveID = Number(ID);
      this.statusMessage = "";
      this.statusConfirm = "Você realmente quer deletar este item?"
    }else{
      this.status = false;
      this.statusMessage = "ID não encontrado";
      this.log = `Esses são os ID's resgistrados`;
      this.log2 = `${lista}`;
      this.statusConfirm = "";
      this.saveID = "";
    }
  }

  confirm(saveID) {
    this.statusConfirm = "Item deletado com sucesso"
    document.getElementById("labelConfirm").style.color = "green"
    document.getElementById("btConfirm").style.display = "none"
    return this.http.delete(`${this.baseUrl}/stock/${saveID}`).toPromise();
  }
}
