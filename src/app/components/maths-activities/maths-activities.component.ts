import { Activity } from './../../Activity';
import { ACTIVITIES } from './../../maths-activities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-activities',
  templateUrl: './maths-activities.component.html',
  styleUrls: ['./maths-activities.component.css']
})
export class MathsActivitiesComponent implements OnInit {

  activities: Activity[] = ACTIVITIES;  

  constructor() { }

  ngOnInit(): void {
  }

}
