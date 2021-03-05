import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {
  success_msg = true;
  title = "condition page";

  contacts = [
    {
      'firstName': "masum",
      'lastName': "islam",
      'id': 123
    },
    {
      'firstName': "sabrina",
      'lastName': "islam",
      'id':323
    },
    {
      'firstName': "mahi",
      'lastName': "islam",
      'id': 543
    },
    {
      'firstName': "masum",
      'lastName': "islam",
      'id': 123
    },
    {
      'firstName': "sabrina",
      'lastName': "islam",
      'id':323
    },
    {
      'firstName': "mahi",
      'lastName': "islam",
      'id': 543
    }
  ]

  superPower = "batMan";

  styleProp = "purple";
  txColor = "black";
  dynamicClass = "c3";
  conditionalClass = "c4";

  lowerCasePipe =  "All in lower case This is sample STRING ";
  upperCasePipe =  "All in upper case This is sample STRING ";
  dateExamplePipe = Date.now();

  currencyExamplePipe = 20;
  percentageExamplePipe =  0.67675545;
  jsonObject  = {
    username: "masi",
    course: "angular",
    experience: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  getClsName(){
    return 'c7';
  }

}
