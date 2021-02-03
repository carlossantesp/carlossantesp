export const data = {
  info: {
    name: "Carlos Santillan",
    job: "Frontend Developer",
    email: "carlos.santesp@gmail.com",
    image: require("../images/self.png").default,
    description: [
      "Hi! I am Carlos, a Systems Engineer from Sucre, Bolivia.",
      "I love developing and implementing web sites and applications with a good user experience, facing new challenges and applying everything I have learned in high impact projects.",
    ],
    resume:
      "I am a web developer with more than 2 years of experience in frontend, I am passionate about designing and implementing responsive websites for each device, following the mobile-first methodology.",
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
  projects: [
    {
      id: "1",
      name: "My web portfolio",
      description:
        "My professional personal website, where my portfolio is displayed, was developed with react.",
      repo: "https://github.com/carlossantesp/carlossantesp",
      link: "https://carlos.santillan.dev",
      image: require("../images/projects/portfolio-web.png").default,
      technologies: ["HTML5", "CSS", "React", "StyledComponents"],
    },
    {
      id: "2",
      name: "Lading Page Doll",
      description:
        "DOLL informative web page, about Virtual Banking Made Easy, implemented with react.",
      repo: "https://github.com/carlossantesp/landingpage-doll",
      link: "https://ladingpage-doll.netlify.app/",
      image: require("../images/projects/ladinpage-doll.png").default,
      technologies: ["React", "StyledComponents", "Smoot-Scroll"],
    },
    {
      id: "3",
      name: "Social App",
      description:
        "Real-time social network implemented with Vue on the frontend and Laravel on the backend.",
      repo: "https://github.com/carlossantesp/socialapp",
      link: "https://github.com/carlossantesp/socialapp",
      image: require("../images/projects/red_social.png").default,
      technologies: ["HTML5", "Bootstrap", "Vuejs", "Laravel"],
    },
    {
      id: "4",
      name: "Simple my team page",
      description:
        "Team Page that shows information about a team from THE CREATIVE CREW, designed and implemented with Vuejs and SASS.",
      repo: "https://github.com/carlossantesp/team-page",
      link: "https://carlossantesp.github.io/team-page",
      image: require("../images/projects/my-team-page.png").default,
      technologies: ["HTML5", "SASS", "Vuejs", "AnimateJS"],
    },
    {
      id: "5",
      name: "Blog CMS",
      description:
        "CMS Blog showing user posts, developed with Laravel on the backend, with Bootstrap and Blade on the frontend.",
      repo: "https://github.com/carlossantesp/blog",
      link: "https://github.com/carlossantesp/blog",
      image: require("../images/projects/blog-cms.png").default,
      technologies: ["HTML5", "Bootstrap", "Blade", "Laravel"],
    },
    {
      id: "6",
      name: "Simple gallery page",
      description:
        "Gallery page that shows the user information and the photos I take, implemented with CSS grid and BEM.",
      repo: "https://github.com/carlossantesp/my-gallery",
      link: "https://carlossantesp.github.io/my-gallery",
      image: require("../images/projects/my-gallery.png").default,
      technologies: ["HTML5", "SASS", "CSS Grid", "BEM"],
    },
  ],
};
