import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

interface Education {
  name: string;
  company: string;
  date: string;
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
  title = 'Educación';
  educations: Education[] = [
    {
      name: 'University of Applied Sciences',
      company: 'Software engineer',
      date: 'Agosto 2021 – ahora',
      details: [
        'Practicante de Ingeniería de Software - 7mo ciclo UPC. ' +
        'Perteneciente al décimo superior, y con sólidos conocimientos en lógica de programación y diseño de software.',
      ],
      certification: '',
      url: "https://www.coursera.org/account/accomplishments/specialization/ED29NMJPALSA"
    },
    {
      name: 'SQL for Data Science',
      company: 'University of California',
      date: 'Mayo 2024',
      details: [
        'Comandos para filtrar, ordenar y resumir datos. ' +
        'Igualmente desarrollar una propuesta de proyecto y seleccionar sus datos, realizar análisis estadísticos y desarrollar métricas',
      ],
      certification: '../../assets/img/certificates/sql.jpeg',
      url: "https://www.coursera.org/account/accomplishments/specialization/ED29NMJPALSA"
    },
    {
      name: 'Python for Data Science',
      company: 'University of Michigan',
      date: 'Mayo 2022',
      details: [
        'Uso de Python para acceder a datos web, estructuras de datos y unos de base de datos con Python, POO y manejo de errores.'
      ],
      certification: '../../assets/img/certificates/python.jpeg',
      url: "https://www.coursera.org/account/accomplishments/specialization/JGGT9KYSKACD"
    },
    {
      name: 'Cyber-security Analyst',
      company: 'IBM',
      date: 'Noviembre 2023',
      details: [
        'Gestionar las vulnerabilidades de las bases de datos en la administración y seguridad de los sistemas operativos.',
        'Uso de herramientas de seguridad para realizar pruebas de penetración y análisis forenses.'
      ],
      certification: '../../assets/img/certificates/security.jpeg',
      url: "https://www.coursera.org/account/accomplishments/professional-cert/8CV4V26PNW9B"
    },
    {
      name: 'IT Basics',
      company: 'Google',
      date: '2023',
      details: [
        'Conocimientos en manejo de consolas mediante interfaz de comandos, en sistemas operativos window y linux.'
      ],
      certification: '../../assets/img/certificates/so.jpeg',
      url: "https://www.coursera.org/account/accomplishments/verify/U77B4EXXGMMP"
    },
  ];

  selectedExperience: Education = this.educations[0];

  constructor(private dialog: MatDialog) {}

  selectExperience(index: number): void {
    this.selectedExperience = this.educations[index];
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
    const instance = dialogRef.componentInstance;
    instance.img = this.selectedExperience.certification;
    instance.url = this.selectedExperience.url;
  }
}
