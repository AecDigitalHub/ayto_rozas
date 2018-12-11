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
        for (let i = 0; i < positions.positions.length; i++) {
        count = positions.positions[i].Puestos.reduce((acc, Puesto) => Puesto.NombreEmpleado === 'Vacante' ? ++acc : acc, 0);
        }
        return positions;
      })
    );
  }

getRPTFuncionarios() {
return  this.http.get(`${BASEURL}/api/positions/colectivo/Funcionarios`).pipe(map(res => {
  const RPTColectivoFuncionarios = res.json();
  return RPTColectivoFuncionarios;
}));
}

getRPTLaborales() {
  return  this.http.get(`${BASEURL}/api/positions/colectivo/Laborales`).pipe(map(res => {
    const RPTColectivoLaborales = res.json();
    return RPTColectivoLaborales;
  }));
  }

    getValoracion(id) {
      return this.http
      .get(`${BASEURL}/api/complementos/valoracion/${id}`, id).pipe(map((res: Response) => {
      }));
    }

  getColectivos() {
    return this.http.get(`${BASEURL}/api/positions`).pipe(
      map(res => {
        let funcionarios = 0;
        let laborales = 0;
        for (let i = 0; i < res.json().positions.length; i++) {
          if (res.json().positions[i].FichaDPT.Colectivo === '(F) Funcionario') {
            funcionarios = funcionarios + (parseInt(res.json().positions[i].Puestos.length, 10));
          } else if (res.json().positions[i].FichaDPT.Colectivo === '(L) Laboral') {
            laborales = laborales + (parseInt(res.json().positions[i].Puestos.length, 10));
          }
        }
        const Colectivos = { funcionarios, laborales };
        return Colectivos;
      })
    );
  }

  getEmployeesCount() {
    return this.http.get(`${BASEURL}/api/positions`).pipe(
      map(res => {
      const EmployeesCount = res.json().positions.reduce(function(tot, position) {
      return tot + position.Puestos.length; }, 0);
      return EmployeesCount;
    }));
  }

  getSalaryCount() {
    return this.http.get(`${BASEURL}/api/positions`).pipe(
      map(res => {
      const positions = res.json().positions;
      let SalaryCount = 0;
      for (let i = 0; i < positions.length; i++) {
      if (positions[i].Valoracion[0]) {
      SalaryCount = SalaryCount + (Number(res.json().positions[i].Valoracion[0].SalarioBase) + Number(res.json().positions[i].Valoracion[0].Complementos.TotCD) + Number(res.json().positions[i].Valoracion[0].Complementos.TotCE));
    }
  }
     console.log(SalaryCount);
      return SalaryCount;
        }));
  }

getVacancy() {
  return this.http.get(`${BASEURL}/api/positions`).pipe(
    map(res => {
    const EmployeesVacantes = res.json().positions.reduce(function(tot, position) {
    return tot + position.Vacantes.length; }, 0);
    return EmployeesVacantes;
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
    return this.http.get(`${BASEURL}/api/positions`).pipe(map(res => {
      const positions = res.json().positions;
      let salary0 = 0;
      let salary1 = 0;
      let salary2 = 0;
      let salary3 = 0;
      let salary4 = 0;
      for (let i = 0; i < positions.length; i++) {
        if (positions[i].Valoracion[0]) {
          if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 5000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 15000) {
            salary0 = salary0 + Number(res.json().positions[i].Puestos.length);
      } else
        if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 15000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 20000) {
          salary1 = salary1 + Number(res.json().positions[i].Puestos.length);
        } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 20000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 35000) {
          salary2 = salary2 + Number(res.json().positions[i].Puestos.length);
        } else if (parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) > 35000 && parseFloat(positions[i].Valoracion[0].SalarioBase) + parseFloat(positions[i].Valoracion[0].Complementos.TotCD) + parseFloat(positions[i].Valoracion[0].Complementos.TotCE) < 50000) {
          salary3 = salary3 + Number(res.json().positions[i].Puestos.length);
        } else {
          salary4 = salary4 + Number(res.json().positions[i].Puestos.length);
        }
    }
  }
    const SalaryDist = [salary0, salary1, salary2, salary3, salary4];
    console.log(SalaryDist);
    return SalaryDist;
  }));
}
}
