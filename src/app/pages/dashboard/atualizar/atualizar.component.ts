import { HttpClient, HttpHeaders } from '@angular/common/http';
import Stock from 'src/app/shared/models/stock-model';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { FormGroup,  FormBuilder,  Validators, } from '@angular/forms';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  constructor(private http: HttpClient, public datepipe: DatePipe, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  readonly baseUrl = 'https://backend-bootcamp-santander.herokuapp.com/bootcamp';
  putStocks(id, name, price, variation, date) {
    var data = { "id": id, "name": name, "price": price, "date": date, "variation": variation }
    return this.http.put(`${this.baseUrl}/stock`, data).subscribe({
      error: error => {
          console.error('Ocorreu um erro: ', error);
      },
  })
  }

  getStocksAll(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

  getStocks(id): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/${id}`).toPromise();
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

  statusInfo = "Status";
  statusName = "";
  statusPrice = "";
  statusVari = "";
  statusDate = "";
  postJson;
  public myForm: FormGroup;

  createForm() {
    this.myForm = this.fb.group ({
      username: ['',
      [Validators.required,
      Validators.minLength(4),
    ]],
      price: ['',
      [Validators.required,
      Validators.pattern("^[0-9]{1,4}(?:\.[0-9]{1,2})?$")
    ]],
      variation: ['',
      [Validators.required,
      Validators.pattern("^[-0-9]{0,1}[0-9]{1,3}(?:\.[0-9]{1,2})?$")
    ]],
      date: ['',
      [Validators.required,
    ]],
  });
  }
  undrawRequired(aux: number) {
    if(aux == 1){
      const element = document.getElementById('inputName')
      element.style.border = "none";
      this.statusName = ""
    }
    if(aux == 2){
      const element = document.getElementById('inputPrice')
      element.style.border = "none";
      this.statusPrice = ""
    }
    if(aux == 3){
      const element = document.getElementById('inputVariation')
      element.style.border = "none";
      this.statusVari = ""
    }
    if(aux == 4){
      const element = document.getElementById('inputDate')
      element.style.border = "none";
      this.statusDate = ""
    }
  }

  drawRequired(aux: number) {
    if(aux == 1){
      const element = document.getElementById('inputName')
      element.style.border = "1px solid red";
      this.statusName = "* Campo obrigatório"
    }
    if(aux == 2){
      const element = document.getElementById('inputPrice')
      element.style.border = "1px solid red";
      this.statusPrice = "* Campo obrigatório"
    }
    if(aux == 3){
      const element = document.getElementById('inputVariation')
      element.style.border = "1px solid red";
      this.statusVari = "* Campo obrigatório"
    }
    if(aux == 4){
      const element = document.getElementById('inputDate')
      element.style.border = "1px solid red";
      this.statusDate = "* Campo obrigatório"
    }
}

drawCondition(aux: number) {
  if(aux == 1){
    const element = document.getElementById('inputName')
    element.style.border = "1px solid red";
    this.statusName = "* Mínimo 4 caracteres"
  }
  if(aux == 2){
    const element = document.getElementById('inputPrice')
    element.style.border = "1px solid red";
    this.statusPrice = "* Máximo de 4 inteiros e 2 decimais (9999,99)"
  }
  if(aux == 3){
    const element = document.getElementById('inputVariation')
    element.style.border = "1px solid red";
    this.statusVari = "* Máximo de 3 inteiros e 2 decimais (999,99)"
  }
}

  submit(id: string, nome: string, preco: number, variacao: number, data: string){
    let latest_date =this.datepipe.transform(data, 'dd/MM/yyyy');

    if(this.myForm.controls['username'].valid){
      if(this.myForm.controls['price'].valid){
        if(this.myForm.controls['variation'].valid){
          if(this.myForm.controls['date'].valid){
            console.log(id);
            console.log(nome);
            console.log(preco);
            console.log(variacao);
            console.log(latest_date);
            this.putStocks(id, nome, preco, variacao, latest_date);
            this.myForm.controls['username'].reset();
            this.myForm.controls['price'].reset();
            this.myForm.controls['variation'].reset();
            this.myForm.controls['date'].reset();
            this.statusInfo = "Atualização realizada com sucesso"
            document.getElementById("idStatusInfo").style.color = "green"

          }else{
            this.drawRequired(4);
            this.statusInfo = "Argumentos inválidos"
          }
        }else{
          this.drawRequired(3);
          this.statusInfo = "Argumentos inválidos"
        }
      }else{
        this.drawRequired(2);
        this.statusInfo = "Argumentos inválidos"
      }
    }else{
      this.drawRequired(1);
      this.statusInfo = "Argumentos inválidos"
    }

  }

}
