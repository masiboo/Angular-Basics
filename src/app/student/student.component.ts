import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$
    .subscribe(message => {
      if(message === 'Good Morning'){
        alert('Good Morning teacher');
      } else if(message === 'Well Done' ){
        alert('Thanks teacher');
      }

    })
  }

}
