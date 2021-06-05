import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { isAuthenticated } from '../../guards/auth-guard.service';

@Component({
  selector: 'app-dashboard-panel-page',
  templateUrl: './dashboard-panel-page.component.html',
  styleUrls: ['./dashboard-panel-page.component.css']
})
export class DashboardPanelPageComponent implements OnInit {

  submit(login: string, senha: string) {
    if(login == 'admin' && senha == 'admin') {
      isAuthenticated.valueOf(true);
      this.router.navigate(['panel']);
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
