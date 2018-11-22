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

getComplementoAvg(complemento) {
  let Grado = 0;
  let Puntos = 0;
  let Retrib = 0;
  let ComplementosAvg = {};
  return this.http.get(`${BASEURL}/api/complementos/${complemento}`).pipe(map(res => {
    const vpt = res.json().vpt;
      Grado = vpt.Complementos.ComplEspecifico[0].Subcompl.reduce((acc, e) => {
        return acc + e.Grado;
      }, 0) / vpt.Complementos.ComplEspecifico[0].Subcompl.length;
      Puntos = vpt.Complementos.ComplEspecifico[0].Subcompl.reduce((acc, e) => {
        return acc + e.Puntos;
      }, 0) / vpt.Complementos.ComplEspecifico[0].Subcompl.length;
      Retrib = vpt.Complementos.ComplEspecifico[0].Subcompl.reduce((acc, e) => {
        return acc + e.Retribucion;
      }, 0) / vpt.Complementos.ComplEspecifico[0].Subcompl.length;
    const ComplAvg = { Grado, Puntos, Retrib };
    ComplementosAvg = vpt.Complementos.ComplEspecifico.forEach(this.getComplementoAvg);
    return ComplementosAvg;
  }));
}

}
