import { Component } from '@angular/core';

interface Skill {
  name: string;
  img?: string;
  icon?: string;
}
interface SkillGroup {
  title: string;
  icon: string;
  desc: string;
  skills: Skill[];
}

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  groups: SkillGroup[] = [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      desc: 'Interfaces dinámicas, responsivas y centradas en el usuario.',
      skills: [
        { name: 'Vue 3', img: 'assets/img/icons/vue.svg' },
        { name: 'React', img: 'assets/img/icons/React.png' },
        { name: 'Angular', img: 'assets/img/icons/angular.png' },
        { name: 'Vuetify', img: 'assets/img/icons/vuetify.svg' },
        { name: 'TypeScript', img: 'assets/img/icons/ts.png' },
        { name: 'JavaScript', img: 'assets/img/icons/js.png' },
        { name: 'HTML5', img: 'assets/img/icons/html.png' },
        { name: 'CSS3', img: 'assets/img/icons/css.png' },
        { name: 'Bootstrap', img: 'assets/img/icons/boostrap.png' }
      ]
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      desc: 'APIs REST, lógica de negocio e integración con terceros.',
      skills: [
        { name: 'Laravel', img: 'assets/img/icons/php.svg' },
        { name: 'Spring Boot', img: 'assets/img/icons/spring-3.svg' },
        { name: 'Java', img: 'assets/img/icons/java.png' },
        { name: '.NET', img: 'assets/img/icons/net.svg' },
        { name: 'APIs REST', icon: 'fas fa-plug' }
      ]
    },
    {
      title: 'Bases de datos',
      icon: 'fas fa-database',
      desc: 'Modelado y optimización de consultas.',
      skills: [
        { name: 'PostgreSQL', img: 'assets/img/icons/postgres.png' },
        { name: 'MySQL', img: 'assets/img/icons/mysql.png' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: 'fas fa-brain',
      desc: 'Knowledge Tracing aplicado a la educación.',
      skills: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'TensorFlow', icon: 'fas fa-diagram-project' },
        { name: 'PyTorch', icon: 'fas fa-fire' },
        { name: 'Pandas', icon: 'fas fa-table' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'fas fa-gears',
      desc: 'Control de versiones, despliegue y gestión ágil.',
      skills: [
        { name: 'Git', icon: 'fas fa-code-branch' },
        { name: 'GitHub', img: 'assets/img/icons/github.svg' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Railway', icon: 'fas fa-train' },
        { name: 'Jira', icon: 'fab fa-jira' },
        { name: 'Figma', img: 'assets/img/icons/figma.svg' }
      ]
    },
    {
      title: 'Metodologías',
      icon: 'fas fa-people-group',
      desc: 'Trabajo en equipo y buenas prácticas.',
      skills: [
        { name: 'Scrum (Scrum Master)', icon: 'fas fa-arrows-spin' },
        { name: 'Principios SOLID', icon: 'fas fa-cubes' },
        { name: 'QA funcional', icon: 'fas fa-vial-circle-check' }
      ]
    }
  ];
}
