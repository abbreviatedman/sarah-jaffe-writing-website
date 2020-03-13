document.querySelector('.header').innerHTML = `
  <section class="photo-area">
    <section class="photo-container">
      <img src="sarah.gif" class="photo"> 
    </section>
  </section>
  <nav class="nav">
    <a href="./index.html" class="menu-item index">Home</a>
    <a href="./clips.html" class="menu-item clips">Clips</a>
    <a href="./contact.html" class="menu-item contact">Contact</a>
  </nav>
`

const pathname = window.location.pathname;
const start = pathname.includes('/')
  ? pathname.indexOf('/') + 1
  : 0;

const end = pathname.includes('.')
  ? pathname.lastIndexOf('.')
  : pathname.length;

const pageName = pathname.slice(start, end);


const clearCurrent = () => {
  document.querySelectorAll('.menu-item').forEach((menuItem) => {
    menuItem.classList.remove('current');
  })
}

document.querySelectorAll('.menu-item').forEach((menuItem) => {
  if (menuItem.classList.contains(pageName)) {
    menuItem.classList.add('current');
  } else {
    menuItem.classList.remove('current');
  }
})
