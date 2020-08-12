import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dhafa Kurniawan | Web Developer',
  lang: 'id',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1zwV2bExH7l0vS0u78MQUDwMKjYMo3i7I/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.png',
    title: 'Kamisaha',
    info: 'Theme Wordpress untuk streaming Anime yang saya kembangkan dari nol. Mulai dari design, front-end, back-end semuanya saya kerjakan sendiri.',
    info2: '',
    url: '',
    repo: 'https://github.com/dhafagk/kamsamida', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.png',
    title: 'Twittard',
    info: 'A really simple Crud pakai Laravel 7, dengan mengusung konsep layaknya twitter. Dimana user bisa membuat, melihat, mengedit, dan menghapus tweet.',
    info2: '',
    url: '',
    repo: 'https://github.com/dhafagk/crud-laravel7', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/dhafagk',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dhafagk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
