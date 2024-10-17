import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

interface Education {
  name: string;
  company: string;
  date: string;
  details: string[];
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  title = 'Education';
  educations: Education[] = [
    {
      name: 'University of Applied Sciences',
      company: 'Software engineer',
      date: 'August 2021 – now',
      details: [
        'Currently studying software engineering',
        'Expected graduation in 2023'
      ]
    },
    {
      name: 'SQL for Data Science',
      company: 'Coursera',
      date: '2023',
      details: [
        'Worked on various front-end projects for clients using modern JavaScript frameworks',
        'Collaborated closely with designers and back-end developers to create seamless user experiences'
      ]
    },
    {
      name: 'Python for Data Science',
      company: 'Coursera',
      date: '2022',
      details: [
        'Worked on various front-end projects for clients using modern JavaScript frameworks',
        'Collaborated closely with designers and back-end developers to create seamless user experiences'
      ]
    },
    {
      name: 'Cyber-security Analyst',
      company: 'Udemy',
      date: '2023',
      details: [
        'Worked on various front-end projects for clients using modern JavaScript frameworks',
        'Collaborated closely with designers and back-end developers to create seamless user experiences'
      ]
    },
    {
      name: 'IT Basics',
      company: 'Google',
      date: '2023',
      details: [
        'Worked on various front-end projects for clients using modern JavaScript frameworks',
        'Collaborated closely with designers and back-end developers to create seamless user experiences'
      ]
    },
  ];

  selectedExperience: Education = this.educations[0];

  constructor() {}

  selectExperience(index: number): void {
    this.selectedExperience = this.educations[index];
  }

}
