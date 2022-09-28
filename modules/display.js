const Link = document.querySelector('#link');
const contactEl = document.querySelector('#contact-link');
const formLink = document.querySelector('#add-link');
const heading = document.querySelector('#heading-h1');
const formMenu = document.querySelector('#form-wrapper');
const listMenu = document.querySelector('#book-list');
const contactMenu = document.querySelector('#contact');

const refresh = () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'none';
  listMenu.style.display = 'block';
  heading.style.display = 'block';
};
window.onload = refresh();

contactEl.addEventListener('click', () => {
  contactMenu.style.display = 'block';
  formMenu.style.display = 'none';
  listMenu.style.display = 'none';
  heading.style.display = 'none';
  Link.style.color = '#000';
  contactEl.style.color = 'blue';
  formLink.style.color = '#000';
});

Link.addEventListener('click', () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'none';
  listMenu.style.display = 'block';
  heading.style.display = 'block';
  Link.style.color = 'blue';
  contactEl.style.color = '#000';
  formLink.style.color = '#000';
});

formLink.addEventListener('click', () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'block';
  listMenu.style.display = 'none';
  heading.style.display = 'none';
  Link.style.color = '#000';
  contactEl.style.color = '#000';
  formLink.style.color = 'blue';
});

export default refresh;
export {
  listMenu, Link, contactEl, formMenu, contactMenu, formLink, heading,
};
