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
export class PositionService {

  constructor(private http: Http) { }

  getPosition(position) {
    return this.http.get(`${BASEURL}/api/positions/${position}`).pipe(map(res => {
      const Position = res.json();
      return Position;
    }));
}
}
