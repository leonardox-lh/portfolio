import { Component } from '@angular/core';

interface Project {
  name: string;
  category: string;
  year: string;
  role: string;
  description: string;
  metrics: string[];
  images?: string[];
  cover?: { icon: string; gradient: string };
  tools: [string, string][];
  url?: string;
  github?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeImage: Record<number, number> = {};
  lightboxSrc: string | null = null;

  setImage(projectIndex: number, imageIndex: number) {
    this.activeImage[projectIndex] = imageIndex;
  }

  openLightbox(src: string) {
    this.lightboxSrc = src;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxSrc = null;
    document.body.style.overflow = '';
  }

  projects: Project[] = [
    {
      name: 'SIGMA',
      category: 'ERP automotriz · Producción',
      year: '2025 — Actualidad',
      role: 'Desarrollador Full Stack',
      description:
        'ERP para la gestión integral del sector automotriz. Desarrollo de módulos de punta a punta, dashboards gerenciales e integraciones con proveedores externos.',
      metrics: ['35 módulos', '650+ usuarios', '−70% tiempos de carga'],
      images: [
        'assets/img/projects/sigma/1.png',
        'assets/img/projects/sigma/2.png',
        'assets/img/projects/sigma/3.png',
        'assets/img/projects/sigma/4.png'
      ],
      tools: [
        ['assets/img/icons/vue.svg', 'Vue 3'],
        ['assets/img/icons/vuetify.svg', 'Vuetify'],
        ['assets/img/icons/php.svg', 'Laravel'],
        ['assets/img/icons/postgres.png', 'PostgreSQL']
      ],
      url: 'https://dms.sigma-peru.com/home',
      github: '',
      featured: true
    },
    {
      name: 'EduFin ML — Tesis UPC',
      category: 'Machine Learning · Educación',
      year: '2026',
      role: 'Investigador & Desarrollador',
      description:
        'Plataforma gamificada de educación financiera con un modelo de Knowledge Tracing con olvido (DKT-Forget) que predice el dominio de cada usuario y personaliza su ruta de aprendizaje.',
      metrics: ['AUC 79.66', '+79% aprendizaje', '40 usuarios de prueba'],
      images: [
        'assets/img/projects/edufin/0.png',
        'assets/img/projects/edufin/1.png',
        'assets/img/projects/edufin/2.png',
        'assets/img/projects/edufin/3.png',
        'assets/img/projects/edufin/4.png'
      ],
      tools: [
        ['assets/img/icons/React.png', 'React'],
        ['assets/img/icons/spring-3.svg', 'Spring Boot'],
        ['assets/img/icons/mysql.png', 'MySQL']
      ],
      url: '',
      github: '',
      featured: true
    },
    {
      name: 'LINFA — Federación de fútbol',
      category: 'Plataforma deportiva · Freelance',
      year: '2025 — Actualidad',
      role: 'Desarrollador Full Stack',
      description:
        'Plataforma de visualización deportiva: resúmenes de partido, estadísticas, tablas de posiciones y equipos en pantallas dedicadas, integrada con Footplay para automatizar reportes, banners y carnets.',
      metrics: ['5 ligas', 'Integración Footplay', 'Transmisiones'],
      images: [
        'assets/img/projects/linfa/1.webp',
        'assets/img/projects/linfa/2.png',
        'assets/img/projects/linfa/3.webp',
        'assets/img/projects/linfa/4.webp'
      ],
      tools: [
        ['assets/img/icons/vue.svg', 'Vue'],
        ['assets/img/icons/php.svg', 'Laravel']
      ],
      url: '',
      github: '',
      featured: true
    },
    {
      name: 'Rous Accesorios',
      category: 'E-commerce · Asistente IA',
      year: '2025',
      role: 'Desarrollador único',
      description:
        'Tienda online completa (UX/UI, frontend, backend y despliegue) con búsqueda rápida de productos y un asistente de IA en WhatsApp que atiende consultas de clientes.',
      metrics: ['−90% tiempo de respuesta', '~98 consultas/mes', 'IA en WhatsApp'],
      images: [
        'assets/img/projects/rous/1.png',
        'assets/img/projects/rous/2.png',
        'assets/img/projects/rous/3.png'
      ],
      tools: [
        ['assets/img/icons/React.png', 'React'],
        ['assets/img/icons/spring-3.svg', 'Spring Boot'],
        ['assets/img/icons/mysql.png', 'MySQL']
      ],
      url: 'https://catalogfront-production.up.railway.app/home',
      github: ''
    },
    {
      name: 'LoyalSips',
      category: 'Plataforma de fidelización',
      year: '2023',
      role: 'Desarrollador Full Stack',
      description:
        'Sistema de administración para el sector de bares que mejora la experiencia del cliente mediante beneficios, descuentos y promociones.',
      metrics: ['Sector bares', 'Fidelización', 'Promociones'],
      images: [
        'assets/img/projects/loyalSips/ls0.png',
        'assets/img/projects/loyalSips/ls1.png',
        'assets/img/projects/loyalSips/ls2.png',
        'assets/img/projects/loyalSips/ls3.png',
        'assets/img/projects/loyalSips/ls4.png'
      ],
      tools: [
        ['assets/img/icons/vue.svg', 'Vue'],
        ['assets/img/icons/net.svg', '.NET'],
        ['assets/img/icons/boostrap.png', 'Bootstrap']
      ],
      url: 'https://loyalsips-44e19.web.app/login-register/sector-election',
      github: 'https://github.com/orgs/Aplicaciones-Web-Point-bar/repositories'
    },
    {
      name: 'Arquimentor',
      category: 'E-learning · Mentorías',
      year: '2023',
      role: 'Desarrollador Full Stack',
      description:
        'Plataforma de aprendizaje en línea para estudiantes de arquitectura y diseño, donde contactan con mentores personalizados.',
      metrics: ['E-learning', 'Mentorías 1:1'],
      images: [
        'assets/img/projects/arq.png',
        'assets/img/projects/arq0.png',
        'assets/img/projects/arq1.png',
        'assets/img/projects/arq2.png',
        'assets/img/projects/arq3.png'
      ],
      tools: [
        ['assets/img/icons/angular.png', 'Angular'],
        ['assets/img/icons/spring-3.svg', 'Spring Boot'],
        ['assets/img/icons/boostrap.png', 'Bootstrap']
      ],
      url: 'https://arquimentor-7e645.firebaseapp.com/login',
      github: 'https://github.com/leonardox-lh/arquimentor-platform'
    },
    {
      name: 'The Week Hack II',
      category: 'Evento · Ciberseguridad',
      year: '2024',
      role: 'Desarrollador Frontend',
      description:
        'Sitio web para The Week Hack II, un evento de ciberseguridad promovido por la rama IEEE de la UPC.',
      metrics: ['Evento IEEE', 'Landing & registro'],
      images: [
        'assets/img/projects/TWH/twh0.png',
        'assets/img/projects/TWH/twh1.png',
        'assets/img/projects/TWH/twh2.png'
      ],
      tools: [
        ['assets/img/icons/angular.png', 'Angular'],
        ['assets/img/icons/ts.png', 'TypeScript'],
        ['assets/img/icons/css.png', 'CSS']
      ],
      url: 'https://ieeecs-5ed30.web.app/home',
      github: 'https://github.com/leonardox-lh/IEEEcs-TWH2'
    },
    {
      name: 'Rikoton Chicken',
      category: 'Sitio corporativo',
      year: '2024',
      role: 'Desarrollador Frontend',
      description:
        'Sitio web para la empresa Rikoton Chicken: pedidos, promociones, locales y más.',
      metrics: ['WordPress', 'Delivery'],
      images: [
        'assets/img/projects/rikoton/riko1.png',
        'assets/img/projects/rikoton/riko2.png',
        'assets/img/projects/rikoton/riko3.png'
      ],
      tools: [['assets/img/icons/wordpress.svg', 'WordPress']],
      url: 'https://rikotonchicken.pe/',
      github: ''
    }
  ];
}
