import { Component } from '@angular/core';

interface Job {
  role: string;
  company: string;
  type: string;
  date: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      role: 'Desarrollador Full Stack',
      company: 'SIGMA — ERP automotriz',
      type: 'Tiempo completo',
      date: 'Enero 2025 — Actualidad',
      current: true,
      summary:
        'Desarrollo de punta a punta sobre un ERP automotriz en producción, usado por concesionarios de todo el país.',
      highlights: [
        'Desarrollé 35 módulos nuevos (frontend Vue 3 + Vuetify, backend Laravel y modelo de datos) usados por 650+ usuarios en 18 concesionarios.',
        'Refactoricé módulos críticos aplicando principios SOLID, reduciendo los tiempos de carga hasta en 70%.',
        'Construí dashboards y reportes gerenciales que reemplazaron procesos manuales en Excel y redujeron su elaboración en 65%.',
        'Integré el ERP con 9 proveedores externos vía APIs REST (facturación electrónica, citas, repuestos).',
        'Optimicé consultas y estructuras en PostgreSQL y participé en el ciclo Scrum completo con Jira y GitHub.'
      ],
      stack: ['Vue 3', 'Vuetify', 'Laravel', 'PostgreSQL', 'APIs REST', 'Scrum']
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'LINFA — Federación de fútbol',
      type: 'Freelance',
      date: '2025 — Actualidad',
      current: true,
      summary:
        'Plataforma de visualización deportiva para transmisiones, pantallas del estadio y redes sociales.',
      highlights: [
        'Desarrollo una plataforma que muestra resúmenes de partido, estadísticas, tablas de posiciones y equipos en pantallas dedicadas.',
        'Integro los datos con Footplay para automatizar procesos manuales del negocio (reportes, banners, carnets).',
        'Diseño las plantillas visuales y la experiencia, cubriendo las 5 ligas que maneja la federación.'
      ],
      stack: ['Vue', 'Laravel', 'APIs (Footplay)', 'UI/UX']
    },
    {
      role: 'Scrum Master & Desarrollador Full Stack',
      company: 'Pawal Skills — Gestión para restaurantes',
      type: 'Freelance',
      date: 'Marzo 2025 — Febrero 2026',
      summary:
        'Sistema de 5 módulos para auditoría e inducción de personal en cadenas de restaurantes.',
      highlights: [
        'Lideré como Scrum Master a un equipo de 3 personas durante todo el ciclo de desarrollo.',
        'Diseñé la arquitectura del sistema y la base de datos en PostgreSQL.',
        'Resultado: 15 locales usando el sistema y una reducción del 85% en el tiempo de auditoría.'
      ],
      stack: ['Vue 3', 'Laravel', 'PostgreSQL', 'Railway', 'Scrum']
    }
  ];
}
