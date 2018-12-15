import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: any;
  username: any;
  password: any;

  constructor(private Auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  login(username: string, password: string) {
    console.log('login....');
    this.Auth.login(username, password).subscribe( user => {
      this.User = user;
      if (this.User) {
        this.router.navigate(['Dashboard']);
      } else {
       this.router.navigate(['/signup']);
      }
      });
    }
  }
