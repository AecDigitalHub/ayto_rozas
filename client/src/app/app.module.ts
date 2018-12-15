import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from './routes';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AreaComponent } from './Area/area/area.component';
import { ComplementoComponent } from './Complementos/complemento/complemento.component';
import { PosicionComponent } from './Posicion/posicion/posicion.component';
import { CardsComponent } from './Dashboard/cards/cards.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardService } from '../services/dashboard.service';
import { AreaService } from '../services/area.service';
import { TestService } from '../services/test.service';
import { EditService } from '../services/edit.service';
import { PhotoHeaderComponent } from './photo-header/photo-header.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { LinealChartComponent } from './Charts/lineal-chart/lineal-chart.component';
import { PositionsTableComponent } from './Dashboard/positions-table/positions-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmploymentsTableComponent } from './Dashboard/employments-table/employments-table.component';
import { SideBarMenuComponent, FileDatabase } from './side-bar-menu/side-bar-menu.component';
import { DPTComponent } from './Posicion/dpt/dpt.component';
import { VPTComponent } from './Posicion/vpt/vpt.component';
import { RPTComponent } from './Posicion/rpt/rpt.component';
import { AreaPosititionsTableComponent } from './Area/area-posititions-table/area-posititions-table.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { MatSnackBarModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from '../services/authentication.service';
import { BubbleChartComponent } from './Charts/bubble-chart/bubble-chart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RPTColectivosComponent } from './rptcolectivos/rptcolectivos.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AreaComponent,
    ComplementoComponent,
    PosicionComponent,
    CardsComponent,
    PhotoHeaderComponent,
    PieChartComponent,
    LinealChartComponent,
    PositionsTableComponent,
    EmploymentsTableComponent,
    SideBarMenuComponent,
    DPTComponent,
    VPTComponent,
    RPTComponent,
    AreaPosititionsTableComponent,
    NotificacionComponent,
    LoginComponent,
    SignupComponent,
    BubbleChartComponent,
    RPTColectivosComponent,
  ],
  entryComponents: [
  ]
  ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' }),
    RouterModule.forRoot(routes, { useHash: true }),
    HttpModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatIconModule,
    NgxSmartModalModule.forRoot(),
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [DashboardService, AreaService, TestService, FileDatabase, EditService, AuthenticationService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
