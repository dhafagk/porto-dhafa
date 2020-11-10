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
  paragraphOne:
    'Nama lengkap saya Dhafa Gustiadi Kurniawan, seorang Web Developer yang semangat mempelajari hal baru. Fokus saya di back-end seperti PHP, Wordpress, dan framework-nya seperti Laravel. Tapi saya juga bisa front-end seperti Javascript atau Ajax. Dan saya juga bisa design UI/UX menggunakan Adobe XD / Figma.',
  paragraphTwo:
    'Sebenernya saya telah membuat website dari tahun 2017, tapi saya sempat berhenti karena suatu alasan dan sekarang akhirnya mulai lagi dari 0. Tujuan saya kali ini adalah untuk fokus belajar hal baru dan menggunakan ilmu itu menjadi sesuatu yang bermanfaat.',
  paragraphThree: 'Saya juga punya resume, silahkan di cek ya :)',
  resume: 'https://drive.google.com/file/d/1zwV2bExH7l0vS0u78MQUDwMKjYMo3i7I/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'empathy.png',
    title: 'Empathy Foundation',
    info: 'Website Charity yang dibuat menggunakan Wordpress.',
    info2: 'Tahun : 2020',
    url: 'http://empathyfoundation.id/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Mockup - 1.jpg',
    title: 'Kamisaha',
    info: 'Ini merupakan produk pertama saya yaitu Theme Wordpress khusus streaming Video / Anime.',
    info2: 'Tahun : 2020',
    url: 'https://kamisaha.net/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Kamisaha Docs',
    info: 'Website dokumentasi yang keluar bersama theme Kamisaha.',
    info2: 'Tahun : 2020',
    url: 'https://docs-kamisaha.netlify.app/',
    repo: 'https://github.com/dhafagk/kamisaha-docs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mynews.png',
    title: 'Mynews',
    info:
      'Theme Wordpress untuk berita. Ini merupakan Theme Wordpress pertama yang pernah saya buat saat PKL dulu.',
    info2: 'Tahun : 2017',
    url: 'http://news.myjejaring.com/',
    repo: 'https://github.com/dhafagk/mynews', // if no repo, the button will not show up
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
