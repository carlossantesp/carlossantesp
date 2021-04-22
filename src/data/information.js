export const data = {
  info: {
    en: {
      name: "Carlos Santillan",
      job: "Frontend Developer",
      email: "carlos.santesp@gmail.com",
      image: require("../images/self.png").default,
      description: [
        "Hi! I am Carlos a Systems Engineer from Sucre, Bolivia.",
        "I love developing and implementing web sites and applications with a good user experience, facing new challenges and applying everything I have learned in high impact projects.",
      ],
      resume:
        "I am a web developer with more than 2 years of experience in frontend, I am passionate about designing and implementing responsive websites for each device, following the mobile-first methodology.",
      linkResume:
        "https://drive.google.com/file/d/1JyK_uNwL0wHpCvs0gwSvo3lesq9FJeSm/view?usp=sharing",
    },
    es: {
      name: "Carlos Santillan",
      job: "Desarrollador Frontend",
      email: "carlos.santesp@gmail.com",
      image: require("../images/self.png").default,
      description: [
        "Hola! Soy Carlos un Ingeniero de Sistemas de Sucre, Bolivia",
        "Me encanta desarrollar e implementar sitios y aplicaciones web con una buena experiencia de usuario, afrontar nuevos retos y aplicar todo lo aprendido en proyectos de alto impacto.",
      ],
      resume:
        "Soy un desarrollador web con más de 2 años de experiencia en frontend, me apasiona diseñar e implementar sitios web responsivos para cada dispositivo, siguiendo la metodología mobile-first.",
      linkResume:
        "https://drive.google.com/file/d/1p45l0LsdByhut1yrngPV83uwRItfZDwi/view?usp=sharing",
    },
  },
  socials: {
    email: "carlos.santesp@gmail.com",
    github: "https://github.com/carlossantesp",
    codepen: "https://codepen.io/csantillan",
    linkedin: "https://www.linkedin.com/in/dev-santillan-carlos",
    facebook: "https://www.facebook.com/C.Santi.E",
  },
  skills: [
    {
      icon: require("../images/skills/skill_html5.svg").default,
      title: "HTML5",
    },
    {
      icon: require("../images/skills/skill_css3.svg").default,
      title: "CSS3",
    },
    {
      icon: require("../images/skills/skill_javascript.svg").default,
      title: "Javascript",
    },
    {
      icon: require("../images/skills/skill_react.svg").default,
      title: "ReactJS",
    },
    {
      icon: require("../images/skills/skill_git.svg").default,
      title: "Git",
    },
    {
      icon: require("../images/skills/skill_github.svg").default,
      title: "Github",
    },
    {
      icon: require("../images/skills/skill_sass.svg").default,
      title: "Sass",
    },
    {
      icon: require("../images/skills/skill_figma.svg").default,
      title: "Figma",
    },
    {
      icon: require("../images/skills/skill_bootstrap.svg").default,
      title: "Bootstrap",
    },
    {
      icon: require("../images/skills/skill_tailwindcss.svg").default,
      title: "Tailwind",
    },
    {
      icon: require("../images/skills/skill_linux.svg").default,
      title: "Linux",
    },
  ],
  projects: {
    en: [
      {
        id: "1",
        name: "My web portfolio",
        description:
          "This project is a web personal, where I show my skills and projects developed.",
        repo: "https://github.com/carlossantesp/carlossantesp",
        link: "https://carlos.santillan.dev",
        image: require("../images/projects/myportfolio.png").default,
      },
      {
        id: "2",
        name: "Pexabay app",
        description:
          "This project is a Pixabay's inspiration, this are images searcher where use the Pixabay API.",
        repo: "https://github.com/carlossantesp/pexabay-react",
        link: "https://pexabay-react-app.netlify.app/",
        image: require("../images/projects/pexabay.png").default,
      },
      {
        id: "3",
        name: "Patient management",
        description:
          "This project is a web application for the patient attention registration (pets) for the veterinaria.",
        repo: "https://github.com/carlossantesp/admin-pacientes-mascotas",
        link: "https://admin-pacientes-mascotas-react.netlify.app/",
        image: require("../images/projects/atencion_mascotas.png").default,
      },
      {
        id: "4",
        name: "Edwyn's Portfolio",
        description:
          "Edwyn is a creative and organized Frontend Developer. This is directly reflected in your web portfolio.",
        repo: "https://github.com/carlossantesp/portafolio-edwin",
        link: "https://portafolio-edwyn-cse.netlify.app/",
        image: require("../images/projects/edwyn.png").default,
      },
      {
        id: "5",
        name: "DOLL's Lading Page",
        description:
          "This project is a landing page about Virtual Banking Made Easy for the DOLL entity.",
        repo: "https://github.com/carlossantesp/landingpage-doll",
        link: "https://ladingpage-doll.netlify.app/",
        image: require("../images/projects/doll.png").default,
      },
      {
        id: "6",
        name: "Weather App",
        description:
          "This project is a weather application where it searchs data the weather from Openweathermap's API.",
        repo: "https://github.com/carlossantesp/clima-app-react",
        link: "https://clima-app-react-cse.netlify.app/",
        image: require("../images/projects/weather.png").default,
      },
    ],
    es: [
      {
        id: "1",
        name: "Mi portafolio web",
        description:
          "Este proyecto es una web personal, donde muestro mis habilidades y proyectos desarrollados.",
        repo: "https://github.com/carlossantesp/carlossantesp",
        link: "https://carlos.santillan.dev",
        image: require("../images/projects/myportfolio.png").default,
      },
      {
        id: "2",
        name: "Aplicación Pexabay",
        description:
          "Este proyecto es una inspiración de Pixabay, este es un buscador de imágenes donde se usa la API de Pixabay",
        repo: "https://github.com/carlossantesp/pexabay-react",
        link: "https://pexabay-react-app.netlify.app/",
        image: require("../images/projects/pexabay.png").default,
      },
      {
        id: "3",
        name: "Administración de pacientes",
        description:
          "Este proyecto es una aplicación web para el registro de atención al paciente (mascotas) de la veterinaria.",
        repo: "https://github.com/carlossantesp/admin-pacientes-mascotas",
        link: "https://admin-pacientes-mascotas-react.netlify.app/",
        image: require("../images/projects/atencion_mascotas.png").default,
      },
      {
        id: "4",
        name: "Portafolio de Edwyn",
        description:
          "Edwyn es un desarrollador frontend creativo y organizado. Esto se refleja directamente en su portafolio web.",
        repo: "https://github.com/carlossantesp/portafolio-edwin",
        link: "https://portafolio-edwyn-cse.netlify.app/",
        image: require("../images/projects/edwyn.png").default,
      },
      {
        id: "5",
        name: "Lading page DOLL",
        description:
          "Este proyecto es una página de aterrizaje sobre Banca Virtual Made Easy para la entidad DOLL.",
        repo: "https://github.com/carlossantesp/landingpage-doll",
        link: "https://ladingpage-doll.netlify.app/",
        image: require("../images/projects/doll.png").default,
      },
      {
        id: "6",
        name: "Aplicación del Clima",
        description:
          "Este proyecto es una aplicación del clima en la que busca datos meteorológicos desde la API de Openweathermap.",
        repo: "https://github.com/carlossantesp/clima-app-react",
        link: "https://clima-app-react-cse.netlify.app/",
        image: require("../images/projects/weather.png").default,
      },
    ],
  },
};
