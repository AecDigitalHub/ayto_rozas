import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  Laborales: number;
  Funcionarios: number;
  constructor(private http: Http) { }


  getArea(area) {
   return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
     const positionsArea = res.json();
     return positionsArea;
   }));
 }

 getColectivos(area) {
  return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
    let Laborales = 0;
    let Funcionarios = 0;
    for (let i = 0; i < res.json().positions.length; i++) {
    if  (res.json().positions[i].FichaDPT.Colectivo === '(F) Funcionario') {
      Funcionarios = Funcionarios + Number(res.json().positions[i].Puestos.length);
    } else if (res.json().positions[i].FichaDPT.Colectivo === '(L) Laboral') {
      Laborales = Laborales + Number(res.json().positions[i].Puestos.length);
    }
    }
    const Colectivos = { Funcionarios, Laborales };
    return Colectivos;
  }));
 }


 getGruposDist(area) {
  return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
    let GrupoA = 0;
    let GrupoB = 0;
    let GrupoC = 0;
    let GrupoD = 0;
    let GrupoE = 0;
    for (let i = 0; i < res.json().positions.length; i++) {
      if (res.json().positions[i].FichaDPT.Grupo === 'Grupo A: A1') {
        GrupoA = GrupoA + Number(res.json().positions[i].Puestos.length);
      } else if (res.json().positions[i].FichaDPT.Grupo === 'Grupo B: A2') {
        GrupoB = GrupoB + Number(res.json().positions[i].Puestos.length);
      } else if (res.json().positions[i].FichaDPT.Grupo === 'Grupo C: C1') {
        GrupoC = GrupoC + Number(res.json().positions[i].Puestos.length);
      } else if (res.json().positions[i].FichaDPT.Grupo === 'Grupo D: C2') {
        GrupoD = GrupoD + Number(res.json().positions[i].Puestos.length);
      } else {
        GrupoE = GrupoE + Number(res.json().positions[i].Puestos.length);
      }
  }
  const GruposDist = [GrupoA, GrupoB, GrupoC, GrupoD, GrupoE];
  return GruposDist;
}));
}

 getEmployeesCount(area) {
  return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
    let employees = 0;
    for (let i = 0; i < res.json().positions.length; i++) {
      employees = employees + res.json().positions[i].Puestos.length;
 }
 const employeesArea = employees;
 return employeesArea;
}));
}

getVacancies(area) {
  return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
    let vacantes = 0;
    for (let i = 0; i < res.json().positions.length; i++) {
     vacantes = vacantes + res.json().positions[i].Vacantes.length;
    }
return vacantes;
  }));
}
getSalaryDist(area) {
  return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
    const positions = res.json().positions;
    let salary0 = 0;
    let salary1 = 0;
    let salary2 = 0;
    let salary3 = 0;
    let salary4 = 0;
    for (let i = 0; i < positions.length; i++) {
      if (positions[i].Valoracion[0]) {
        if (positions[i].Valoracion[0].Complementos.TotCD) {
      if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 5000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 15000) {
            salary0 = salary0 + Number(res.json().positions[i].Puestos.length);
      } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 15000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 20000) {
        salary1 = salary1 + Number(res.json().positions[i].Puestos.length);
      } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 20000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 35000) {
        salary2 = salary2 + Number(res.json().positions[i].Puestos.length);
      } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 35000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 50000) {
        salary3 = salary3 + Number(res.json().positions[i].Puestos.length);
      } else {
        salary4 = salary4 + Number(res.json().positions[i].Puestos.length);
      }
    } else {
      if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 5000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 15000) {
        salary0 = salary0 + Number(res.json().positions[i].Puestos.length);
  } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 15000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 20000) {
        salary1 = salary1 + Number(res.json().positions[i].Puestos.length);
      } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 20000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 35000) {
        salary2 = salary2 + Number(res.json().positions[i].Puestos.length);
      } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 35000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 50000) {
        salary3 = salary3 + Number(res.json().positions[i].Puestos.length);
      } else {
        salary4 = salary4 + Number(res.json().positions[i].Puestos.length);
      }
    }
  }
}
  const SalaryDist = [salary0, salary1, salary2, salary3, salary4];
  return SalaryDist;
}));
}
}

