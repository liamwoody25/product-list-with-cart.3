const cartSubmit = document.querySelectorAll('.cart-btn');
const quanbtn = document.querySelectorAll('.quantity-content');
const insertBtn = document.querySelectorAll('.increase-btn');
const deleteBtn = document.querySelectorAll('.decrease-btn');

// const cartProducts = [
//       {
//        "image": {
//             "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
//             "mobile": "./assets/images/image-waffle-mobile.jpg",
//             "tablet": "./assets/images/image-waffle-tablet.jpg",
//             "desktop": "./assets/images/image-waffle-desktop.jpg"
//        },
//        "name": "Waffle with Berries",
//        "category": "Waffle",
//        "price": 6.50,
//        "inCart": 0
//     },
//     {
//         "image": {
//             "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
//             "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
//             "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
//             "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
//         },
//         "name": "Vanilla Bean Crème Brûlée",
//         "category": "Crème Brûlée",
//         "price": 7.00,
//         "inCart": 0
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
//             "mobile": "./assets/images/image-macaron-mobile.jpg",
//             "tablet": "./assets/images/image-macaron-tablet.jpg",
//             "desktop": "./assets/images/image-macaron-desktop.jpg"
//         },
//         "name": "Macaron Mix of Five",
//         "category": "Macaron",
//         "price": 8.00,
//         "inCart": 0
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
//             "mobile": "./assets/images/image-tiramisu-mobile.jpg",
//             "tablet": "./assets/images/image-tiramisu-tablet.jpg",
//             "desktop": "./assets/images/image-tiramisu-desktop.jpg"
//         },
//         "name": "Classic Tiramisu",
//         "category": "Tiramisu",
//         "price": 5.50,
//         "inCart": 0
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
//             "mobile": "./assets/images/image-baklava-mobile.jpg",
//             "tablet": "./assets/images/image-baklava-tablet.jpg",
//             "desktop": "./assets/images/image-baklava-desktop.jpg"
//         },
//         "name": "Pistachio Baklava",
//         "category": "Baklava",
//         "price": 4.00,
//         "inCart": 0
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
//             "mobile": "./assets/images/image-meringue-mobile.jpg",
//             "tablet": "./assets/images/image-meringue-tablet.jpg",
//             "desktop": "./assets/images/image-meringue-desktop.jpg"
//         },
//         "name": "Lemon Meringue Pie",
//         "category": "Pie",
//         "price": 5.00,
//         "imCart": 0
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
//             "mobile": "./assets/images/image-cake-mobile.jpg",
//             "tablet": "./assets/images/image-cake-tablet.jpg",
//             "desktop": "./assets/images/image-cake-desktop.jpg"
//         },
//         "name": "Red Velvet Cake",
//         "category": "Cake",
//         "price": 4.50,
//         "inCart": 0
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
//             "mobile": "./assets/images/image-brownie-mobile.jpg",
//             "tablet": "./assets/images/image-brownie-tablet.jpg",
//             "desktop": "./assets/images/image-brownie-desktop.jpg"
//         },
//         "name": "Salted Caramel Brownie",
//         "category": "Brownie",
//         "price": 4.50,
//         "inCart": 0 
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
//             "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
//             "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
//             "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
//         },
//         "name": "Vanilla Panna Cotta",
//         "category": "Panna Cotta",
//         "price": 6.50,
//         "inCart": 0
//      }
// ]


// this function sends an item to the cart

function addItemToCart(i) {
  const output = document.querySelectorAll('#quantity-output')[i];
  const result = Number(output.innerText) + 1;
  let productItem = localStorage.getItem('addItemToCart');

  productItem = parseInt(productItem)
  if (result > 10) {
    result = 0;
  }

  output.innerText = result;

  quanbtn[i].style.display = 'block'

  if (productItem) {
    localStorage.setItem('addItemToCart', productItem + 1)
    document.getElementById('cart-output').textContent = productItem + 1;
  } else {
    localStorage.setItem('addItemToCart', 1)
    document.getElementById('cart-output').textContent = 1
  }
  

}





// this function removes an item from the cart

function removeItemFromCart(i) {
  const output = document.querySelectorAll('#quantity-output')[i];
  let result = Number(output.innerText) - 1
  let productItem = localStorage.getItem('removeItemFromCart');

  
  

  if (result < 0) {
    result = 0
  }

  output.innerText = result

  if (result === 0) {
    quanbtn[i].style.display = 'none'
    productItem = parseInt(productItem)
    localStorage.setItem('removeItemFromCart', 1)
    document.getElementById('cart-output').textContent = productItem -= 1;
  } else {
    localStorage.setItem('removeItemFromCart', 1 )
    document.getElementById('cart-output').textContent -= 1
  }

  // if (productItem) {
  //   localStorage.setItem('removeItem', productItem -1)
  //   document.getElementById('cart-output').textContent = productItem -1
  // } else {
  //   localStorage.setItem('removeItem', 1)
  //   document.getElementById('cart-output').textContent = 1
  // }

}



// this function is for sending multiple products to the cart








// this function is for when the quantity button the product price shows 






// this eventlistener shows that the cart button is being clicked

for (let i = 0; i < cartSubmit.length; i++) {
  cartSubmit[i].addEventListener('click', function(){
    addItemToCart(i)
  })
}

// this eventlistener is for the increase button 

for (let i = 0; i < insertBtn.length; i++) {
  insertBtn[i].addEventListener('click', function(){
    addItemToCart(i)
  })
}


// this eventlistener is for the decrease button

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(){
    removeItemFromCart(i)
  })
}





