import { componentHeader } from "../component/header.js";
import { componentFooter } from "../component/footer.js";

import { getCartFromLocalStorage } from "../component/cookie.js";

componentHeader();
componentFooter();

ScrollReveal().reveal(".scrollCard", {
  delay: 300,
  easing: "ease-in",
  reset: true,
  distance: "100px",
});

const link_description = document.getElementById("link_description");
const link_review = document.getElementById("link_review");
const description = document.getElementById("description");
const infomation = document.getElementById("infomation");

// menu items
link_description.addEventListener("click", () => {
  description.classList.remove("hidden");
  description.classList.add("flex");
  link_description.classList.add("active_satus");

  link_review.classList.remove("active_satus");
  infomation.classList.remove("flex");
  infomation.classList.add("hidden");
});

link_review.addEventListener("click", () => {
  description.classList.remove("flex");
  description.classList.add("hidden");
  link_description.classList.remove("active_satus");

  link_review.classList.add("active_satus");
  infomation.classList.remove("hidden");
  infomation.classList.add("flex");
});

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
}

// fetch product details
const apiProduct = "http://localhost:3000/products";
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const layoutProductDetail = document.getElementById("layoutProductDetail");
let htmlContent = "";

async function getProductDetail() {
  const resp = await fetch(apiProduct + "/" + productId);
  const item = await resp.json();

  htmlContent += `<div class="basis-1/2">
                <p id="idProduct" class="hidden">${item.id}</p>
                <img id="productImage"
                  src="${item.images.slice(3)}"
                  alt="${item.name}"
                  class="object-cover w-full" />
              </div>

              <div class="flex flex-col basis-1/2">
                <div>
                  <h1 id="productName" class="text-4xl font-semibold text-content-900">
                    ${item.name}
                  </h1>

                  <div class="flex flex-row mt-3 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                        fill="#FF8A00" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                        fill="#FF8A00" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                        fill="#FF8A00" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                        fill="#FF8A00" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0176 13.7381 15.4883L12.7138 11.458C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9084 12.9129 10.8336L16.0933 8.18708C16.5106 7.83946 16.2958 7.1459 15.7586 7.11102L11.6056 6.84102C11.4938 6.83309 11.3866 6.79356 11.2964 6.72704C11.2061 6.66052 11.1367 6.56974 11.096 6.46527L9.5469 2.5649C9.50472 2.45405 9.42984 2.35864 9.33219 2.29132C9.23455 2.22401 9.11875 2.18796 9.00015 2.18796C8.88155 2.18796 8.76575 2.22401 8.6681 2.29132C8.57046 2.35864 8.49558 2.45405 8.4534 2.5649L6.90427 6.46527C6.86372 6.56985 6.79429 6.66074 6.70406 6.72737C6.61383 6.79399 6.50652 6.83361 6.39465 6.84158L2.24171 7.11158C1.70508 7.1459 1.48908 7.83946 1.90702 8.18708L5.0874 10.8342C5.17588 10.9089 5.2415 11.0071 5.27673 11.1175C5.31195 11.2278 5.31534 11.3458 5.28652 11.458L4.33702 15.1958C4.17558 15.8309 4.85115 16.3433 5.39452 15.9985L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z"
                        fill="#FF8A00" />
                    </svg>
                  </div>

                  <div>
                    <span class="text-xl line-through text-content-300"
                      >$${item.prince_sale / 1000 || ""}</span
                    >
                    <span id="productPrice" class="text-2xl font-medium text-success-dark"
                      >$${item.price / 1000}</span
                    >
                  </div>
                </div>

                <div class="flex flex-col gap-4 py-6 mt-5 border-t border-b">
                  <div class="flex flex-row items-center justify-between">
                    <div class="flex flex-row gap-3">
                      <p>Quantity:</p>
                      <span class="text-content-400">${item.quantity}</span>
                    </div>
                    <div class="flex flex-row items-center gap-2">
                      <p>Share item:</p>
                      <div
                        class="flex justify-center group/item1 items-center bg-white hover:bg-success cursor-pointer w-[40px] h-[40px] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none">
                          <g clip-path="url(#clip0_2205_10597)">
                            <path
                              class="group-hover/item1:fill-white"
                              d="M11.9981 2.98875H13.6414V0.12675C13.3579 0.08775 12.3829 0 11.2474 0C8.87813 0 7.25513 1.49025 7.25513 4.22925V6.75H4.64062V9.9495H7.25513V18H10.4606V9.95025H12.9694L13.3676 6.75075H10.4599V4.5465C10.4606 3.62175 10.7096 2.98875 11.9981 2.98875Z"
                              fill="#4D4D4D" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2205_10597">
                              <rect
                                class="group-hover/item1:fill-white"
                                width="18"
                                height="18"
                                fill="#4D4D4D" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div
                        class="flex justify-center group/item1 items-center bg-white hover:bg-success cursor-pointer w-[40px] h-[40px] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none">
                          <g clip-path="url(#clip0_2205_8753)">
                            <path
                              class="group-hover/item1:fill-white"
                              d="M18 3.41888C17.3306 3.7125 16.6174 3.90713 15.8737 4.00163C16.6388 3.54488 17.2226 2.82713 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95238 8.85938 6.22013C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63638 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1333C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64863 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16588 18 3.41888Z"
                              fill="#4D4D4D" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2205_8753">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div
                        class="flex justify-center group/item1 items-center bg-white hover:bg-success cursor-pointer w-[40px] h-[40px] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none">
                          <g clip-path="url(#clip0_2205_11871)">
                            <path
                              class="group-hover/item1:fill-white"
                              d="M17.982 5.29205C17.9398 4.33564 17.7852 3.67812 17.5636 3.10836C17.335 2.50359 16.9834 1.96213 16.5227 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03299 0C6.58916 0 6.28327 0.0105764 5.32329 0.0527447C4.36688 0.0949129 3.70936 0.249713 3.13975 0.471131C2.53483 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731077 2.50716 0.505951 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875658 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839946 12.7115C0.126163 13.6679 0.280963 14.3254 0.502517 14.8952C0.731077 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.5384 17.3038 3.13618 17.5288C3.70936 17.7504 4.36331 17.905 5.31986 17.9472C6.2797 17.9895 6.58573 17.9999 9.02956 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0277 11.4456 18.0277 9.00176C18.0277 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3223 13.5202 16.1747 13.9949 16.0516 14.3114C15.7491 15.0956 15.1268 15.7179 14.3426 16.0204C14.0261 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03657 16.3824C6.6349 16.3824 6.34659 16.372 5.40062 16.3297C4.52155 16.2911 4.04684 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39775 15.0568 2.16919 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71564 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71564 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.16919 3.31234 2.39775 2.95727 2.70021 2.66883C2.99195 2.36994 3.34358 2.14138 3.73395 1.99729C4.05042 1.87422 4.52869 1.72656 5.40419 1.68783C6.3536 1.64566 6.63847 1.63508 9.04 1.63508C11.4452 1.63508 11.73 1.64566 12.6759 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.3799 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3223 4.49731 16.3611 5.37295C16.4032 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4032 11.6917 16.3611 12.6411Z"
                              fill="#4D4D4D" />
                            <path
                              class="group-hover/item1:fill-white"
                              d="M9.03411 4.37781C6.48135 4.37781 4.41016 6.44886 4.41016 9.00176C4.41016 11.5547 6.48135 13.6257 9.03411 13.6257C11.587 13.6257 13.6581 11.5547 13.6581 9.00176C13.6581 6.44886 11.587 4.37781 9.03411 4.37781ZM9.03411 12.0012C7.37801 12.0012 6.03466 10.658 6.03466 9.00176C6.03466 7.34552 7.37801 6.00232 9.03411 6.00232C10.6903 6.00232 12.0335 7.34552 12.0335 9.00176C12.0335 10.658 10.6903 12.0012 9.03411 12.0012Z"
                              fill="#4D4D4D" />
                            <path
                              class="group-hover/item1:fill-white"
                              d="M14.9189 4.19496C14.9189 4.79109 14.4355 5.27445 13.8393 5.27445C13.2431 5.27445 12.7598 4.79109 12.7598 4.19496C12.7598 3.5987 13.2431 3.11548 13.8393 3.11548C14.4355 3.11548 14.9189 3.5987 14.9189 4.19496Z"
                              fill="#4D4D4D" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2205_11871">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div
                        class="flex justify-center group/item1 items-center bg-white hover:bg-success cursor-pointer w-[40px] h-[40px] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none">
                          <path
                            class="group-hover/item1:fill-white"
                            d="M9.24446 0C4.31112 0 1.6875 3.16139 1.6875 6.60855C1.6875 8.20724 2.58079 10.2008 4.01073 10.8331C4.22786 10.931 4.34599 10.8894 4.39437 10.688C4.43712 10.535 4.62501 9.79807 4.71614 9.45042C4.74426 9.33904 4.72964 9.24229 4.63963 9.13766C4.16486 8.58864 3.78797 7.58847 3.78797 6.65017C3.78797 4.24594 5.69943 1.91146 8.95195 1.91146C11.7646 1.91146 13.7323 3.73854 13.7323 6.35204C13.7323 9.30529 12.1696 11.3484 10.1389 11.3484C9.01495 11.3484 8.17792 10.4663 8.44343 9.37505C8.76407 8.07561 9.39297 6.6783 9.39297 5.74113C9.39297 4.90072 8.9182 4.20544 7.94841 4.20544C6.80423 4.20544 5.87606 5.33837 5.87606 6.85943C5.87606 7.82585 6.21808 8.47838 6.21808 8.47838C6.21808 8.47838 5.08628 13.0506 4.87589 13.9045C4.52038 15.3502 4.92427 17.6914 4.95915 17.8928C4.98052 18.0042 5.1054 18.0391 5.17516 17.9479C5.28654 17.8017 6.6546 15.8497 7.03824 14.4389C7.17775 13.9248 7.7504 11.84 7.7504 11.84C8.12729 12.5207 9.21521 13.0911 10.374 13.0911C13.8212 13.0911 16.312 10.0613 16.312 6.30141C16.2997 2.69675 13.2148 0 9.24446 0Z"
                            fill="#4D4D4D" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p class="text-sm text-content-500">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                      blandit vel consequat nec, ultrices et ipsum. Nulla varius
                      magna a consequat pulvinar.
                    </p>
                  </div>
                    </div>
                    <div
                  class="flex flex-row items-center gap-3 border-b border-content-100 py-[18px]">
                  <div
                    class="flex flex-row border rounded-full border-content-100 w-[108px] p-1">
                    <button onClick="handleBtnSub()" id="btnSub"
                      class=" w-[30px] h-[30px] rounded-full bg-[#F2F2F2]">
                      -
                    </button>
                    <input oninput="valueInput(event)"
                      id="inputQuantity" class="text-center w-[40px] focus:border-0 focus:outline-none" value="1" />
                    <button onClick="handleBtnPlus()" id="btnPlus"
                      class="w-[30px] h-[30px] rounded-full bg-[#F2F2F2]">
                      +
                    </button>
                  </div>

                  <button id="btnAddToCart" onClick="getItemLocalStorage()"
                    class="flex flex-row justify-center gap-3 items-center bg-success hover:bg-opacity-75 px-[40px] py-4 text-white font-semibold w-[420px] h-[50px] rounded-full">
                    Add to Cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none">
                      <path
                        d="M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333"
                        stroke="white"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </button>

                  <div
                    class="flex items-center cursor-pointer group/btn_heart justify-center w-[52px] h-[52px] rounded-full bg-[rgba(32,181,38,0.10)]">
                    <svg
                      class="group-hover/btn_heart:fill-[#2C742F]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M9.9996 17.5451C-6.66672 8.33336 4.99993 -1.66664 9.9996 4.65674C14.9999 -1.66664 26.6666 8.33336 9.9996 17.5451Z"
                        stroke="#2C742F"
                        stroke-width="1.5" />
                    </svg>
                  </div>
                </div>
                <div class="mt-6">
                  <p class="text-sm text-content-500">
                    <span class="font-medium text-content-900">Category:</span>
                    ${item.category}
                  </p>
                </div>    
                `;
  layoutProductDetail.innerHTML = htmlContent;
}

