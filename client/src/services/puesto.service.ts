import { Injectable, Output, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "../../node_modules/rxjs";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: "root"
})
export class PuestoService {
  newPuesto: any;
  editedPuestos: any;
  editedPuesto: any;

  constructor(private http: Http) {}

  @Output() refreshposition: EventEmitter<void> = new EventEmitter();

  addPuesto(
    Position,
    CodDPT,
    CodEmpleado,
    DenomPuesto,
    NombreEmpleado,
    Situacion
  ) {
    return this.http
      .post(`${BASEURL}/api/puestos/addPuesto`, {
        Position,
        CodDPT,
        CodEmpleado,
        DenomPuesto,
        NombreEmpleado,
        Situacion
      })
      .pipe(
        map((res: Response) => {
          let newPuesto = res.json();
          return this.newPuesto;
        })
      );
  }
  removePuesto(id) {
  return this.http.
  put(`${BASEURL}/api/puestos/delete/${id}`, id).pipe(map((res: Response) => {
  }));
  }

  editPuesto(id, Position, CodDPT, CodEmpleado, DenomPuesto, NombreEmpleado, Situacion) {
    return this.http.
    put(`${BASEURL}/api/puestos/edit/${id}`, { id, Position, CodDPT, DenomPuesto, CodEmpleado, NombreEmpleado, Situacion })
    .pipe(map((res: Response) => {
      const editedPuesto = res.json();
      return this.editedPuesto;
    }));
  }
}
