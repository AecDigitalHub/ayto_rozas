import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { isNumber } from 'util';
import { VPTComponent } from '../app/Posicion/vpt/vpt.component';

const BASEURL = environment.BASEURL;


@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private http: Http) { }

  getPosition(position) {
    return this.http.get(`${BASEURL}/api/positions/${position}`).pipe(map(res => {
      const Position = res.json();
      return Position;
    }));
}

getValoracion(id) {
  return this.http
  .get(`${BASEURL}/api/complementos/valoracion/${id}`, id).pipe(map((res: Response) => {
  }));
}

getComplementoAvg(id) {
  return this.http.get(`${BASEURL}/api/complementos/complemento/${id}`).pipe(map((res:Response) => {
    // const complemento = res.json();
    //   return complemento;
}));
}
addValoracion(Position, CodigoDPT, Complementos) {
  return this.http
  .post(`${BASEURL}/api/positions/add/vpt/`, { Position, CodigoDPT, Complementos})
  .pipe(map((res: Response) => {
  }));
}
removeComplemento(id) {
  return this.http.
  delete(`${BASEURL}/api/complementos/delete/complemento/${id}`, id).pipe(map((res: Response) => {
  }));
}
}

