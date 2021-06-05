import { DashboardModule } from './pages/dashboard/dashboard-page.module';
import { AuthGuard } from './guards/auth.guard';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DashboardModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
