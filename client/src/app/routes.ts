import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AreaComponent } from './Area/area/area.component';
import { PosicionComponent } from './Posicion/posicion/posicion.component';
import { DPTComponent } from './Posicion/dpt/dpt.component';
import { VPTComponent } from './Posicion/vpt/vpt.component';
import { RPTComponent } from './Posicion/rpt/rpt.component';
import { ComplementoComponent } from './Complementos/complemento/complemento.component';
import { RPTColectivosComponent } from './rptcolectivos/rptcolectivos.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Area/:area', component: AreaComponent },
  { path: 'Posicion/#/:id', component: PosicionComponent,
   children: [
     { path: 'dpt/#/:id', component: DPTComponent },
     { path: 'vpt/#/:id', component: VPTComponent},
      { path: 'rpt/#/:id', component: RPTComponent}
    ]
   },
  { path: 'Complementos/:complemento', component: ComplementoComponent },
  { path: 'RPT', component: RPTColectivosComponent }
];

