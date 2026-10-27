import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../modal/modal.component";

interface Education {
  name: string;
  company: string;
  date: string;
  icon: string;
  details: string[];
  certification?: string;
  url?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: Education[] = [
    {
      name: 'Ingeniería de Software',
      company: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      date: 'Agosto 2021 — Diciembre 2026',
      icon: 'fas fa-graduation-cap',
      details: [
        'Bachiller de Ingeniería de Software, perteneciente al décimo superior.',
        'Tesis en Machine Learning (Knowledge Tracing) aplicado a la educación financiera.',
        'Sólidos fundamentos en estructuras de datos, diseño de software y metodologías ágiles.'
      ],
      certification: '',
      url: ''
    },
    {
      name: 'Machine Learning',
      company: 'Google Cloud · Coursera',
      date: '2024',
      icon: 'fas fa-brain',
      details: [
        'Fundamentos de Machine Learning y su aplicación con herramientas de Google Cloud.'
      ],
      certification: '',
      url: 'https://www.coursera.org/account/accomplishments/certificate/M90L9K3WD7PJ'
    },
    {
      name: 'SQL for Data Science',
      company: 'University of California, Davis · Coursera',
      date: 'Mayo 2024',
      icon: 'fas fa-database',
      details: [
        'Comandos para filtrar, ordenar y resumir datos.',
        'Diseño de propuestas de análisis, selección de datos y métricas estadísticas.'
      ],
      certification: 'assets/img/certificates/sql.jpeg',
      url: 'https://www.coursera.org/account/accomplishments/specialization/ED29NMJPALSA'
    },
    {
      name: 'Python for Everybody',
      company: 'University of Michigan · Coursera',
      date: 'Mayo 2022',
      icon: 'fab fa-python',
      details: [
        'Acceso a datos web, estructuras de datos y bases de datos con Python.',
        'Programación orientada a objetos y manejo de errores.'
      ],
      certification: 'assets/img/certificates/python.jpeg',
      url: 'https://www.coursera.org/account/accomplishments/specialization/JGGT9KYSKACD'
    },
    {
      name: 'Analista de Ciberseguridad',
      company: 'IBM · Coursera',
      date: 'Noviembre 2023',
      icon: 'fas fa-shield-halved',
      details: [
        'Gestión de vulnerabilidades y seguridad de sistemas operativos y bases de datos.',
        'Herramientas de seguridad para pruebas de penetración y análisis forense.'
      ],
      certification: 'assets/img/certificates/security.jpeg',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/8CV4V26PNW9B'
    }
  ];

  selectedExperience: Education = this.educations[0];

  constructor(private dialog: MatDialog) {}

  selectExperience(index: number): void {
    this.selectedExperience = this.educations[index];
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, { panelClass: 'cert-dialog' });
    const instance = dialogRef.componentInstance;
    instance.img = this.selectedExperience.certification;
    instance.url = this.selectedExperience.url;
  }
}
