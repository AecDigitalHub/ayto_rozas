import { Injectable, Output, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "../../node_modules/rxjs";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
newPuesto: any;

  constructor(private http: Http) { }

  @Output() refreshposition: EventEmitter<void> = new EventEmitter();

  addPuesto(Position, CodDPT, CodEmpleado, DenomPuesto, NombreEmpleado, Situacion) {
    return this.http
    .post(`${BASEURL}/api/puestos/addPuesto`, { Position, CodDPT, CodEmpleado, DenomPuesto, NombreEmpleado, Situacion })
    .pipe(map((res: Response) => {
let newPuesto = res.json();
return this.newPuesto;
    }));
  }
}
