import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
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
  experiences: Experience[] = [
    {
      company: 'Upstatement',
      role: 'UI Engineer Co-op',
      date: 'July – December 2017',
      details: [
        'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
        'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
        'Architected and implemented the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback',
        'Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications'
      ]
    },
    {
      company: 'Scout Studio',
      role: 'Front-end Developer',
      date: 'January – June 2018',
      details: [
        'Worked on various front-end projects for clients using modern JavaScript frameworks',
        'Collaborated closely with designers and back-end developers to create seamless user experiences'
      ]
    },
    // Agrega más experiencias según sea necesario
  ];

  selectedExperience: Experience = this.experiences[0];

  selectExperience(index: number): void {
    this.selectedExperience = this.experiences[index];
  }
}
