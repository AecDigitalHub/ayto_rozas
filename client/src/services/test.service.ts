import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

const BASEURL = environment.BASEURL;


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: Http) { }
  getCol(area) {
    return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
      let funcionarios = 0;
      let laborales = 0;
      for (let i = 0; i < res.json().positions.length; i++) {
        if (res.json().positions[i].FichaDPT.Colectivo === '(F) Funcionario') {
          funcionarios++;
        } else {
          laborales++;
        }
   }
   const ColectivosArea = { funcionarios, laborales };
   return ColectivosArea;
  }));
  }
  }
