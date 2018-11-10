import { Component, OnInit, Input} from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import { PosicionComponent } from '../posicion/posicion.component';
import { EditService } from '../../../services/edit.service';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-dpt',
  templateUrl: './dpt.component.html',
  styleUrls: ['./dpt.component.css']
})
export class DPTComponent implements OnInit {
positionId: String;
position: Observable<any>;
editedFicha: any;
editedCondiciones: any;
editedFunciones: any;
editedMision: any;

  constructor(public PositionDPTView: PositionService, private route: ActivatedRoute, private router: Router, public Edit: EditService) { }



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

addFuncion(id, Funcion) {
  this.Edit.addFuncion(id, Funcion).subscribe(funciones => {
  this.editedFunciones = funciones;
  this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
  this.position = Position.position;
});
});
}
removeFuncion(id, Funcion) {
  this.Edit.removeFuncion(id, Funcion).subscribe(funciones => {
  this.editedFunciones = funciones;
  this.PositionDPTView.getPosition(this.positionId).subscribe(Position => {
  this.position = Position.position;
});
});
}
}
