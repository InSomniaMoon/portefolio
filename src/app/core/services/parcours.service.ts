import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  constructor(private http:HttpClient) { }

    public getParcours(): Observable<[]> {
      return this.http.get('assets/json/cv.json').pipe(
        map((res: any) => res.parcours)
      )
    }
}
