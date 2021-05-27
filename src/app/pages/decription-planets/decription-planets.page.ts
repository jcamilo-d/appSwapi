import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-decription-planets',
  templateUrl: './decription-planets.page.html',
  styleUrls: ['./decription-planets.page.scss'],
})
export class DecriptionPlanetsPage implements OnInit {

  planets:any;

  constructor(private obterRoute:ActivatedRoute, private obtservswapi4:SwapiService) { }

  ngOnInit() {
    this.obterRoute.paramMap.subscribe((params)=>{
      let id=params.get('id');
      console.log(id);
      this.planets = this.obtservswapi4.getsWAPI(`planets/${id}`).subscribe(data =>{
        this.planets =data;
        console.log(data);
      });
    });
  }

}
