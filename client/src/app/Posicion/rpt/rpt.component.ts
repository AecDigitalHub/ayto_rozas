import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotificacionComponent } from '../../notificacion/notificacion.component';
import { PuestoService } from '../../../services/puesto.service';
import { Http, Response } from '@angular/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-rpt',
  templateUrl: './rpt.component.html',
  styleUrls: ['./rpt.component.css']
})
export class RPTComponent implements OnInit {
positionId: String;
position: Observable<any>;
newPuesto: any;
editedPuestos: any;
editedPuesto: any;
editedPosition: Observable<any>;

constructor(public snackBar: MatSnackBar, public PositionRPTView: PositionService, private route: ActivatedRoute, private router: Router, public Puestos: PuestoService) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
  });

  this.PositionRPTView.getPosition(this.positionId).subscribe(position => {
    this.position = position.position;
});
}
addPuesto(Position, CodDPT, CodEmpleado, DenomPuesto, NombreEmpleado, Situacion) {
  this.Puestos.addPuesto(Position, CodDPT, CodEmpleado, DenomPuesto, NombreEmpleado, Situacion).subscribe(puesto => {
  this.newPuesto = puesto;
  this.ngOnInit();
});
}

removePuesto(id) {
  this.Puestos.removePuesto(id).subscribe(() => {
    this.ngOnInit();
  });
}

editPuesto(id, Position, CodDPT, DenomPuesto, CodEmpleado, NombreEmpleado, Situacion) {
  this.Puestos.editPuesto(id, Position, CodDPT, DenomPuesto, CodEmpleado, NombreEmpleado, Situacion).subscribe(puesto => {
this.editedPuesto = puesto;
this.ngOnInit();
  });
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1000,
  });
}
}
