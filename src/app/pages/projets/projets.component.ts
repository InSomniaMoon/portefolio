import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {
  public projets: Observable<[]>;
  constructor(private $project: ProjectService) { }

  ngOnInit() {
    this.projets = this.$project.getProjects();
  }

}
