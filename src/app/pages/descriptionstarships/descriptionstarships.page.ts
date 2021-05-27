import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-descriptionstarships',
  templateUrl: './descriptionstarships.page.html',
  styleUrls: ['./descriptionstarships.page.scss'],
})
export class DescriptionstarshipsPage implements OnInit {

  starships:any;

  constructor(private actroute2:ActivatedRoute, private obtservswapi3:SwapiService) { }

  ngOnInit() {
this.actroute2.paramMap.subscribe((param)=>{
  let id= param.get('id');
  console.log(id);
  this.starships=this.obtservswapi3.getsWAPI(`starships/${id}`).subscribe(data =>{
    this.starships= data;
    console.log(data);
});

    
    });
  }

}
