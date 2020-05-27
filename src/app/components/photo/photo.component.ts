import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  private anniv: Date = new Date(1999, 10, 21)
  public anniversaire = () => {
    var ageDifMs = Date.now() - this.anniv.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  constructor() { }

  ngOnInit() { }

}
