


// Получите ссылки на необходимые элементы DOM
const cartElement = document.getElementById("cart");
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart");

// Создайте переменную для хранения товаров в корзине
let cartItems = [];

// Функция для добавления товара в корзину и отображения корзины
function addToCart(item) {
  cartItems.push(item);
  updateCart();
  showCart();
}

// Функция для обновления информации о корзине
function updateCart() {
  // Очистите список товаров в корзине
  cartItemsElement.innerHTML = "";

  // Добавьте каждый товар в список
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + item.price + " - Рублей" ;
    cartItemsElement.appendChild(li);
  });

  // Посчитайте итоговую стоимость товаров в корзине
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  cartTotalElement.textContent = totalPrice.toFixed(2) + " Рублей" ;
}

// Функция для показа корзины
function showCart() {
  cartElement.classList.remove("cart-hidden");
  cartElement.classList.add("cart-visible");
}

// Функция для скрытия корзины
function hideCart() {
  cartElement.classList.remove("cart-visible");
  cartElement.classList.add("cart-hidden");
}

// Функция для очистки корзины
function clearCart() {
  cartItems = [];
  updateCart();
  hideCart();
}

// Назначьте обработчик клика на кнопку "Очистить корзину"
clearCartButton.addEventListener("click", clearCart);




const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const doubleUpBtn = document.querySelector('.double-up-button')
const doubleDownBtn = document.querySelector('.double-down-button')
const sidebar = document.querySelector('.sidebar')
const conteiner = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

doubleUpBtn.addEventListener('click', () => {
    changeSlides('up', 2)
})

upBtn.addEventListener('click', () => {
    changeSlides('up', 1)
})

downBtn.addEventListener('click', () => {
    changeSlides('down', 1)
})

doubleDownBtn.addEventListener('click', () => {
    changeSlides('down', 2)
})

function changeSlides(direction, count) {
    if (direction === 'up') {
        activeSlideIndex -= count
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    } else if (direction === 'down') {
        activeSlideIndex += count
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }

    const height = conteiner.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}


