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

getComplementoAvg(id) {
  return this.http.get(`${BASEURL}/api/complementos/complemento/${id}`).pipe(map(res => {
    const complemento = res.json();
      const complementoAvgGrado = complemento.Subcomplementos.reduce( function(tot, subcomplemento) {
        return tot + subcomplemento.Grado / complemento.Subcomplementos.length;
    }, 0);
    const complementoAvgPuntos = complemento.Subcomplementos.reduce( function(tot, subcomplemento) {
      return tot + subcomplemento.Puntos / complemento.Subcomplementos.length;
  }, 0);
    const complementoAvgRetribucion = complemento.Subcomplementos.reduce( function(tot, subcomplemento) {
      return tot + parseFloat(subcomplemento.Retribucion) / complemento.Subcomplementos.length;
  }, 0);
      const complementoAvg = { complementoAvgGrado, complementoAvgPuntos, complementoAvgRetribucion };
      console.log(complementoAvg);
      return complementoAvg;
}));
}
}

