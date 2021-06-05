import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login/login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component:  DashboardPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
