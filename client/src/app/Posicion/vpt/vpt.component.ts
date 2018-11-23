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

constructor(public Edit: EditService, public PositionVPTView: PositionService, private route: ActivatedRoute, private router: Router, public snackBar: MatSnackBar) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.positionId = params['id'];
  });

  this.PositionVPTView.getPosition(this.positionId).subscribe(Position => {
    this.position = Position;
  console.log(this.position);
});
}
addComplDestino(Valor, CodDPT, Complemento, Grado, Puntos, Retribucion) {
  this.Edit.addComplDestino(Valor, CodDPT, Complemento, Grado, Puntos, Retribucion).subscribe(complemento => {
    this.nuevoComplemento = complemento;
    this.ngOnInit();
  });
}
addSubcompl(Complemento, SubComplemento, Grado, Puntos, Retribucion) {
  this.Edit.addSubcompl(Complemento, SubComplemento, Grado, Puntos, Retribucion).subscribe(subcomplemento => {
    this.nuevoSubcomplemento = subcomplemento;
    this.ngOnInit();
  });
}
editSubcompl(id, Complemento, SubComplemento, Grado, Puntos, Retribucion) {
  this.Edit.editSubcompl(id, Complemento, SubComplemento, Grado, Puntos, Retribucion).subscribe(subcomplemento => {
    this.editedSubcomplemento = subcomplemento;
    this.ngOnInit();
  });
}
removeSubcompl(id) {
  this.Edit.removeSubcompl(id).subscribe(() => {
  this.ngOnInit();
  });
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1000,
  });
}
}

