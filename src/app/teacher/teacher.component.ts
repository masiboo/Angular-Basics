import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  greetStudent(){
    this._interactionService.sendMessage('Good Morning');

  }
  appreciateStudent(){
    this._interactionService.sendMessage('Well Done');
  }


}
