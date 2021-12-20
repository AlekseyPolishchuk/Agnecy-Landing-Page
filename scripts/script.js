// Плавная прокрутка якоря
const anchors = document.querySelectorAll('.header .nav-link');
for (let item of anchors) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
