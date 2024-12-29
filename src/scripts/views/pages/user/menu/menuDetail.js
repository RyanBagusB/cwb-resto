const MenuDetail = {
  async render() {
    return `
      <section class="menu-detail">
        <div class="carousel__slider">
          <div class="carousel__slider__container">
            <img class="carousel__slider__container__item active" src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />

            <img class="carousel__slider__container__item" src="https://cdn0-production-images-kly.akamaized.net/EAbi53ClPFWop0gOwkZQS0J9Rjc=/1x135:1000x698/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4703886/original/010040500_1704118595-shutterstock_2290464261.jpg" alt="Delicious food with 30% discount" />
          </div>
          <div class="carousel__slider__dots">
            <button class="active" data-target="1"></button>
            <button data-target="2"></button>
          </div>
        </div>

        <div class="menu-detail-content">
          <div class="menu-detail-content__info">
            <h2>Sate Telur Puyuh</h2>
            <div class="menu-detail-content__info__price">
              <img src="./money-icon.svg" />
              <p>Rp. 25.000</p>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          </div>
          <button>Tambah ke keranjang</button>
        </div>
      </section>
    `;
  },

  async afterRender() {
    
  },
};

export default MenuDetail;
