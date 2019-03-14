import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  ed1:string = 'MAX Technical Training - Software Developer';
  ed2:string = 'Wright State University - Mechanical Engineering';
  ed3:String = 'Kent State Univeristy - Graphic Design'; 

  constructor() { }

  ngOnInit() {
  }

}
