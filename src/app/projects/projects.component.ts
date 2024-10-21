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
      name: 'Arquimentor',
      description: 'Arquimentor es una plataforma de aprendizaje en linea ' +
        ' para estudiantes de arquitectura y diseño, donde pueden contactar ' +
        'con diversos mentores personalizados.',
      images: [
        "../../assets/img/projects/arq.png",
        "../../assets/img/projects/arq0.png",
        "../../assets/img/projects/arq1.png",
        "../../assets/img/projects/arq2.png",
        "../../assets/img/projects/arq3.png",
        "../../assets/img/projects/arq4.png",
        "../../assets/img/projects/arq5.png",
        "../../assets/img/projects/arq6.png",],
      tools: ["fab fa-angular","fa-solid fa-leaf", "fa-solid fa-a", "fab fa-bootstrap"],
      url: "https://arquimentor-7e645.firebaseapp.com/login",
      github: "https://github.com/leonardox-lh/arquimentor-platform"
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
