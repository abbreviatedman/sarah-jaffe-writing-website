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
    title: 'Judge Judy’s Lifetime Achievement Is Teaching Us to Laugh at the Less Fortunate',
    link: 'www.motherhood.com/sarah.html',
    publication: 'Slate',
    date: 'June 26, 2018',
    photo: 'https://compote.slate.com/images/4a15fd6c-7453-4ae3-8517-343cefc46953.jpeg?width=780&height=520&rect=2188x1459&offset=0x335&s=image-390',
  },
  {
    title: 'Judge Judy’s Lifetime Achievement Is Teaching Us to Laugh at the Less Fortunate',
    link: 'www.motherhood.com/sarah.html',
    publication: 'Slate',
    date: 'June 26, 2018',
    photo: 'https://compote.slate.com/images/4a15fd6c-7453-4ae3-8517-343cefc46953.jpeg?width=780&height=520&rect=2188x1459&offset=0x335&s=image-390',
  },
];

const makeClip = function(titleText, linkSrc, publicationText, dateText, photoSrc) {
  const clipContainer = document.createElement('section');
  clipContainer.classList.add('clip');

  const link = document.createElement('a');
  link.href = linkSrc;
  link.classList.add('clip-link');

  const clipMain = document.createElement('section');
  clipMain.classList.add('clip-main');

  const photo = document.createElement('img');
  photo.src = photoSrc;
  photo.classList.add('clip-photo');

  clipMain.appendChild(photo);

  const clipContent = document.createElement('section');
  clipContent.classList.add('clip-content');
  
  const title = document.createElement('p');
  title.classList.add('clip-title');
  title.innerText = titleText;

  clipContent.appendChild(title);

  const clipInfo = document.createElement('section');
  clipInfo.classList.add('clip-info');

  const publication = document.createElement('p');
  publication.classList.add('publication');
  publication.innerText = publicationText;

  clipInfo.appendChild(publication);

  const date = document.createElement('p');
  date.classList.add('date');
  date.innerText = dateText;

  clipInfo.appendChild(date);

  clipContent.appendChild(clipInfo);

  clipMain.appendChild(clipContent);

  link.appendChild(clipMain);

  clipContainer.appendChild(link);

  const hr = document.createElement('div');
  hr.classList.add('hr');

  clipContainer.appendChild(hr);

  return clipContainer;
}

clips.forEach((clip) => {
  document.querySelector('.main').appendChild(makeClip(
    clip.title,
    clip.link,
    clip.publication,
    clip.date,
    clip.photo,
  ));
})
