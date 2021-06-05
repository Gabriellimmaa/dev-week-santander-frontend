import { SharedModule } from '../../shared/shared.module';
import { DashboardPageComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DatePipe } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultarComponent } from './consultar/consultar.component';
import { CardComponent } from './consultar/card/card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ConsultarIdComponent } from './consultar-id/consultar-id.component';
import { ConsultarDayComponent } from './consultar-day/consultar-day.component';
import { DeletarComponent } from './deletar/deletar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CadastrarComponent,
    ConsultarComponent,
    CardComponent,
    ConsultarIdComponent,
    ConsultarDayComponent,
    DeletarComponent,
    AtualizarComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    DatePipe,
  ]
})
export class DashboardModule { }
