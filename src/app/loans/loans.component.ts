import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
     this.activatedRoute.params.subscribe( params => {
       console.log('xxx '+params.id);
     })
  }


  ngOnInit(): void {
    //console.log('params: '+ this.activatedRoute.params);
  }

}
