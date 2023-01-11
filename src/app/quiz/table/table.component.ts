import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAnswer } from 'src/app/models/answer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  totalPoints(){
    let x = 0
    this.answers.forEach(element => {
      x += element.points
    });
    return x
  }
  @Input() answers:IAnswer[] = []
}
