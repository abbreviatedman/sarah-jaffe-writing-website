const body = document.querySelector('body');
const photoArea = document.querySelector('.photo-area');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    body.classList.add('sticky');
    nav.classList.add('sticky');
    photoArea.classList.add('sticky');
  } else {
    body.classList.remove('sticky');
    nav.classList.remove('sticky');

    photoArea.classList.remove('sticky');
  }
});

const clips = [
  {
    title: 'Motherhood is rough amirite',
    link: 'www.motherhood.com/sarah.html',
    photo: 'www.motherhood.com/photo.jpg',
  },
  {
    title: 'Motherhood is rough amirite',
    link: 'www.motherhood.com/sarah.html',
    photo: 'www.motherhood.com/photo.jpg',
  },
];

clips;