getProductDetail();

async function valueInput(e) {
  // get current input value
  const inputValue = e.target.value;

  // regex to match only numbers
  const regex = /^[0-9]+$/;

  if (!regex.test(inputValue)) {
    // remove last charcter from input value
    e.target.value = inputValue.replace(/[^0-9]/g, "");
  }

  const resp = await fetch(apiProduct + "/" + productId);
  const item = await resp.json();

  if (Number(inputValue) > Number(item.quantity)) {
    e.target.value = item.quantity;
  }
  if (inputValue == 0) {
    e.target.value = 1;
  }
}

async function handelBtnPlus() {
  let inputQuantity = document.getElementById("inputQuantity");
  if (inputQuantity.value === "") {
    inputQuantity.value = 1;
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

  if (inputQuantity.value > item.quantity) {
    inputQuantity.value = item.quantity;
  }
}

function handelBtnSub() {
  let inputQuantity = document.getElementById("inputQuantity");
  if (inputQuantity.value === "") {
    inputQuantity.value = "";
  } else {
    const currentValue = parseInt(inputQuantity.value, 10);
    if (!isNaN(currentValue)) {
      if (currentValue > 2) {
        inputQuantity.value = currentValue - 1;
      } else {
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

// Add to cart
const addToCart = (id, name, price, image, quantity) => {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  let inputQuantity = document.getElementById("inputQuantity");
  let product = cart.find((cartItem) => cartItem.name == name);
  if (product) {
    product.quantity += Number(inputQuantity.value);
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// update quantity icon cart
const updateQuantityIconCart = () => {
  const cart = getCartFromLocalStorage();
  const quantityCart = document.getElementById("quantityCart");
  const totalHeader = document.getElementById("totalHeader");

  const subTotal = cart.reduce((acc, item) => {
    return acc + Number(item.price * item.quantity);
  }, 0);

  quantityCart.innerText = cart.length;
  totalHeader.innerText = `$${subTotal}`;
};

// handle btn add to cart
const getItemLocalStorage = () => {
  // add item to local storage cart
  const idProduct = document.getElementById("idProduct").innerText;
  const productName = document.getElementById("productName").innerText;
  const price = document.getElementById("productPrice").innerText;
  const productPrice = price.slice(1);
  const productImage = document.getElementById("productImage").src;
  const quantity = Number(document.getElementById("inputQuantity").value);

  addToCart(idProduct, productName, productPrice, productImage, quantity);
  updateQuantityIconCart();
  // show toast
  iziToast.show({
    title: "Success",
    titleColor: "white",
    message: "Add to cart successfully",
    backgroundColor: "#00B207",
    messageColor: "white",
    position: "topRight",
    timeout: 2000,
  });
};

// handle button delete product from cart
const handleBtnDeleteProduct = (id) => {
  const cart = getCartFromLocalStorage();
  const cartAfterDelete = cart.filter((item) => item.id != id);
  localStorage.setItem("cart", JSON.stringify(cartAfterDelete));
  updateQuantityIconCart();
  displayCart();
};

var displayCart = () => {
  const cart = getCartFromLocalStorage();
  const cartModel = document.getElementById("displayCart");

  let htmlContent = "";
  // Hiển thị giỏ hàng trên giao diện
  for (let value of cart) {
    htmlContent += `<div class="flex flex-row items-center w-full h-[100px] gap-3">
                        <img class="object-cover h-[100px] w-[100px] basis-1/4" src="../${value.image.slice(
                          29
                        )}" alt="${value.name}">

                        <div class="basis-2/4">
                            <h4 class="text-sm  leading-[1.5]">${
                              value.name
                            }</h4>
                            <p class="text-xs font-semibold leding-[1.2]"><span class="text-content-500 leading-[1.5] font-normal">
                            ${value.quantity} x</span> $${value.price}</p>
                        </div>

                        <span onclick="handleBtnDeleteProduct(${
                          value.id
                        })" class="cursor-pointer">
                          <svg class="basis-1/4 icon_delete cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                        </span>
                    </div>`;
  }
  cartModel.innerHTML = htmlContent;

  // Tổng tiền và tổng sản phẩm
  const totalUI = document.getElementById("total");
  let total = cart.reduce((acc, item) => {
    return acc + Number(item.price * item.quantity);
  }, 0);
  totalUI.innerHTML = `<span class="leading-[1.5]">${cart.length} products</span>
                    <span class="font-semibold leading-[1.2]">$${total}</span>`;
};

displayCart();
window.showModelCart = showModelCart;
window.addToCart = addToCart;
window.getItemLocalStorage = getItemLocalStorage;
window.handleBtnDeleteProduct = handleBtnDeleteProduct;

function goCart() {
  window.location.href = "./cart.html";
}

function goCheckOut() {
  window.location.href = "./checkout.html";
}

window.goCart = goCart;
window.goCheckOut = goCheckOut;
// localStorage.removeItem("cart");
