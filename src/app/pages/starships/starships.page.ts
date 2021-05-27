import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {
  starships:any
  iconname= 'rocket'

  constructor(private obtservswapi3:SwapiService) { }

  ngOnInit() {
    this.starships= this.obtservswapi3.getsWAPI('starships')

  }

}
