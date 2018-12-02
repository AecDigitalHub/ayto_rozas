import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { SideBarMenuComponent } from '../app/side-bar-menu/side-bar-menu.component';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ayto. Las Rozas Web-App';
  opened: any;
  constructor (public Auth: AuthenticationService, private router: Router) {}
  ngOnInit() {
  }
  logout() {
    this.Auth.logout().subscribe(() => this.router.navigate(['/']));
  }
}
