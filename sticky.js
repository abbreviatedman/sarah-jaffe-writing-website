window.addEventListener('scroll', () => {
  const body = document.querySelector('body');
  const photoArea = document.querySelector('.photo-area');
  const navArea = document.querySelector('.nav-area');
  if (window.scrollY >= 60) {
    body.classList.add('sticky');
    navArea.classList.add('sticky');
    photoArea.classList.add('sticky');
  } else {
    body.classList.remove('sticky');
    navArea.classList.remove('sticky');
    photoArea.classList.remove('sticky');
  }
});
