// scriptPr.js

const numPersonsInput = document.querySelector('.numPersons');
const enterButton = document.querySelector('.enter');

let numPersons = 0;

const pricePerson = 1000;

document.querySelectorAll('.products').forEach(product => {
    product.style.pointerEvents = 'none'; 
    product.style.opacity = '0.5';
});

function setEnterButton() {
    const enterButton = document.querySelector('.enter'); 
    const numPersonsInput = document.querySelector('.numPersons');
    const errorMessage = document.querySelector('.error-message'); 


    enterButton.removeEventListener('click', handleButtonClick);
    
	
    enterButton.addEventListener('click', handleButtonClick);

    function handleButtonClick(e) {
    e.preventDefault(); 


    numPersons = parseInt(numPersonsInput.value); 

    if (!numPersons || numPersons < 1) {
        errorMessage.textContent = 'Please enter a valid number of persons.';
        return;
    }

    
    errorMessage.textContent = '';

    
    document.querySelectorAll('.products').forEach(product => {
        product.style.pointerEvents = 'auto';
        product.style.opacity = '1';
    });

    console.log(`Number of persons: ${numPersons} entered.`);
	}//HANDLE 

}


document.addEventListener('DOMContentLoaded', setEnterButton);





let previewContainer = document.querySelector('.products-preview');

let previewBox = document.querySelectorAll('.preview');

const cancelBtn = document.querySelector('.cancel');

cancelBtn.addEventListener('click', cancelCart);



document.querySelectorAll('.products-container .products').forEach(product =>{

	product.onclick = () =>{

		previewContainer.style.display = 'flex';

		let name = product.getAttribute('data-name');

		previewBox.forEach(preview =>{

			let target = preview.getAttribute('data-target');

			if(name == target){

				preview.classList.add('active');

				preview.querySelector('.cart').onclick = ()=>{

					addToCart(target);
				}
			};
		});
	};
}); // all this used to display the preview of the product



previewBox. forEach(close =>{

	close.querySelector('.fa-times').onclick = () =>{

		close.classList.remove('active');

		previewContainer.style.display = 'none';

	};

}); //all this to close preview adn put back to previuos state







