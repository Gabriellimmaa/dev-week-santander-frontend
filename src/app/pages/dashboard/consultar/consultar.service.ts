import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import Stock from '../../../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})

export class ConsultarService {

  readonly baseUrl = 'https://backend-bootcamp-santander.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
