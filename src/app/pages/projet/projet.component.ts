import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Projet } from 'src/app/core/models/Projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  public projet: Projet;
  constructor(private $project: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.$project.getProjectBySlug(params.slug).subscribe((data => this.projet = data));
    });
  }

}
