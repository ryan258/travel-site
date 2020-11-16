class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector('.modal');
    this.closeIcon = document.querySelector('.modal__close');
    this.openModalButtons = document.querySelectorAll('.open-modal');
    this.events();
  }

  events() {
    // listen for open click
    this.openModalButtons.forEach((el) =>
      el.addEventListener('click', (event) => this.openTheModal(event))
    );
    // listen for closing click
    this.closeIcon.addEventListener('click', () => this.closeTheModal());
    // escape key closes modal
    document.addEventListener('keyup', (event) => this.keyPressHandler(event));
  }

  keyPressHandler(event) {
    if (event.keyCode == 27) {
      this.closeTheModal();
    }
  }

  openTheModal(event) {
    event.preventDefault();
    this.modal.classList.add('modal--is-visible');
  }

  closeTheModal(event) {
    this.modal.classList.remove('modal--is-visible');
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
    <div class="modal">
    <div class="modal__inner">
      <h2
        class="section-title section-title--blue section-title--less-margin"
      >
        <img src="assets/images/icons/mail.svg" class="section-title__icon" />
        Get in <strong>Touch</strong>
      </h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">
          We will have an online order system in place soon. Until then,
          connect with us on any of the platforms below!
        </p>
      </div>

      <div class="social-icons">
        <a href="#" class="social-icons__icon"
          ><img src="assets/images/icons/facebook.svg" alt="Facebook"
        /></a>
        <a href="#" class="social-icons__icon"
          ><img src="assets/images/icons/twitter.svg" alt="Twitter"
        /></a>
        <a href="#" class="social-icons__icon"
          ><img src="assets/images/icons/instagram.svg" alt="Instagram"
        /></a>
        <a href="#" class="social-icons__icon"
          ><img src="assets/images/icons/youtube.svg" alt="YouTube"
        /></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
    `
    );
  }
}
export default Modal;
