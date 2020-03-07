const makeClip = (titleText, linkSrc, publicationText, dateText, photoSrc) => `
  <section class="clip">
    <a class="clip-link" href="${linkSrc}" target="_blank">
      <section class="clip-main">
        <img class="clip-photo" src="${photoSrc}">
        <section class="clip-content">
          <p class="clip-title">${titleText}</p>
          <section class="clip-info">
            <p class="publication">${publicationText}</p>
            <p class="date">${dateText}</p>
          </section>
        <section>
      <section>
    </a>
  </section>
`


clips.forEach(({title, link, publication, date, photo}, i) => {
  const clipContainer = makeClip(
    title,
    link,
    publication,
    date,
    photo,
  )

  document.querySelector('.main').innerHTML += clipContainer;

  if (i !== clips.length - 1) {
    document.querySelector('.main').innerHTML += `<div class="hr"></div>`;
  }
})

