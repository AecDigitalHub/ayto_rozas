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
editedComplemento: any;
  constructor(private http: Http) { }

  getPosition(position) {
    return this.http.get(`${BASEURL}/api/positions/${position}`).pipe(map(res => {
      const Position = res.json();
      return Position;
    }));
}

getComplementoAvg(id) {
  return this.http.get(`${BASEURL}/api/complementos/complemento/${id}`).pipe(map(res => {
    const complemento = res.json();
      return complemento;
}));
}
editComplemento(id, Valor, CodDPT, Complemento, Grado, Puntos, Retribucion, Subcomplementos, AvgGrado, AvgPuntos, AvgRetribucion) {
  return this.http
  .put(`${BASEURL}/api/complementos/edit/complemento/${id}`, { Valor, CodDPT, Complemento, Grado, Puntos, Retribucion, Subcomplementos, AvgGrado, AvgPuntos, AvgRetribucion }).pipe(map((res: Response) => {
    const editedComplemento = res.json();
    return this.editedComplemento;
  }));
}
addValoracion(Position, CodigoDPT, Complementos) {
  return this.http
  .post(`${BASEURL}/api/positions/add/vpt/`, { Position, CodigoDPT, Complementos})
  .pipe(map((res: Response) => {
  }));
}
}

