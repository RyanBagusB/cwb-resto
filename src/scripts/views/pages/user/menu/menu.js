const Menu = {
  async render() {
    return `
      <section class="carousel">
        <h1 class="carousel__header font-organetto">Enjoy delicious food</h1>
        <div class="carousel__slider">
          <div class="carousel__slider__container">
            <figure class="carousel__slider__container__item active" id="1">
              <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
              <figcaption>
                Get your 30% daily discount now
                <button>Get Your Dicount</button>
              </figcaption>
            </figure>
            
            <figure class="carousel__slider__container__item active" id="2">
              <img src="https://cdn0-production-images-kly.akamaized.net/hSeBOXCB-KjHC_0916jn3J95P6Y=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1697136/original/002803100_1504182506-amazingraze.s3.amazonaws.com1.jpg" alt="Delicious food with 30% discount" />
              <figcaption>
                Get your 30% daily discount now
                <button>Get Your Dicount</button>
              </figcaption>
            </figure>
            
            <figure class="carousel__slider__container__item active" id="3">
              <img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/93/2024/08/14/telur-puyuh-20220531-121025-1450890706.jpg" />
              <figcaption>
                Get your 30% daily discount now
                <button>Get Your Dicount</button>
              </figcaption>
            </figure>
          </div>
          <div class="carousel__slider__dots">
            <button class="active" data-target="1"></button>
            <button data-target="2"></button>
            <button data-target="3"></button>
          </div>
        </div>
      </section>

      <section class="category">
        <figure>
          <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
          <figcaption>
            Minuman
          </figcaption>
        </figure>
        
        <figure>
          <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
          <figcaption>
            Makanan
          </figcaption>
        </figure>

        <figure>
          <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
          <figcaption>
            Snack
          </figcaption>
        </figure>

        <figure>
          <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
          <figcaption>
            <p>Semua</p>
            <p>Menu</p>
          </figcaption>
        </figure>
      </section>

      <section class="category-item">
        <div class="category-item__navigation">
          <button class="font-organetto active">Rekomendasi</button>
          <button class="font-organetto">populer</button>
          <button class="font-organetto">koleksi</button>
        </div>
        <div class="category-item__container">
          <figure class="card">
            <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
            <figcaption>
              <button>Tempe Bacem</button>
              <div class="card__price">
                <img src="./money-icon.svg" />
                <p>Rp. 25.000</p>
              </div>
            </figcaption>
          </figure>
          
          <figure class="card">
            <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
            <figcaption>
              <button>Sate Telur Puyuh </button>
              <div class="card__price">
                <img src="./money-icon.svg" />
                <p>Rp. 25.000</p>
              </div>
            </figcaption>
          </figure>

          <figure class="card">
            <img src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
            <figcaption>
              <button>Bakwan Sayur</button>
              <div class="card__price">
                <img src="./money-icon.svg" />
                <p>Rp. 25.000</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const carouselContainer = document.querySelector('.carousel__slider__container');
    const carouselPaginations = document.querySelectorAll('.carousel__slider__dots button');

    this.initializePaginationButtons(carouselPaginations);
    this.syncPaginationWithScroll(carouselContainer);
    this.autoSlide(carouselContainer);
  },

  initializePaginationButtons(carouselPaginations) {
    carouselPaginations.forEach((carouselPagination) => {
      carouselPagination.addEventListener('click', () => {
        this.handlePaginationClick(carouselPagination);
      });
    });
  },

  handlePaginationClick(carouselPagination) {
    const target = carouselPagination.getAttribute('data-target');
    const targetElement = document.getElementById(target);

    this.removeActiveClassFromPagination();
    carouselPagination.classList.add('active');

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  },

  removeActiveClassFromPagination() {
    document.querySelector('.carousel__slider__dots button.active').classList.remove('active');
  },

  syncPaginationWithScroll(carouselContainer) {
    carouselContainer.addEventListener('scroll', () => {
      this.updatePaginationOnScroll(carouselContainer);
      this.resetAutoSlide();
    });
  },

  updatePaginationOnScroll(carouselContainer) {
    try {
      const carouselPaginationIndex = carouselContainer.scrollLeft / carouselContainer.clientWidth;
      const activePaginationButton = document.querySelectorAll('.carousel__slider__dots button')[Math.round(carouselPaginationIndex)];
      this.removeActiveClassFromPagination();
      activePaginationButton.classList.add('active');
      carouselContainer.querySelector('.carousel__slider__container__item.active').classList.remove('active');
      carouselContainer.children[Math.round(carouselPaginationIndex)].classList.add('active');
    } catch (error) {
      clearInterval(this.slideInterval);
    }
  },

  autoSlide(carouselContainer) {
    let slideInterval = setInterval(() => {
      const currentElement = carouselContainer.querySelector('.carousel__slider__container__item.active');
      const nextElement = currentElement.nextElementSibling 
      ? currentElement.nextElementSibling 
      : carouselContainer.firstElementChild;

      currentElement.classList.remove('active');
      nextElement.classList.add('active');

      this.scrollToItem(nextElement, carouselContainer);
      this.updatePaginationOnScroll(carouselContainer);
    }, 3000);

    this.slideInterval = slideInterval;
  },

  resetAutoSlide() {
    clearInterval(this.slideInterval);
    this.autoSlide(document.querySelector('.carousel__slider__container'));
  },

  scrollToItem(nextElement, carouselContainer) {    
    carouselContainer.scrollTo({
      left: nextElement.offsetLeft,
      behavior: 'smooth',
    });
  }
};

export default Menu;