// PRODUCTS
const products = [
    { id: 'p-1', title: 'Cucumber Dill Sandwich', price: 300, availableQuantity: 10, imgSrc:'images/cucumber.jpg'  },
    { id: 'p-2', title: 'Scrambled Egg & Ham Croissant Sandwich', price: 350, availableQuantity: 8, imgSrc:'images/croissant.jpg' },
    { id: 'p-3', title: 'Smoked Salmon Cream Cheese & Dill Sandwich', price: 350, availableQuantity: 5, imgSrc:'images/salmon1.jpg' },
    { id: 'p-4', title: 'Spinach & Feta Quiche', price: 200, availableQuantity: 15, imgSrc:'images/quiche1.jpg' },
    { id: 'p-5', title: 'Coronation Chicken Sandwich', price: 150, availableQuantity: 12, imgSrc:'images/coronation.jpeg' },
    { id: 'p-6', title: 'Bacon and Cheddar Cheese Croquette', price: 300, availableQuantity: 20, imgSrc:'images/croquette2.jpeg' },
	
	//SWEEETS
    { id: 'p-7', title: 'Vanilla & Cherry Cupcakes', price: 150, availableQuantity: 15, imgSrc:'images/cherry.jpg' },
    { id: 'p-8', title: 'Lemon Curd Tart', price: 250, availableQuantity: 10, imgSrc:'images/tart1.jpg' },
    { id: 'p-9', title: 'Strawberry Jam & Chantily Cream Filled Scones', price: 350, availableQuantity: 30, imgSrc:'images/scone.jpg' },
    { id: 'p-10', title: 'Chocolate Covered Strawberries', price: 300, availableQuantity: 20, imgSrc:'images/strawberry.webp' },
    { id: 'p-11', title: 'Fruit Cake', price: 200, availableQuantity: 20, imgSrc:'images/fruitcake.jpg' },
    { id: 'p-12', title: 'Fruit Skewers', price: 250, availableQuantity: 20, imgSrc:'images/skewer.jpg' },
	
	//DRINKS
	{ id: 'p-13', title: 'Blue Mountain Coffee', price: 150, availableQuantity: 20, imgSrc:'images/blueM.jpg' },
	{ id: 'p-14', title: 'English Breakfast', price: 150, availableQuantity: 20, imgSrc:'images/EB.webp' },
	{ id: 'p-15', title: 'Estate Darjeeling', price: 150, availableQuantity: 20, imgSrc:'images/ED.webp' },
	{ id: 'p-16', title: 'Earl Grey', price: 150, availableQuantity: 20, imgSrc:'images/EG.png' },
	{ id: 'p-17', title: 'Moroccan Mint', price: 150, availableQuantity: 20, imgSrc:'images/MMT.jpg' },
	{ id: 'p-18', title: 'Jasmine Green', price: 150, availableQuantity: 20, imgSrc:'images/JGT.webp' },
	{ id: 'p-19', title: 'Cherry Blossom', price: 150, availableQuantity: 20, imgSrc:'images/CB.jpg' },
	{ id: 'p-20', title: 'An Assortment of Caffeinated Teas', price: 150, availableQuantity: 20, imgSrc:'images/ACT.jpg' },
	{ id: 'p-21', title: 'Ginger Lemongrass', price: 150, availableQuantity: 20, imgSrc:'images/GLT.jpg' },
	{ id: 'p-22', title: 'Decaf Breakfast', price: 150, availableQuantity: 20, imgSrc:'images/DB.webp' },
	{ id: 'p-23', title: 'Chamomile Citrus', price: 150, availableQuantity: 20, imgSrc:'images/CCT.jpg' },
	{ id: 'p-24', title: 'Raspberry Nectar', price: 150, availableQuantity: 20, imgSrc:'images/RN.jpg' },
	{ id: 'p-25', title: 'Blueberry Merlot', price: 150, availableQuantity: 20, imgSrc:'images/blueL.webp' },
	{ id: 'p-26', title: 'An Assortment of Un-caffeinated Teas', price: 150, availableQuantity: 20, imgSrc:'images/ADT.jpg' },
	{ id: 'p-27', title: 'Prosecco', price: 350, availableQuantity: 15, imgSrc: 'images/prosec.webp' },
	{ id: 'p-28', title: 'Rose', price: 350, availableQuantity: 15, imgSrc:'images/rose.webp' },
	
	
];

let cart = [];
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    const activePreview = document.querySelector(`.preview[data-target="${productId}"]`);

    const quantitySelect = activePreview.querySelector('select');

    if (!quantitySelect) {
        console.error('Select element not found for product:', productId);
        return;
    }

    const quantity = parseInt(quantitySelect.value); 

    if (quantity > product.availableQuantity) {
        alert('Not enough quantity available!');
        return;
    }
	
	const totalPrice = pricePerson + (product.price * quantity);


    cart.push({ ...product, quantity: quantity, numPersons, id: product.id});
	
	
	
	const cartElement = document.getElementById('cart');
    const cartTable = cartElement.querySelector('.table');
	const tableBody = cartElement.querySelector('#cart-table-body');
	
    const numPersonsCell = document.querySelector('.num-persons');
	const costPersonsCell = document.querySelector('.cost-persons');
	
	const totalPerPerson = pricePerson * numPersons;
	numPersonsCell.innerText = numPersons;
	costPersonsCell.innerText = `$${totalPerPerson}`;
	
    const imgSrc = product.imgSrc; 
    const title = product.title;
    const price = product.price;
    const addItemId = cart.length; 

    const row = document.createElement('tr');
    row.id = `cart-item-${addItemId}`; 
    row.innerHTML = `
        <td align="left">
          <img align="left" src="${imgSrc}" width="50" height="50">
          <span>${title}</span>
        </td> 
        <td>${quantity}</td>
        <td>$${(price * quantity).toFixed(2)}</td>
        <td><button onclick="del('cart-item-${addItemId}', ${addItemId - 1})">Delete</button></td>
    `;
    tableBody.appendChild(row);
	
	product.availableQuantity -= quantity;

    console.log(`Added item with id: cart-item-${addItemId}`);
		
    
    updateCart();
	updateCartCounter();
}



