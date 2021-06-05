import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    StockCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class HomeModule { }
