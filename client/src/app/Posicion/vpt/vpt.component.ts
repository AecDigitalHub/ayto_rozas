import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../../../services/position.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditService } from '../../../services/edit.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-vpt',
  templateUrl: './vpt.component.html',
  styleUrls: ['./vpt.component.css']
})
export class VPTComponent implements OnInit {
positionId: String;
position: Observable<any>;
ComplAvg: any;
nuevoComplemento: any;
nuevoSubcomplemento: any;
editedSubcomplemento: any;
complementoAvg: Object = {
  complementoAvgGrado: '',
  complementoAvgPuntos: '',
  complementoAvgRetribucion: ''
};
editedComplemento: any;
nuevoValoracion: any;
removedSubcomplemento: any;

constructor(public Edit: EditService, public PositionVPTView: PositionService, private route: ActivatedRoute, private router: Router, public snackBar: MatSnackBar) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
  });
  this.PositionVPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position;
});
this.PositionVPTView.getValoracion(this.positionId).subscribe(() => {
});
}
getValoracion(id) {
this.PositionVPTView.getValoracion(this.positionId).subscribe(() => {
});
}
addComplDestino(Valor, CodDPT, Complemento, Grado, Puntos, Retribucion) {
  this.Edit.addComplDestino(Valor, CodDPT, Complemento, Grado, Puntos, Retribucion).subscribe(() => {
    this.getValoracion(this.positionId);
    this.ngOnInit();
  });
}
addComplEspecifico(Valor, CodDPT, Complemento, Grado, Puntos, Retribucion, Subcomplementos, AvgGrado, AvgPuntos, AvgRetribucion) {
  this.Edit.addComplEspecifico(Valor, CodDPT, Complemento, Grado, Puntos, Retribucion, Subcomplementos, AvgGrado, AvgPuntos, AvgRetribucion).subscribe(() => {
    this.getValoracion(this.positionId);
    this.ngOnInit();
  });
}
addSubcompl(CodDPT, Complemento, SubComplemento, Grado) {
  this.Edit.addSubcompl(CodDPT, Complemento, SubComplemento, Grado).subscribe(() => {
    this.getComplementoAvg(Complemento);
    this.getValoracion(this.positionId);
    this.ngOnInit();
  });
}
editCompl(id, Valor, CodDPT, Complemento, Grado, Puntos, Retribucion, Subcomplementos, AvgGrado, AvgPuntos, AvgRetribucion) {
  this.Edit.editComplemento(id, Valor, CodDPT, Complemento, Grado, Puntos, Retribucion, Subcomplementos, AvgGrado, AvgPuntos, AvgRetribucion).subscribe(() => {
    this.getComplementoAvg(Complemento);
    this.getValoracion(this.positionId);
    this.ngOnInit();
  });
}
editSubcompl(id, Complemento, CodDPT, SubComplemento, Grado, Puntos, Retribucion) {
  this.Edit.editSubcompl(id, Complemento, CodDPT, SubComplemento, Grado, Puntos, Retribucion).subscribe(() => {
    this.getComplementoAvg(Complemento);
    this.getValoracion(this.positionId);
    this.ngOnInit();
  });
}
removeSubcompl(Complemento, id) {
  this.Edit.removeSubcompl(id).subscribe(() => {
    this.getComplementoAvg(Complemento);
    this.ngOnInit();
    this.getValoracion(this.positionId);
  });
}
getComplementoAvg(id) {
  this.PositionVPTView.getComplementoAvg(id).subscribe(complemento => {
    this.editedComplemento = complemento;
    this.ngOnInit();
  });
}
removeComplemento(id) {
  this.PositionVPTView.removeComplemento(id).subscribe(() => {
  this.getValoracion(this.positionId);
  this.ngOnInit();
  });
}
addValoracion(Position, CodigoDPT, Complementos) {
  this.PositionVPTView.addValoracion(Position, CodigoDPT, Complementos).subscribe(valoracion => {
this.nuevoValoracion = valoracion;
this.ngOnInit();
  });
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1000,
  });
}
}

