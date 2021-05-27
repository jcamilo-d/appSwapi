import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-descriptionpeople',
  templateUrl: './descriptionpeople.page.html',
  styleUrls: ['./descriptionpeople.page.scss'],
})
export class DescriptionpeoplePage implements OnInit {
people:any;

  constructor(private actroute:ActivatedRoute, private obtservswapi2:SwapiService) { }

  ngOnInit() {
this.actroute.paramMap.subscribe((param)=>{
  let id= param.get('id');
  console.log(id);
  this.people=this.obtservswapi2.getsWAPI(`people/${id}`).subscribe(data =>{
    this.people= data;
    console.log(data);
});

    
    });
  }

}
