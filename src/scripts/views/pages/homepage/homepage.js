import { createCardItemTemplate } from "../../templates/template-creator";

const items = [
  {
    name: 'Healthy noodle with spinach leaf',
    category: 'Makanan',
    priceBefore: 40000,
    priceAfter: 20000,
  },
  {
    name: 'Grilled chicken with vegetables',
    category: 'Makanan',
    priceBefore: 45000,
    priceAfter: 30000,
  },
  {
    name: 'Pasta with marinara sauce',
    category: 'Makanan',
    priceBefore: 50000,
    priceAfter: 35000,
  },
  {
    name: 'Vegetable salad with dressing',
    category: 'Makanan',
    priceBefore: 30000,
    priceAfter: 18000,
  },
  {
    name: 'Iced tea',
    category: 'Minuman',
    priceBefore: 15000,
    priceAfter: 10000,
  },
  {
    name: 'Lemonade',
    category: 'Minuman',
    priceBefore: 12000,
    priceAfter: 8000,
  },
  {
    name: 'Fruit smoothie',
    category: 'Minuman',
    priceBefore: 25000,
    priceAfter: 18000,
  },
  {
    name: 'Black coffee',
    category: 'Minuman',
    priceBefore: 10000,
    priceAfter: 7000,
  },
  {
    name: 'Potato chips',
    category: 'Snack',
    priceBefore: 10000,
    priceAfter: 7000,
  },
  {
    name: 'Chocolate bar',
    category: 'Snack',
    priceBefore: 8000,
    priceAfter: 5000,
  },
  {
    name: 'Cookies',
    category: 'Snack',
    priceBefore: 12000,
    priceAfter: 8000,
  },
  {
    name: 'Peanuts',
    category: 'Snack',
    priceBefore: 15000,
    priceAfter: 10000,
  },
];

