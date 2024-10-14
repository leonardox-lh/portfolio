import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  title = 'Proyectos';
  projects = [
    {
      name: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      images: ["../../assets/img/img1.jpg", "../../assets/img/img2.jpg", "../../assets/img/img3.jpeg"],
      tools: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
      url: "https://www.google.com",
      github: "https://github.com"
    },
    {
      name: 'Proyecto 2',
      description: 'Descripción del proyecto 1',
      images: ["../../assets/img/img1.jpg", "../../assets/img/img2.jpg", "../../assets/img/img3.jpeg"],
      tools: ["Angular", "NodeJS", "MongoDB"],
      url: "https://www.google.com",
      github: "https://github.com"
    }
  ]
}
