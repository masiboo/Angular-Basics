import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientId: 10, firstName: 'masum', lastName: 'islam'},
    {clientId: 11, firstName: 'mahi', lastName: 'islam'},
    {clientId: 12, firstName: 'sabrina', lastName: 'islam'},
    {clientId: 13, firstName: 'masi', lastName: 'islam'},
    {clientId: 14, firstName: 'test', lastName: 'islam'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
