import {componentHeader} from "../component/header.js";
import {componentFooter} from "../component/footer.js";

import { getCartFromLocalStorage } from "../component/cookie.js";

componentHeader()
componentFooter()


const price = document.querySelector('.price')
const subTotal = document.querySelector('.subTotal')

async function valueInput(e) {
  
    // get current input value
    const inputValue = e.target.value;
    
    // regex to match only numbers
    const regex = /^[0-9]+$/; 

    if (!regex.test(inputValue)) {
        // remove last charcter from input value
        e.target.value = inputValue.replace(/[^0-9]/g, '');
    }

  const resp = await fetch(apiProduct + "/" + productId);
  const item = await resp.json();

  if(Number(inputValue) > Number(item.quantity)) {
    e.target.value = item.quantity;
  }
  if(inputValue == 0) {
    e.target.value = 1;
  }
    
}

async function handelBtnPlus() {
    let inputQuantity = document.getElementById('inputQuantity')
    if(inputQuantity.value === '') {
        inputQuantity.value = 1
    } else {
        const currentValue = parseInt(inputQuantity.value, 10);
        if (!isNaN(currentValue)) {
            inputQuantity.value = currentValue + 1;
        } else {
            // exception handling 
        }
    }

  const resp = await fetch(apiProduct + "/" + productId);
  const item = await resp.json();

  if(inputQuantity.value > item.quantity) {
    inputQuantity.value = item.quantity;
  }
}


function handelBtnSub()  {
    let inputQuantity = document.getElementById('inputQuantity')
    if(inputQuantity.value === '') {
        inputQuantity.value = '';
    } else {
        const currentValue = parseInt(inputQuantity.value, 10);
        if (!isNaN(currentValue)) {
            if(currentValue > 2) {
                inputQuantity.value = currentValue - 1;
            }else {
                inputQuantity.value = 1;
            }
        } else {
            // exception handling 
        }
    }
}
window.valueInput = valueInput;
window.handleBtnPlus = handelBtnPlus;
window.handleBtnSub = handelBtnSub;

// Show model cart
function showModelCart() {
    // render UI item to cart
    // displayCart();
  // Model cart
  const icon_ShowCart = document.getElementById("icon_ShowCart");
  const icon_close_ModelCart = document.getElementById("closeModelCart");
  const model_cart = document.getElementById("model_cart");

  icon_close_ModelCart.addEventListener("click", () => {
    model_cart.classList.add("hidden");
  });

  model_cart.addEventListener("click", (e) => {
    if (e.target === model_cart) {
      model_cart.classList.add("hidden");
    }
  });

  icon_ShowCart.addEventListener("click", () => {
    model_cart.classList.remove("hidden");
  });
};

window.showModelCart = showModelCart;

// get item from local storage
const contentForm = document.getElementById('contentForm');

function getItemFromLocalStorage() {
    // Layout cart
    const cart = getCartFromLocalStorage();
    let htmlContent = "";
    for(let value of cart) {
        htmlContent += `<tr class="h-[100px]">
                      <td class="flex flex-row items-center gap-4">
                        <img
                          src="../${value.image.slice(29)}"
                          alt="product"
                          class="w-[26.95%] h-[26.95%] object-cover" />
                        <span>${value.name}</span>
                      </td>
                      <td>$<span class="price">${value.price}</span></td>
                      <td>
                        <div
                          class="flex flex-row border rounded-full border-content-100 w-[108px] p-1">
                          <button onclick="handelBtnSub()"
                            class="btnSub w-[30px] h-[30px] rounded-full bg-[#F2F2F2]">
                            -
                          </button>
                          <input
                            class="inputQuantity text-center w-[40px] focus:border-0 focus:outline-none" value="${value.quantity}"/>
                          <button onlick="handelBtnPlus()"
                            class="btnPlus w-[30px] h-[30px] rounded-full bg-[#F2F2F2]">
                            +
                          </button>
                        </div>
                      </td>
                      <td>$<span class="subTotal">${Number(value.price) * value.quantity}</span></td>
                    </tr>`;
    }
    contentForm.innerHTML = htmlContent;

    // Layout total
    const layoutTotal = document.getElementById('layoutTotal');
    const subTotal = cart.reduce((total, item) => {
        return total + Number(item.price) * item.quantity;
    }, 0);
    layoutTotal.innerHTML = `<div class="flex items-center justify-between text-sm">
                      <span class="text-content-700">Subtotal</span>
                      <span class="font-medium text-content-900">$${subTotal}</span>
                    </div>
                    <div
                      class="flex items-center justify-between text-sm border-t border-b">
                      <span class="text-content-700">Shipping:</span>
                      <span class="font-medium text-content-900">Free</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-content-700">Total:</span>
                      <span class="font-semibold text-content-900">$${subTotal}</span>
                    </div>`
}

getItemFromLocalStorage();

function goCheckOut() {
    window.location.href = './checkout.html';
}

window.goCheckOut = goCheckOut;


