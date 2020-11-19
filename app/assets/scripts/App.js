import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
alert('testing CWP!!!!!!!!');

new StickyHeader();

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

new MobileMenu();
// this global variable
let modal;

document.querySelectorAll('.open-modal').forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    // this import returns a promise
    // x represents the file we just loaded
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "modal" */ './modules/Modal')
        .then((x) => {
          // a new instance of the modal class is created and put into a global variable called modal
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log('error with the modal...'));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
