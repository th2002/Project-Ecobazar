import { componentHeader } from "../component/header.js";
import { componentFooter } from "../component/footer.js";

import { getCartFromLocalStorage } from "../component/cookie.js";
import { getUserFromLocalStorage } from "../component/cookie.js";

componentHeader();
componentFooter();

var displayCart = () => {
    const cart = getCartFromLocalStorage()
    const cartModel = document.getElementById('displayCart');

    let htmlContent = "";
    // Hiển thị giỏ hàng trên giao diện
    for(let value of cart) {
        htmlContent += `<div class="flex flex-row items-center w-full h-[100px] gap-3">
                        <img class="object-cover h-[100px] w-[100px] basis-1/4" src="../${value.image.slice(29)}" alt="${value.name}">

                        <div class="basis-2/4">
                            <h4 class="text-sm  leading-[1.5]">${value.name}</h4>
                            <p class="text-xs font-semibold leding-[1.2]"><span class="text-content-500 leading-[1.5] font-normal">
                            ${value.quantity} x</span> $${value.price}</p>
                        </div>

                        <svg class="basis-1/4 icon_delete" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_629_6652)">
                            <path d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z" stroke="#CCCCCC" stroke-miterlimit="10"/>
                            <path d="M16 8L8 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 16L8 8" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_629_6652">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                    </div>`
    }  
    cartModel.innerHTML = htmlContent;

    // Tổng tiền và tổng sản phẩm
    const totalUI = document.getElementById('total');
    let total = cart.reduce((acc, item) => {
        return acc + Number(item.price * item.quantity)
    },0)
    totalUI.innerHTML = `<span class="leading-[1.5]">${cart.length} products</span>
                    <span class="font-semibold leading-[1.2]">$${total}</span>`;
}

// Show model cart
function showModelCart() {
    // render UI item to cart
    displayCart();
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

function goCart() {
    window.location.href = "./cart.html";
}

function goCheckOut() {
    window.location.href = "./checkout.html";
}

window.goCart = goCart;
window.goCheckOut = goCheckOut;
window.showModelCart = showModelCart;


const layoutItemProducts = document.getElementById("layoutItemProducts");
const layoutTotal = document.getElementById("layoutTotal");
// get cart from local storage
function getItemFromLocalStorage() {
  var cart = getCartFromLocalStorage();

  let layoutItem = "";
  for (let value of cart) {
    layoutItem += `<div class="rowItemProducts flex flex-row items-center w-full">
                        <p class="hidden idProducts">${value.id}</p>
                        <img
                          src="../${value.image.slice(29)}"
                          alt="${value.name}"
                          class="imgProducts w-[60px] basis-1/4 object-cover" />
                        <p
                          class="text-sm font-normal text-content-900 basis-2/4">
                          <span class="nameProducts">${
                            value.name
                          }</span> x <span class="quantityProducts">${
      value.quantity
    }</span>
                        </p>
                        <div class="text-right basis-1/4">
                          <p class="text-sm font-medium text-content-900">
                            $ <span class="priceProducts">${
                              Number(value.price) * value.quantity
                            }</span>
                          </p>
                        </div>
                      </div>`;
  }

  layoutItemProducts.innerHTML = layoutItem;

  // total price
  const subTotal = cart.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);

  layoutTotal.innerHTML = `<div
                        class="flex items-center justify-between py-4 mt-3 text-sm">
                        <span class="text-content-700">Subtotal</span>
                        <span class="font-medium text-content-900">$${subTotal}</span>
                      </div>
                      <div
                        class="flex items-center justify-between py-4 text-sm border-t border-b">
                        <span class="text-content-700">Shipping:</span>
                        <span class="font-medium text-content-900">Free</span>
                      </div>
                      <div class="flex items-center justify-between py-4">
                        <span class="text-content-700">Total:</span>
                        <span id="totalBill" class="font-semibold text-content-900"
                          >$${subTotal}</span
                        >
                      </div>`;
}

getItemFromLocalStorage();

function getInfoUserLocal() {
  var user = getUserFromLocalStorage();

  document.getElementById("name").value = user[0].fullname;
  document.getElementById("phone").value = user[0].phone;
  document.getElementById("address").value = user[0].address;
}

getInfoUserLocal();

//
async function createBill(e) {
  e.preventDefault();

  const totalBill = document.getElementById("totalBill").innerText;

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const note = document.getElementById("note").value;

  const cash = document.getElementById("cash");
  const paypal = document.getElementById("paypal");
  const amazon = document.getElementById("amazon");

  var cart = await getCartFromLocalStorage();

  // get data bills to find id
  const response = await fetch("http://localhost:3000/bills");
  const bills = await response.json();
  // get the highest id in database
  const highestId = Math.max(...bills.map((bill) => bill.id));

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateCreated = `${day}/${month}/${year}`;

  const dataBill = {
    id: highestId + 1,
    customer: name,
    phone: phone,
    address: address,
    notes: note || "",
    totalMoney: totalBill,
    paymentMethod: cash.checked ? "cash" : paypal.checked ? "paypal" : "amazon",
    dateCreated: dateCreated,
    status: "not delivery",
  };

  // Form validate
   function showErrorAlert(fieldName) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: `${fieldName} cannot be left blank`,
    });
  }

  function validateInput(fieldValue, fieldName) {
    if (fieldValue === "") {
      showErrorAlert(fieldName);
      return false;
    }
    return true;
  }

  if (
    !validateInput(name, "Name") ||
    !validateInput(phone, "Phone") ||
    !validateInput(address, "Address") 
  ) {
    return false;
  }

  if (phone.length < 10 || phone.length > 11) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Phone number must be 10 or 11 numbers",
    });
    return false;
  }

  if (cash.checked === false && paypal.checked === false && amazon.checked === false) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Please choose payment method",
    });
    return false;
  }

  // Post to bills
  await fetch("http://localhost:3000/bills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBill),
  })
    .then((response) => response.json())
    .then((data) => {
      const rowItemProducts = document.querySelectorAll(".rowItemProducts");
      const idProducts = document.querySelectorAll(".idProducts");
      const nameProducts = document.querySelectorAll(".nameProducts");
      const imgProducts = document.querySelectorAll(".imgProducts");
      const quantityProducts = document.querySelectorAll(".quantityProducts");
      const priceProducts = document.querySelectorAll(".priceProducts");

      // post product to detail bill
      rowItemProducts.forEach(async (row, index) => {
        // get data detail bills detail to find id
        const resp = await fetch("http://localhost:3000/detail_bill");
        const detaliBills = await resp.json();
        // get the highest id in database
        const highestIdDetail = Math.max(
          ...detaliBills.map((detailBill) => detailBill.id)
        );

        const dataDetailBill = {
          id: highestIdDetail + 1,
          billId: highestId + 1,
          productId: Number(idProducts[index].textContent),
          price: Number(priceProducts[index].textContent),
          quantity: Number(quantityProducts[index].textContent),
          total: Number(quantityProducts[index].textContent) * Number(priceProducts[index].textContent),
        };

        await fetch("http://localhost:3000/detail_bill", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataDetailBill),
        })
      })

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Add bill success",
      });
      // localStorage.removeItem("cart");
    });
}

window.createBill = createBill;

document.addEventListener("DOMContentLoaded", function () {});
