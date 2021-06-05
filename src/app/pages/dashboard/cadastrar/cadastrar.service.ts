import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CadastrarService {

  errorMessage = ''

  readonly baseUrl = 'https://backend-bootcamp-santander.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  postStocks(name: string, price: number, variation: number, date: string) {
    var data = { "id": null, "name": name, "price": price, "date": date, "variation": variation }
    return this.http.post(`${this.baseUrl}/stock`, JSON.stringify(data), { headers: this.headers }).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('Ocorreu um erro: ', error);
      },
  })
  }

}
