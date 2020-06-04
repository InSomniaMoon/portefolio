import { Component, OnInit } from '@angular/core';
import { ParcoursService } from 'src/app/core/services/parcours.service';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent implements OnInit {
  parcours: any;
  constructor(private $parcours: ParcoursService) { }


  ngOnInit(): void {
    this.$parcours.getParcours()
    .pipe(map(data=> {
      console.log(data);
      return data;
    }))
    .subscribe((data:any) => this.parcours = data.fr);
    
  }

}
