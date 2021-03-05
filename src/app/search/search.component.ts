import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  id = 0;
  name = 'test';

  constructor(private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
          console.log(params);
          this.id = params.id;
          this.name = params.name;
      })
  }


  ngOnInit(): void {
  }

}
