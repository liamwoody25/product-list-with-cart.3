const cartSubmit = document.querySelectorAll('.cart-btn');
const quanbtn = document.querySelectorAll('.quantity-content');
const insertBtn = document.querySelectorAll('.increase-btn');
const deleteBtn = document.querySelectorAll('.decrease-btn');
const cartImageHolder = document.querySelector('.cart-placeholder-content');

const cartProducts = [
      {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50,
       "inCart": 0
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50,
        "inCart": 0 
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50,
        "inCart": 0
     }
]


// this function sends an item to the cart

function addItemToCart(cartProduct,[i]) {
  let output = document.querySelectorAll('.quantity-output')[i];
  let result = Number(output.innerText) + 1;
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

  addProduct(cartProduct)
}





// this function removes an item from the cart

function removeItemFromCart(cartProduct,i) {
  const output = document.querySelectorAll('.quantity-output')[i];
  let result = Number(output.innerText) - 1
  let productItem = localStorage.getItem('addItemToCart');
  let cartPrice = Number(localStorage.getItem('totalPrice')) || 0;
    
  if (result < 0) {
    result = 0
    productItem = parseInt(productItem)

  // this line of code dcreases the number when the dcrease button is clicked
    localStorage.setItem('addItemToCart', productItem = 1)
    document.getElementById('cart-output').textContent = productItem = 1;
  } else {
    localStorage.setItem('addItemToCart', productItem - 1 )
    document.getElementById('cart-output').textContent - 1;
  }

  output.innerText = result

  if (result === 1) {
    quanbtn[i].style.display = 'none'
  }

  if (cartPrice < 0) {
    cartPrice = 0
  }

  localStorage.setItem('totalPrice', cartPrice -= cartProduct.price)
  

}



function updateCart() {
  let productItem = localStorage.getItem('addItemToCart');
  let items = localStorage.getItem('cartProductsInCart');
  let cartContainer = document.querySelector('.cart-content');
  let cartPrice = Number(localStorage.getItem('totalPrice')) || 0;

  items = JSON.parse(items)

  if (items && cartContainer) {
    cartContainer.innerHTML = ''
    Object.values(items).forEach(function(product){

  // this line of code creates the product item
   
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerHTML = '<i class="bi bi-x-circle"></i>'

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('product-price-container');

    const productName = document.createElement('p');
    productName.textContent = product.name;

    const priceQuan = document.createElement('div');
    priceQuan.classList.add('product-quantity');

    const cartQuan = document.createElement('span');
    cartQuan.textContent = `${product.inCart}x`;

    const priceContent = document.createElement('h4');
    priceContent.textContent = `$${product.inCart * product.price}`;

    const productPrice = document.createElement('h4');
    productPrice.textContent = `$${product.price}`;

    

    // this code displays the product item
    priceQuan.append(cartQuan, priceContent, productPrice);
    priceContainer.append(productName, priceQuan);

    removeBtn.addEventListener('click', function(){
      productItem.remove(removeBtn, priceContainer);
      if (items && cartContainer) {
        cartContainer.style.display = 'none' 
        cartImageHolder.style.display = 'block'
      } else {
       cartImageHolder.styled.display = 'flex'
      }

    })

    productItem.append(removeBtn, priceContainer);
    cartContainer.append(productItem)

    })
  }

  
    // this code shows the price of when the quantity button is clicked 

    const cartTotal = document.createElement('div');
    cartTotal.classList.add('cart-total-content');

    const cartHd = document.createElement('h4');
    cartHd.classList.add('order-total-text');
    cartHd.textContent = 'Order Total';

    const cartTitle = document.createElement('h2');
    cartTitle.textContent = `$${cartPrice.toFixed(2)}`;


    // this code displays the total price
    cartTotal.append(cartHd, cartTitle);
    cartContainer.append(cartTotal);


    if (items && cartContainer) {
      cartContainer.style.display = 'block'
      cartImageHolder.style.display = 'none'

    } else {
      cartContainer.style.display = 'none'
    }
  
  // console.log(items)

  if (productItem) {
    document.getElementById('cart-output').textContent = productItem;
  }
}

updateCart()



// this function is for sending multiple products to the cart

function addProduct(cartProduct) {
  let items = localStorage.getItem('cartProductsInCart');
  items = JSON.parse(items)
   
  if (items != null) {

    if (items[cartProduct.category] === undefined) {
      items = {
        ...items,
        [cartProduct.category]:cartProduct
      }

    }
    items[cartProduct.category].inCart += 1;
  } else {
      cartProduct.inCart = 1
      
      items = {
        [cartProduct.category]: cartProduct
      }

  }

  localStorage.setItem('cartProductsInCart', JSON.stringify(items))

  // console.log('my item is ', items)
}






// this function is for when the quantity button the product price shows 
function totalPrice(cartProduct) {
  // console.log('the cartprice', cartProduct.price)
  let cartprice = localStorage.getItem('totalPrice'); 
  // console.log('the cartprice is', cartprice)


  if (cartprice != null) {
    cartprice = parseFloat(cartprice)
    localStorage.setItem('totalPrice', cartprice + cartProduct.price)
  } else {
    localStorage.setItem('totalPrice', cartProduct.price)
  }
  
}






// this eventlistener shows that the cart button is being clicked

for (let i = 0; i < cartSubmit.length; i++) {
  cartSubmit[i].addEventListener('click', function(){
    addItemToCart(cartProducts[i],[i])
  })
}

// this eventlistener is for the increase button 

for (let i = 0; i < insertBtn.length; i++) {
  insertBtn[i].addEventListener('click', function(){
    addItemToCart(cartProducts[i],[i])
    totalPrice(cartProducts[i],[i])
    updateCart()
  })
}


// this eventlistener is for the decrease button

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(){
    removeItemFromCart(cartProducts[i],[i])
    updateCart()
  })
}





