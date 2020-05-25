document.querySelector('.header').innerHTML = `
  <section class="photo-area">
    <section class="photo-container">
      <img src="assets/sarah.jpg" class="photo"> 
    </section>
  </section>
  <section class="nav-area">
    <section class="name">
      <p>
        Sarah W. Jaffe
      </p>
    </section>
    <nav class="nav">
      <a href="./index.html" class="current menu-item index">Home</a>
      <a href="./clips.html" class="menu-item clips">Writing & Media</a>
      <a href="./contact.html" class="menu-item contact">Contact</a>
    </nav>
  </section>
`


document.querySelectorAll('.menu-item').forEach((menuItem, i) => {
  if (window.location.pathname.includes(menuItem.classList[menuItem.classList.length - 1])) {
    menuItem.classList.add('current');
  } else {
    menuItem.classList.remove('current');
  }

  if (window.location.pathname === '/' && i === 0) {
    menuItem.classList.add('current');
  }
})
