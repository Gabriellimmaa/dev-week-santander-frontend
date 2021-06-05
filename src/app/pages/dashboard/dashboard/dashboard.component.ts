import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardPageComponent implements OnInit {
  async MenuLateral() {
    const element = document.getElementById('showBar');
    const element2 = document.getElementById('showPage');


    if(element.style.display == 'block') {
      element.style.display = 'none';
      element2.style.display = 'block';
    } else {
      element.style.display = 'block';
      element2.style.display = 'none';
    }
  }

  id: string;
  pagesId = ["goCadastrar", "goConsultar", "goConsultar-id", "goConsultar-day"]

  constructor(private router: Router, private authService: AuthService, public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    document.getElementById("goCadastrar").style.backgroundColor = "var(--primary-color-black)";
  }

  public CadastrarLoaded: boolean = true;
  public ConsultarLoaded: boolean = false;
  public ConsultarIDLoaded: boolean = false;
  public ConsultarDayLoaded: boolean = false;
  public DeletarLoaded: boolean = false;
  public AtualizarLoaded: boolean = false;
  goPages(aux: number) {
    document.getElementById("goCadastrar").style.backgroundColor = "var(--leftBar)";
    if(aux == 1){
      this.CadastrarLoaded = true
      this.ConsultarLoaded = false
      this.ConsultarIDLoaded = false
      this.ConsultarDayLoaded = false
      this.DeletarLoaded = false
      this.AtualizarLoaded = false
    }
    if(aux == 2){
      this.ConsultarLoaded = true
      this.CadastrarLoaded = false
      this.ConsultarIDLoaded = false
      this.ConsultarDayLoaded = false
      this.DeletarLoaded = false
      this.AtualizarLoaded = false
    }
    if(aux == 3){
      this.ConsultarIDLoaded = true
      this.CadastrarLoaded = false
      this.ConsultarLoaded = false
      this.ConsultarDayLoaded = false
      this.DeletarLoaded = false
      this.AtualizarLoaded = false
    }
    if(aux == 4){
      this.ConsultarDayLoaded = true
      this.CadastrarLoaded = false
      this.ConsultarLoaded = false
      this.ConsultarIDLoaded = false
      this.DeletarLoaded = false
      this.AtualizarLoaded = false
    }
    if(aux == 5){
      this.DeletarLoaded = true
      this.ConsultarDayLoaded = false
      this.CadastrarLoaded = false
      this.ConsultarLoaded = false
      this.ConsultarIDLoaded = false
      this.AtualizarLoaded = false
    }
    if(aux == 6){
      this.AtualizarLoaded = true
      this.CadastrarLoaded = false
      this.ConsultarLoaded = false
      this.ConsultarIDLoaded = false
      this.ConsultarDayLoaded = false
      this.DeletarLoaded = false
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
