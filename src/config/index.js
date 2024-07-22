/* eslint-disable max-len */
import featuredProjects from './featured';
import projects from './projects';

module.exports = {
  email: 'bradleyhelphenstine9608@gmail.com',
  featuredProjects,
  projects,
  // skills: ['JavaScript', 'TypeScript', 'React Native', 'React', 'Next.js', 'GraphQL'],
  skills: {
    "Languages": ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS", "Tailwind CSS"],
    "Frameworks & Libraries": ["React.js", "Redux", "Vue.js", "Angular.js", "Three.js", "WebGL", "Bootstrap", "MUI", "AntD", "Chakra UI"],
    "Tools & Technologies": ["Figma", "Git", "Webpack", "JIRA", "Selenium", "Jest", "Agile", "Docker", "Jenkins", "Firebase", "Vercel", "Netlify"],
    "Design & Dev": ["Responsive Web Design", "UI/UX Best Practices", "Component-Based Architecture", "API Integration"]
  },
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/General-Bradley9608',
    },
    // {
    //   name: 'Linkedin',
    //   url: 'https://www.linkedin.com/in/jrgarciadev/',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/jrgarciadev',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/jrgarciadev',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Blog',
    //   url: 'https://blog.jrgarciadev.com',
    // },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },
};
