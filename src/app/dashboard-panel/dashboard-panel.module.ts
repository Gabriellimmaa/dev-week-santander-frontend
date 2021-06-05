import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPanelPageComponent } from './dashboard-panel-page/dashboard-panel-page.component';
import { PanelPageComponent } from './panel-page/panel-page.component';



@NgModule({
  declarations: [
    DashboardPanelPageComponent,
    PanelPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardPanelModule { }
