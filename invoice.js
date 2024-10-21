// INVOICE Date
function displayDate() {
    const dateElement = document.getElementById("current-date");
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    dateElement.textContent = formattedDate;
}

window.onload = displayDate;

//Table
document.addEventListener('DOMContentLoaded', () => {
    const cartString = localStorage.getItem('cart') || '';
    const numPersons = localStorage.getItem('numPersons') || 0;
	const pricePerson = 1000; 

    const tableBody = document.querySelector('#cart-table-body');
    const numPersonsCell = document.querySelector('.num-persons');
	const costPersonsCell = document.querySelector('.cost-persons');
    let subtotal = 0;
	
	const totalPerPerson = pricePerson * numPersons;
	numPersonsCell.innerText = numPersons;
	costPersonsCell.innerText = `$${totalPerPerson}`;

    // Split the string into individual items
    const cartItems = cartString.split(';');

    cartItems.forEach(item => {
        if (item.trim() === "") return; // Skip empty items
        const [title, quantityStr, priceStr] = item.split('|');
        const quantity = parseInt(quantityStr, 10);
        const price = parseFloat(priceStr);

        subtotal += price * quantity;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${quantity}</td>
            <td>$${(price * quantity).toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Add person price to subtotal
    
    subtotal += pricePerson * numPersons;

    updateInvoiceTotals(subtotal);
});

// Function to update invoice totals
function updateInvoiceTotals(subtotal) {
    const tax = subtotal * 0.1;
    const discount = subtotal * 0.03;
    const total = subtotal + tax - discount;

    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('discount').innerText = `$${discount.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}


//CANCEL
document.addEventListener('DOMContentLoaded', () => {
    const cancelButton = document.querySelector('.cancel'); 
    cancelButton.addEventListener('click', cancelInvoice);
});



function cancelInvoice() {
    const modal = document.getElementById('modal');
    const closeModalBtn = modal.querySelector('.close');
    const confirmBtn = document.getElementById('confirm-btn');
    const cancelBtn = document.getElementById('cancel-btn');
	
    modal.classList.add('show'); 
    modal.style.display = 'block';

    confirmBtn.onclick = () => {

				window.open("productsPage.html", "_self");

				modalEx.style.display = 'none'; 
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


function exitPage() {
	const modalEx = document.getElementById('modalEx');
	const closeModalEx = modalEx.querySelector('.closeEx');
	const confirmEx = document.getElementById('confirmEx');
	const cancelEx = document.getElementById('cancelEx');
	
	modalEx.classList.add('show'); 
	modalEx.style.display = 'block';

	confirmEx.onclick = () => {
		window.open("loginPage.html", "_self");
			modalEx.style.display = 'none'; 
	};
	cancelEx.onclick = () => {
		//Nothing
		modalEx.style.display = 'none';
	};

	closeModalEx.onclick = () => {
		//Nothing
		modalEx.style.display = 'none';
	};

	window.onclick = (event) => {
		if (event.target == modal) {
			modalEx.style.display = 'none';
			modalEx.classList.remove('show');
		}
	};
}