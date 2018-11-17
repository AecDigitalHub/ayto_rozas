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
      Funcionarios = Funcionarios + Number(res.json().positions[i].FichaDPT.NumPuestosHomog);
    } else if (res.json().positions[i].FichaDPT.Colectivo === '(L) Laboral') {
      Laborales = Laborales + Number(res.json().positions[i].FichaDPT.NumPuestosHomog);
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
        GrupoA = GrupoA + Number(res.json().positions[i].FichaDPT.NumPuestosHomog);
      } else if (res.json().positions[i].FichaDPT.Grupo === 'Grupo B: A2') {
        GrupoB = GrupoB + Number(res.json().positions[i].FichaDPT.NumPuestosHomog);
      } else if (res.json().positions[i].FichaDPT.Grupo === 'Grupo C: C1') {
        GrupoC = GrupoC + Number(res.json().positions[i].FichaDPT.NumPuestosHomog);
      } else if (res.json().positions[i].FichaDPT.Grupo === 'Grupo D: C2') {
        GrupoD = GrupoD + Number(res.json().positions[i].FichaDPT.NumPuestosHomog);
      } else {
        GrupoE = GrupoE + Number(res.json().positions[i].FichaDPT.NumPuestosHomog);
      }
  }
  const GruposDist = [GrupoA, GrupoB, GrupoC, GrupoD, GrupoE];
  console.log(GruposDist);
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
// getSalaryDist(area) {
//   return this.http.get(`${BASEURL}/api/area/${area}`).pipe(map(res => {
//     const employees = res.json();
//     let salary1 = 0;
//     let salary2 = 0;
//     let salary3 = 0;
//     let salary4 = 0;
//     for (let i = 0; i < employees.jobs.length; i++) {
//       if ((employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) > 15000 && (employees.jobs[i].ImportePuestoCE + employees.puestos[i].ImportePuestoCd + employees.jobs[i].Sbase) < 20000) {
//         salary1++;
//       } else if ((employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) > 20000 && (employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) < 35000) {
//         salary2++;
//       } else if ((employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) > 35000 && (employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) < 50000) {
//         salary3++;
//       } else {
//         salary4++;
//       }
//   }
//   const SalaryDist = [salary1, salary2, salary3, salary4];
//   return SalaryDist;
// }));
}

