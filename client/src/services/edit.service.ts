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
editedFicha: any;
editedCondiciones: any;
editedFunciones: any;
editedTareas: any;
editedMision: any;
editedConocimientos: any;
editedResponsAut: any;

  constructor(private http: Http) { }

  @Output() refreshposition: EventEmitter<void> = new EventEmitter();

  editFicha(id, DenomPuesto, CodigoDPT, Area, Unidad, Escala, Subescala, Categoria, Grupo, Colectivo, FormaProvision, Tipo, NumPuestos) {
    return this.http
      .put(`${BASEURL}/api/positions/edit/ficha/${id}`, { id, DenomPuesto, CodigoDPT, Area, Unidad, Escala, Subescala, Categoria, Grupo, Colectivo, FormaProvision, Tipo, NumPuestos })
      .pipe(map((res: Response) => {
        let editedFicha = res.json();
        return this.editedFicha;
      }));
  }
  
  
  editCondiciones(id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad) {
    return this.http
      .put(`${BASEURL}/api/positions/edit/condiciones/${id}`, { id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad })
      .pipe(map((res: Response) => {
        let editedCondiciones = res.json();
        return this.editedCondiciones;
      }));
  }
  editConocimientos( id, Nivel, Titulo, Certificaciones, FormCompl, Idiomas, Actividad, Tiempo, Habilidades ) {
    return this.http
      .put(`${BASEURL}/api/positions/edit/conocimientos/${id}`, { id, Nivel, Titulo, Certificaciones, FormCompl, Idiomas, Actividad, Tiempo, Habilidades })
      .pipe(map((res: Response) => {
        let editedConocimientos = res.json();
        return this.editedConocimientos;
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
      }));
  }
  removeFuncion(id, Funcion) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/funcion/${id}`, { Funcion })
      .pipe(map((res: Response) => {
      }));
  }
  addTarea(id, TipoTarea, Resultado, TiempoDedic) {
    return this.http
      .put(`${BASEURL}/api/positions/add/tarea/${id}`, { id, TipoTarea, Resultado, TiempoDedic })
      .pipe(map((res: Response) => {
      }));
  }
  removeTarea(id, tarea) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/tarea/${id}`,  {tarea} )
      .pipe(map((res: Response) => {
      }));
  }
  addCertificacion(id, certificacion) {
    return this.http
      .put(`${BASEURL}/api/positions/add/certificacion/${id}`, { certificacion })
      .pipe(map((res: Response) => {
      }));
  }
  removeCertificacion(id, certificacion) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/certificacion/${id}`,  {certificacion} )
      .pipe(map((res: Response) => {
      }));
  }
  removeHabilidad(id, habilidad) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/habilidad/${id}`,  {habilidad} )
      .pipe(map((res: Response) => {
      }));
  }
  addFormacion(id, formacion) {
    return this.http
      .put(`${BASEURL}/api/positions/add/formacion/${id}`, { formacion })
      .pipe(map((res: Response) => {
      }));
  }
  removeFormacion(id, formacion) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/formacion/${id}`,  {formacion} )
      .pipe(map((res: Response) => {
      }));
  }
  addIdioma(id, Idioma, Nivel) {
    return this.http
      .put(`${BASEURL}/api/positions/add/idioma/${id}`, { id, Idioma, Nivel })
      .pipe(map((res: Response) => {
      }));
  }
  removeIdioma(id, idioma) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/idioma/${id}`,  {idioma} )
      .pipe(map((res: Response) => {
      }));
  }
  editResponsAut( id, DependFuncional, GradoSuperv, GuiaOrientRecibidas, MagnitDecisiones, ResponsabilidadMando, Subordinados ) {
    return this.http
      .put(`${BASEURL}/api/positions/edit/responsaut/${id}`, { id, DependFuncional, GradoSuperv, GuiaOrientRecibidas, MagnitDecisiones, ResponsabilidadMando, Subordinados })
      .pipe(map((res: Response) => {
        let editedResponsAut = res.json();
        return this.editedResponsAut;
      }));
  }
  addGuia(id, guia) {
    return this.http
      .put(`${BASEURL}/api/positions/add/guia/${id}`, { guia })
      .pipe(map((res: Response) => {
      }));
  }
  removeGuia(id, guia) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/guia/${id}`,  {guia} )
      .pipe(map((res: Response) => {
      }));
  }
  addSupervision(id, supervision) {
    return this.http
      .put(`${BASEURL}/api/positions/add/supervision/${id}`, { supervision })
      .pipe(map((res: Response) => {
      }));
  }
  removeSupervision(id, supervision) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/supervision/${id}`,  { supervision } )
      .pipe(map((res: Response) => {
      }));
  }
  addRelInterna(id, interna) {
    return this.http
      .put(`${BASEURL}/api/positions/add/relinterna/${id}`, { interna })
      .pipe(map((res: Response) => {
      }));
  }
  removeRelInterna(id, interna) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/relinterna/${id}`,  { interna } )
      .pipe(map((res: Response) => {
      }));
  }
  addRelExterna(id, externa) {
    return this.http
      .put(`${BASEURL}/api/positions/add/relexterna/${id}`, { externa })
      .pipe(map((res: Response) => {
      }));
  }
  removeRelExterna(id, externa) {
    return this.http
      .put(`${BASEURL}/api/positions/remove/relexterna/${id}`,  {externa} )
      .pipe(map((res: Response) => {
      }));
  }
  getPosition(position) {
    return this.http.get(`${BASEURL}/api/positions/${position}`).pipe(map(res => {
      const Position = res.json();
      console.log(Position);
      return Position;
    }));
}
}


