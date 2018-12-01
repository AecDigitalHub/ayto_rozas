import { Component, OnInit, Input} from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import { PosicionComponent } from '../posicion/posicion.component';
import { NotificacionComponent } from '../../notificacion/notificacion.component';
import { EditService } from '../../../services/edit.service';
import { Http, Response } from '@angular/http';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-dpt',
  templateUrl: './dpt.component.html',
  styleUrls: ['./dpt.component.css']
})
export class DPTComponent implements OnInit {
positionId: String;
position: Observable<any>;
editedFicha: any;
editedConocimientos: any;
editedResponsAut: any;
editedCondiciones: any;
editedCertificaciones: any;
editedHabilidades: any;
editedFormCompl: any;
editedIdiomas: any;
editedGuias: any;
editedSupervisiones: any;
editedFunciones: any;
editedTareas: any;
editedMision: any;
editedRelExternas: any;
editedRelInternas: any;

  constructor(public PositionDPTView: PositionService, private route: ActivatedRoute, private router: Router, public Edit: EditService, public snackBar: MatSnackBar) { }



ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
  });

  this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position.position;
  console.log(this.position);
});
}
editFicha(id, DenomPuesto, CodigoDPT, Area, Unidad, Escala, Subescala, Categoria, Grupo, Colectivo, FormaProvision, Tipo, NumPuestos) {
  this.Edit.editFicha(id, DenomPuesto, CodigoDPT, Area, Unidad, Escala, Subescala, Categoria, Grupo, Colectivo, FormaProvision, Tipo, NumPuestos).subscribe(ficha => {
    this.editedFicha = ficha;
    this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
      this.position = Position.position;
  });
  });
  }
editCondiciones(id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad) {
this.Edit.editCondiciones(id, Dedicacion, Dificultad, Responsabilidad, Nocturnidad, Turnicidad, PeligrosidadPenosidad).subscribe(condiciones => {
  this.editedCondiciones = condiciones;
  this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position.position;
});
});
}
editMision(id, Mision) {
  this.Edit.editMision(id, Mision).subscribe(mision => {
    this.editedMision = mision;
    this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
      this.position = Position.position;
  });
  });
  }
addFuncion(id, Funcion, form) {
  form.reset();
  this.Edit.addFuncion(id, Funcion).subscribe(funciones => {
  this.editedFunciones = funciones;
  this.ngOnInit();
  });
}

removeFuncion(id, Funcion) {
  this.Edit.removeFuncion(id, Funcion).subscribe(funciones => {
  this.editedFunciones = funciones;
  this.ngOnInit();
});
}
addTarea(id, TipoTarea, Resultado, TiempoDedic) {
  this.Edit.addTarea(id, TipoTarea, Resultado, TiempoDedic).subscribe(tareas => {
  this.editedTareas = tareas;
  this.ngOnInit();
});
}
editConocimientos(id, Nivel, Titulo, Certificaciones, FormCompl, Idiomas, Actividad, Tiempo, Habilidades) {
  this.Edit.editConocimientos(id, Nivel, Titulo, Certificaciones, FormCompl, Idiomas, Actividad, Tiempo, Habilidades).subscribe(conocimientos => {
    this.editedConocimientos = conocimientos;
    this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
      this.position = Position.position;
  });
  });
  }
addCertificacion(id, Certificacion) {
  this.Edit.addCertificacion(id, Certificacion).subscribe(certificaciones => {
  this.editedCertificaciones = certificaciones;
  this.ngOnInit();
});
}
addHabilidad(id, Habilidad) {
  this.Edit.addHabilidad(id, Habilidad).subscribe(habilidades => {
  this.editedHabilidades = habilidades;
  this.ngOnInit();
});
}
addFormacion(id, Formacion) {
  this.Edit.addFormacion(id, Formacion).subscribe(formaciones => {
  this.editedFormCompl = formaciones;
  this.ngOnInit();
});
}
removeTarea(id, Tarea) {
  this.Edit.removeTarea(id, Tarea).subscribe(tareas => {
  this.editedTareas = tareas;
  this.ngOnInit();
});
}
removeCertificacion(id, Certificacion) {
  this.Edit.removeCertificacion(id, Certificacion).subscribe(certificaciones => {
  this.editedCertificaciones = certificaciones;
  this.ngOnInit();
});
}
removeHabilidad(id, Habilidad) {
  this.Edit.removeHabilidad(id, Habilidad).subscribe(habilidades => {
  this.editedHabilidades = habilidades;
  this.ngOnInit();
});
}
removeFormacion(id, Formacion) {
  this.Edit.removeFormacion(id, Formacion).subscribe(formaciones => {
  this.editedFormCompl = formaciones;
  this.ngOnInit();
});
}
addIdioma(id, Idioma, Nivel) {
  this.Edit.addIdioma(id, Idioma, Nivel).subscribe(idiomas => {
  this.editedIdiomas = idiomas;
  this.ngOnInit();
});
}
removeIdioma(id, Idioma) {
  this.Edit.removeIdioma(id, Idioma).subscribe(idiomas => {
  this.editedIdiomas = idiomas;
  this.ngOnInit();
});
}
editResponsAut(id, DependFuncional, GradoSuperv, GuiaOrientRecibidas, MagnitDecisiones, ResponsabilidadMando, Subordinados) {
  this.Edit.editResponsAut(id, DependFuncional, GradoSuperv, GuiaOrientRecibidas, MagnitDecisiones, ResponsabilidadMando, Subordinados).subscribe(responsaut => {
    this.editedResponsAut = responsaut;
    this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
      this.position = Position.position;
  });
  });
  }
addGuia(id, guia) {
  this.Edit.addGuia(id, guia).subscribe(guias => {
  this.editedGuias = guias;
  this.ngOnInit();
});
}
removeGuia(id, guia) {
  this.Edit.removeGuia(id, guia).subscribe(guias => {
  this.editedGuias = guias;
  this.ngOnInit();
});
}
addSupervision(id, supervision) {
  this.Edit.addSupervision(id, supervision).subscribe(supervisiones => {
  this.editedSupervisiones = supervisiones;
  this.ngOnInit();
});
}
removeSupervision(id, supervision) {
  this.Edit.removeSupervision(id, supervision).subscribe(supervisiones => {
  this.editedSupervisiones = supervisiones;
  this.ngOnInit();
});
}
addRelInterna(id, interna) {
  this.Edit.addRelInterna(id, interna).subscribe(internas => {
  this.editedRelInternas = internas;
  this.ngOnInit();
});
}
removeRelInterna(id, interna) {
  this.Edit.removeRelInterna(id, interna).subscribe(internas => {
  this.editedRelInternas = internas;
  this.ngOnInit();
});
}
addRelExterna(id, externa) {
  this.Edit.addRelExterna(id, externa).subscribe(externas => {
  this.editedRelExternas = externas;
  this.ngOnInit();
});
}
removeRelExterna(id, externa) {
  this.Edit.removeRelExterna(id, externa).subscribe(externas => {
  this.editedRelExternas = externas;
  this.ngOnInit();
});
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1000,
  });
}
}
