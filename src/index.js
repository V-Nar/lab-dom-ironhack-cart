// ITERATION 1

function updateSubtotal(products) {
  for (const product of products) {
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const subtotal = product.querySelector('.subtotal span');

    let priceValue = parseFloat(price.innerHTML);
    let quantityValue = parseInt(quantity.value);
    let getSubtotal = priceValue * quantityValue;
    subtotal.innerHTML = getSubtotal.toFixed(2);
  }
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  updateSubtotal(allProducts);

  // ITERATION 3
  const allSubtotals = document.querySelectorAll('.subtotal span');
  const total = document.querySelector('#total-value span');

  let totalValue = 0;
  for (const allSubtotal of allSubtotals) {
    let subtotalValue = parseFloat(allSubtotal.innerHTML);
    totalValue += subtotalValue;
  }

  total.innerHTML = totalValue.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // const newProductName = document.getElementById('new-name').value;
  // const newProductPrice = document.getElementById('new-price').value;
  // const table = document.getElementsByTagName('tbody');
  // const newRow = document.createElement('tr');
  // const newCell = document.createElement('td');
  // newCell.innerHTML += `<span>${newProductName}</span>`;
  // // newCell.appendChild(newText);
  // newRow.appendChild(newCell);
  // console.log(newRow);
  // table.appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtns = document.getElementsByClassName('btn-remove');
  for (const removeBtn of allRemoveBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  // const createProductBtn = document.getElementById('create');
  // createProductBtn.addEventListener('click', createProduct);
});