function del(cartItemId, cartIndex) {
	
    console.log(`Deleting item with ID: ${cartItemId}`);
    removeFromCart(cartIndex); 
    updateCart();
    updateCartCounter();
}





function removeFromCart(cartIndex) {
    if (cartIndex < 0 || cartIndex >= cart.length) {
        console.error('Invalid cart index:', cartIndex);
        return;
    }

    const itemToRemove = cart[cartIndex];

    const availableProduct = products.find(p => p.id === itemToRemove.id);

	if (availableProduct) {
        availableProduct.availableQuantity += itemToRemove.quantity;
    } else {
        console.error('Original product not found for ID:', itemToRemove.id);
    }

    cart.splice(cartIndex, 1);

    const cartElement = document.getElementById('cart');
    const tableBody = cartElement.querySelector('#cart-table-body');
   
    const rows = tableBody.querySelectorAll('tr');
    const row = rows[cartIndex];

    if (row) {
        row.remove();
        console.log(`Removed row at index: ${cartIndex}`); 
    }

    updateCart();
    updateCartCounter();
}





// Function to update cart totals
function updateCart() {
    let subtotal = 0;
    let discount = 0; 
    let tax = 0;
    let total = 0;

    cart.forEach(item => {
        subtotal += (item.price * item.quantity);
    });
	subtotal += (numPersons* pricePerson);

   
    tax = subtotal * 0.1;
	discount = subtotal * 0.03;
    total = subtotal + tax - discount;

 
    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('discount').innerText = `$${discount.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;

}


function updateCartCounter() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.innerText = totalItems;
}




function openInvoice() {
    const modal = document.getElementById('modal');
    const closeModalBtn = modal.querySelector('.close');
    const confirmBtn = document.getElementById('confirm-btn');
    const cancelBtn = document.getElementById('cancel-btn');
	
    modal.classList.add('show'); 
    modal.style.display = 'block';

    confirmBtn.onclick = () => {
        let cartString = cart.map(item => `${item.title}|${item.quantity}|${item.price}`).join(';');
        localStorage.setItem('cart', cartString);
        localStorage.setItem('numPersons', numPersons);

        window.open("invoicePage.html", "_blank");

        modal.style.display = 'none'; 
    };

    cancelBtn.onclick = () => {
        modal.style.display = 'none';
    };

    closeModalBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
			modal.classList.remove('show'); 

        }
    };
}




function cancelCart() {
    const tableBody = document.querySelector('#cart-table-body');
    tableBody.innerHTML = '';


    // Clear the cart array
    cart = [];
	const numPersonsInput = document.querySelector('.numPersons');
    numPersonsInput.value = '';
	numPersons = 0;
	
	document.querySelector('.num-persons').innerText = '';
    document.querySelector('.cost-persons').innerText = '';
  
    
    updateCart();
	document.querySelectorAll('.products').forEach(product => {
    product.style.pointerEvents = 'none'; 
    product.style.opacity = '0.5'; 
	});
	setEnterButton();
	
	updateCartCounter();

}



 
function exitPage() {
			const modalEx = document.getElementById('modalEx');
			const closeModalEx = modalEx.querySelector('.closeEx');
			const confirmEx = document.getElementById('confirmEx');
			const cancelEx = document.getElementById('cancelEx');
			
			modalEx.classList.add('show'); 
			modalEx.style.display = 'block';

			confirmEx.onclick = () => {
				let cartString = cart.map(item => `${item.title}|${item.quantity}|${item.price}`).join(';');
				localStorage.setItem('cart', cartString);
				localStorage.setItem('numPersons', numPersons);

				window.open("loginPage.html", "_self");

				modalEx.style.display = 'none'; 
			};

			cancelEx.onclick = () => {
				//
				modalEx.style.display = 'none';
			};

			closeModalEx.onclick = () => {
				//
				modalEx.style.display = 'none';
			};

			window.onclick = (event) => {
				if (event.target == modal) {
					modalEx.style.display = 'none';
					modalEx.classList.remove('show');
				}
			};
}		









