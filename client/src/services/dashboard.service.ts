import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { isNumber } from 'util';

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: Http) {}

  getPositions() {
    let count = 0;
    return this.http.get(`${BASEURL}/api/positions`).pipe(
      map(res => {
        const positions = res.json();
        console.log(positions.positions[1].Puestos);
        for (let i = 0; i < positions.positions.length; i++) {
        count = positions.positions[i].Puestos.reduce((acc, Puesto) => Puesto.NombreEmpleado === 'Vacante' ? ++acc : acc, 0);
        console.log(count);
        }
        return positions;
      })
    );
  }


  getColectivos() {
    return this.http.get(`${BASEURL}/api/positions`).pipe(
      map(res => {
        let funcionarios = 0;
        let laborales = 0;
        for (let i = 0; i < res.json().positions.length; i++) {
          if (res.json().positions[i].FichaDPT.Colectivo === '(F) Funcionario') {
            funcionarios = funcionarios + (parseInt(res.json().positions[i].FichaDPT.NumPuestosHomog, 10));
          } else {
            laborales = laborales + (parseInt(res.json().positions[i].FichaDPT.NumPuestosHomog, 10));
          }
        }
        const Colectivos = { funcionarios, laborales };
        return Colectivos;
      })
    );
  }

  // getEmployeesColectivos() {
  //   return this.http.get(`${BASEURL}/api/employees`).pipe(
  //     map(res => {
  //       let EmpFuncionarios = [];
  //       let EmpLaborales = [];
  //       for (let i=0; i < res.json().jobs.length; i++) {
  //         if (res.json().jobs[i].Colectivo === 'Funcionarios') {
  //           EmpFuncionarios.push(res.json().jobs[i]);
  //         } else {
  //           EmpLaborales.push(res.json().jobs[i]);
  //         }
  //       }
  //       const jobs = [ { EmpFuncionarios }, { EmpLaborales }];
  //       console.log(jobs);
  //       return jobs;
  //     })
  //   );
  // }

  getEmployeesCount() {
    return this.http.get(`${BASEURL}/api/employees`).pipe(
      map(res => {
        const employeesCount = res.json().jobs.length;
        return employeesCount;
  })
);
}

getVacancy() {
  return this.http.get(`${BASEURL}/api/employees`).pipe(map(res => {
    let vacantes = 0;
    for (let i = 0; i < res.json().jobs.length; i++) {
      if (res.json().jobs[i].NombreEmpleado === 'Vacante') {
      vacantes++;
    }
}
return vacantes;
  }));
}

  getAvgEmployees() {
    return this.http.get(`${BASEURL}/api/employees`).pipe(
      map(res => {
        const avgEmployees = res.json().jobs.length / 14;
        return avgEmployees;
      })
    );
  }

  getSalaryDist() {
    return this.http.get(`${BASEURL}/api/employees`).pipe(map(res => {
      const employees = res.json();
      let salary1 = 0;
      let salary2 = 0;
      let salary3 = 0;
      let salary4 = 0;
      for (let i = 0; i < employees.jobs.length; i++) {
        if ((employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) > 15000 && (employees.jobs[i].ImportePuestoCE + employees.puestos[i].ImportePuestoCd + employees.jobs[i].Sbase) < 20000) {
          salary1++;
        } else if ((employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) > 20000 && (employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) < 35000) {
          salary2++;
        } else if ((employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) > 35000 && (employees.jobs[i].ImportePuestoCE + employees.jobs[i].ImportePuestoCd + employees.jobs[i].Sbase) < 50000) {
          salary3++;
        } else {
          salary4++;
        }
    }
    const SalaryDist = [salary1, salary2, salary3, salary4];
    return SalaryDist;
  }));
}
}
