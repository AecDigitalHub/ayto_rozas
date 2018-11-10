import { Injectable, Output, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "../../node_modules/rxjs";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: 'root'
})
export class EditService {
editedCondiciones: any;
editedFunciones: any;
editedMision: any;

  constructor(private http: Http) { }

  editCondiciones(id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad) {
    return this.http
      .put(`${BASEURL}/api/positions/edit/condiciones/${id}`, { id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad })
      .pipe(map((res: Response) => {
        let editedCondiciones = res.json();
        return this.editedCondiciones;
      }));
  }
  editMision(id, Mision) {
    return this.http
      .put(`${BASEURL}/api/positions/edit/mision/${id}`, { id, Mision })
      .pipe(map((res: Response) => {
        let editedMision = res.json();
        return this.editedMision;
      }));
  }
  addFuncion(id, Funcion) {
    return this.http
      .put(`${BASEURL}/api/positions/add/funcion/${id}`, { Funcion })
      .pipe(map((res: Response) => {
        let editedFunciones = res.json();
        return this.editedFunciones;
      }));
  }
  removeFuncion(id, Funcion) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/funcion/${id}`, { Funcion })
      .pipe(map((res: Response) => {
        let editedFunciones = res.json();
        return this.editedFunciones;
      }));
  }
}

