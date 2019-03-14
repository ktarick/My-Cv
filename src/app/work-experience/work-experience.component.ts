import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  job1:string = 'USAF - Weapons Load Crew Member.';
  job2:string = 'M.K. Morse - Rolling mill operator, cut lab technician.';
  job3:string = 'AFIT - Research Assistant, 3-D printing';
  constructor() { }

  ngOnInit() {
  }

}