const Homepage = {
  async render() {
    return `
      <div class="content homepage">
        <div class="content__management">
          <h2 class="content__heading">CWB Resto</h2>
          <div class="management">
            <nav class="management__navigation">
              <div class="management__navigation__tabs homepage">
                <input type="radio" id="all" name="tabs" checked>
                <label for="all">Semua</label>
                
                <input type="radio" id="food" name="tabs">
                <label for="food">Makanan</label>
                
                <input type="radio" id="beverage" name="tabs">
                <label for="beverage">Minuman</label>   
                
                <input type="radio" id="snack" name="tabs">
                <label for="snack">Snack</label>
              </div>
            </nav>

            <div class="management__contents">
              <div class="management__contents__1"></div>
              <div class="management__contents__2"></div>
              <div class="management__contents__3"></div>
              <div class="management__contents__4"></div>
            </div>
          </div>
        </div>

        <div class="content__info">
          <div class="content__info__header">
            <h3>Orders#1</h3>
            <div class="content__info__header__button">
              <button class="active">Dine In</button>
              <button>To Go</button>
              <button>Delivery</button>
            </div>
          </div>

          <div class="order-pay">
            <p class="order-pay__header__item">Item</p>
            <p class="order-pay__header__quantity">Qty</p>
            <p class="order-pay__header__price">Price</p>
          </div>

          <div class="pay-selection-button">
            <button><img src="./Frame 65.svg" /></button>
            <button><img src="./Frame 66.svg" /></button>
            <button><img src="./Frame 67.svg" /></button>
            <button><img src="./Frame 65.svg" /></button>
          </div>

          <div class="payment-detail">
            <div>
              <p class="payment-detail__info">Ongkir</p>
              <p class="payment-total">0</p>
            </div>

            <div>
              <p class="payment-detail__info">Pajak</p>
              <p class="payment-total">10 %</p>
            </div>

            <div>
              <p class="payment-detail__info">Diskon</p>
              <p class="payment-total">Rp. 0</p>
            </div>

            <div>
              <p class="payment-detail__info">Sub Total</p>
              <p class="payment-total">Rp. 120.000</p>
            </div>
          </div>

          <button>Lanjutkan Pembayaran</button>
        </div>

        <div class="popup-payment"></div>
      </div>
    `;
  },
 
  async afterRender() {
    const managementAllContents = document.querySelector('.management__contents__1');
    const managementFoodContents = document.querySelector('.management__contents__2');
    const managementBeverageContents = document.querySelector('.management__contents__3');
    const managementSnackContents = document.querySelector('.management__contents__4');
    const contentInfo = document.querySelector('.content__info');
    const orderPay = document.querySelector('.order-pay');

    items.forEach((item) => {
      managementAllContents.innerHTML += createCardItemTemplate(item);

      if (item.category === 'Makanan') {
        managementFoodContents.innerHTML += createCardItemTemplate(item);
      } else if (item.category === 'Minuman') {
        managementBeverageContents.innerHTML += createCardItemTemplate(item);
      } else if (item.category === 'Snack') {
        managementSnackContents.innerHTML += createCardItemTemplate(item);
      }
    });

    const addButtonsToCart = document.querySelectorAll('.card__header__button');
    addButtonsToCart.forEach((addButtonToCart) => {
      addButtonToCart.addEventListener('click', () => {
        const cardElement = addButtonToCart.parentElement.parentElement;
        const itemElement = cardElement.querySelector('.card__info__content__name');
        const existingItem = orderPay.querySelector(`[data-name="${itemElement.textContent}"]`);
    
        if (existingItem) {
          const orderPayQuantity = existingItem.nextElementSibling;
          let count = parseInt(orderPayQuantity.value);
          orderPayQuantity.value = count + 1;
        } else {
          const orderPayDetail = document.createElement('div');
          const orderPayQuantity = document.createElement('input');
          const orderPayPrize = document.createElement('p');
          const orderPayNote = document.createElement('input');
          const orderPayRemove = document.createElement('button');
    
          const initialPrice = parseInt(cardElement.querySelector('.card__info__price__after').textContent.replace(/\D/g, ''));
    
          orderPayDetail.setAttribute('data-name', itemElement.textContent);
          orderPayDetail.classList.add('order-pay__detail');
          orderPayDetail.innerHTML = `
            <img class="order-pay__detail__image" src="https://img.freepik.com/premium-photo/four-meat-pizza-composition-includes-four-types-meat-carbonade-chicken-cervelat-bacon-mozzarella-cheese-tomato-sauce-view-from-white-background-isolated_323569-203.jpg?ga=GA1.1.1872719977.1704454417&semt=ais_hybrid" alt="Healthy noodle" />
            <div>
              <p class="order-pay__detail__title">${itemElement.textContent}</p>
              <p class="order-pay__detail__subtitle">${initialPrice.toLocaleString()}</p>
            </div>
          `;
    
          orderPayQuantity.classList.add('order-pay__detail__quantity');
          orderPayQuantity.inputMode = 'numeric';
          orderPayQuantity.value = 1;
          orderPayQuantity.min = 1;
    
          orderPayPrize.classList.add('order-pay__detail__price');
          orderPayPrize.textContent = `Rp ${initialPrice.toLocaleString()}`;
    
          orderPayNote.classList.add('order-pay__detail__note');
          orderPayNote.placeholder = 'Catatan pesanan';
    
          orderPayRemove.classList.add('order-pay__detail__remove');
          orderPayRemove.innerHTML = '<img src="./Frame 67.svg" />';

          orderPayQuantity.addEventListener('input', (e) => {
            const quantity = parseInt(e.target.value) || 1;
            const totalPrice = initialPrice * quantity;
            orderPayPrize.textContent = `Rp ${totalPrice.toLocaleString()}`;
          });
    
          orderPay.append(orderPayDetail, orderPayQuantity, orderPayPrize, orderPayNote, orderPayRemove);
        }
      });
    });
    
  },
};
 
export default Homepage;
