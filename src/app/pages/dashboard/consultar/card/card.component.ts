import Stock from 'src/app/shared/models/stock-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  stock = new Stock();

  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string {
    const localizedVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-', '')}%`;
  }
}
