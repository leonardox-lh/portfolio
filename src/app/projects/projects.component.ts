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
      time: 'Agosto 2023 — noviembre 2023',
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
      tools: [
        ["../../assets/img/icons/angular.png", "Angular"],
        ["../../assets/img/icons/spring-3.svg", "Spring Boot"],
        ["../../assets/img/icons/boostrap.png", "Boostrap"]
      ],
      url: "https://arquimentor-7e645.firebaseapp.com/login",
      github: "https://github.com/leonardox-lh/arquimentor-platform"
    },
    {
      name: 'LoyalSips',
      time: 'Agosto 2023 — noviembre 2023',
      description: 'Plataforma creada para mejorar el sistema de administration para el sector de bares y mejorar la experiencia del cliente por medio de beneficios como descuentos, y promociones.',
      images: [
        "../../assets/img/projects/loyalSips/ls0.png",
        "../../assets/img/projects/loyalSips/ls1.png",
        "../../assets/img/projects/loyalSips/ls2.png",
        "../../assets/img/projects/loyalSips/ls3.png",
        "../../assets/img/projects/loyalSips/ls4.png",
      ],
      tools: [
        ["../../assets/img/icons/vue.svg", "Vue"],
        ["../../assets/img/icons/boostrap.png", "Bootstrap"],
        ["../../assets/img/icons/.net.svg", ".Net"]
      ],
      url: "https://loyalsips-44e19.web.app/login-register/sector-election",
      github: "https://github.com/orgs/Aplicaciones-Web-Point-bar/repositories"
    },
    {
      name: 'The Week Hack II',
      time: 'Abril 2024 — Agosto 2024',
      description: "Páginas web para el evento The Week Hack II, un evento de ciberseguridad promovida por la IEEE de la UPC",
      images: [
        "../../assets/img/projects/TWH/twh0.png",
        "../../assets/img/projects/TWH/twh1.png",
        "../../assets/img/projects/TWH/twh2.png"
      ],
      tools: [
        ["../../assets/img/icons/angular.png", "Angular"],
        ["../../assets/img/icons/html.png", "Html"],
        ["../../assets/img/icons/css.png", "Css"],
        ["../../assets/img/icons/ts.png", "Typescript"],
      ],
      url: "https://ieeecs-5ed30.web.app/home",
      github: "https://github.com/leonardox-lh/IEEEcs-TWH2"
    },
    {
      name: 'Rikoton Chicken',
      time: 'Julio 2024 — Agosto 2024',
      description: "Página web para la empresa Rikoton Chicken, pedidos, promociones, locales y más.",
      images: [
        "../../assets/img/projects/rikoton/riko1.png",
        "../../assets/img/projects/rikoton/riko2.png",
        "../../assets/img/projects/rikoton/riko3.png",
      ],
      tools: [
        ["../../assets/img/icons/wordpress.svg", "Wordpress"]
      ],
      url: "https://rikotonchicken.pe/",
      github: ""
    }
  ]
}
