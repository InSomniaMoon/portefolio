import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<[]> {
    return this.http.get('assets/json/projects.json').pipe(
      map((res: any) => res.projects)
    )
  }

  public getProjectBySlug(slug: string) {
    return this.getProjects().pipe(
      map(projects => projects.find((project: any) => project.slug == slug))
    )
  }
}
