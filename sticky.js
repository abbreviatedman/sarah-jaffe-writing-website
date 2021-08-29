window.addEventListener('scroll', () => {
  const body = document.querySelector('body');
  const photoArea = document.querySelector('.photo-area');
  const navArea = document.querySelector('.nav-area');
    body.classList.add('sticky');
    navArea.classList.add('sticky');
    photoArea.classList.add('sticky');
  if (window.scrollY >= 20) {
  } else {
    body.classList.remove('sticky');
    navArea.classList.remove('sticky');
    photoArea.classList.remove('sticky');
  }
});
