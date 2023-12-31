import { getCartFromLocalStorage } from './cookie.js'
import { getUserFromLocalStorage } from './cookie.js'
const user = getUserFromLocalStorage();
function logOut() {
    localStorage.removeItem('user');
    window.location.href = './signIn.html';
}

window.logOut = logOut;



export function componentHeader() {
    document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('header')
    const cart = getCartFromLocalStorage();
    const subTotal = cart.reduce((acc,item) => {
    return acc + Number(item.price * item.quantity)
    },0)
    header.innerHTML = `<div class="fixed top-0 left-0 right-0 z-40 py-3 shadow-lg bg-content-800 Small-one">
                    <div class="flex flex-row items-center px-[200px]">
                        <div class="flex basis-3/4">
                            <div class="flex items-center justify-star basis-full">
                                <svg class="w-4 h-5 mr-4 cursor-pointer" viewBox="0 0 17 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="Map Pin">
                                        <path id="Vector"
                                            d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z"
                                            stroke="#999" stroke-linecap="round" stroke-linejoin="round" />
                                        <path id="Vector_2"
                                            d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z"
                                            stroke="#999" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                                <address>
                                    <p class="text-xs cursor-pointer text-content-400">Store Location: Lincoln- 344,
                                        Illinois,
                                        Chicago,
                                        USA</p>
                                </address>
                            </div>
                        </div>

                        <div class="flex basis-1/4">
                            <div class="flex items-center justify-end basis-full">
                                <div class="flex text-xs text-content-400 basis-1/2 ">
                                    <div class="flex items-center justify-center basis-1/2">
                                        <a href="#" class="mr-1">Eng</a>
                                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group">
                                                <path id="Vector" d="M8 1.25L4.5 4.75L1 1.25" stroke="#999"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="flex items-center justify-center uppercase basis-1/2">
                                        <a href="#" class="mr-1">Usd</a>
                                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group">
                                                <path id="Vector" d="M8 1.25L4.5 4.75L1 1.25" stroke="#999"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div class="w-px h-4 bg-content-400"></div>

                                ${user.length == 0 ? `<div class="flex text-xs text-content-400 basis-1/2">
                                    <div class="flex items-center justify-center basis-1/2">
                                        <a href="./signIn.html" class=".signIn.html">Sign in</a>
                                    </div>
                                    /
                                    <div class="flex items-center justify-center basis-1/2">
                                        <a href="./signUp.html">Sign up</a>
                                    </div>
                                </div>` : `<div class="flex text-xs text-content-400 basis-1/2">
                                    <div class="flex items-center justify-center basis-1/2">
                                        <p>${user[0].fullname}</p>
                                    </div>
                                    /
                                    <div class="flex items-center justify-center basis-1/2">
                                        <button onclick="logOut()">Logout</button>
                                    </div>
                                </div>`}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Middle mt-[44px]">
                    <div class="flex flex-row bg-[#EDF2EE] py-7 px-[200px]">
                        <div class="flex items-center justify-start basis-1/6">
                            <svg class="cursor-pointer" width="150" height="39" viewBox="0 0 183 39" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.2749 7.8428C27.4022 7.8428 21.9311 8.16683 19.1352 10.9613C17.9247 12.1718 17.3202 14.1451 17.4771 16.3787C17.4975 16.6737 17.6937 16.925 17.9756 17.0181C18.256 17.1096 18.5641 17.0239 18.7559 16.7987C20.3108 14.9691 22.2435 13.5029 24.5046 12.4406C24.6964 12.3491 24.9231 12.3418 25.1295 12.4145C25.3111 12.4799 25.4535 12.6033 25.5276 12.7618C25.6816 13.0873 25.6322 13.516 25.1207 13.7572C25.0917 13.7717 25.0655 13.7906 25.0365 13.8037C25.0263 13.8081 25.0147 13.8066 25.006 13.811C19.4346 16.4296 16.6954 20.9983 15.4514 25.6964C14.5446 19.814 12.6294 16.3511 10.8202 14.2251C9.51095 12.5279 8.22341 11.6283 7.47943 11.1198C7.34136 11.0253 6.92435 10.7405 6.7514 10.5675C6.46803 10.2842 6.46803 9.8235 6.7514 9.54013C7.03477 9.2582 7.49687 9.2582 7.81218 9.57208C7.88923 9.6404 8.01272 9.72759 8.16966 9.83222L8.29902 9.91941C9.35108 10.6402 11.31 11.9785 13.0479 14.8601C13.2034 15.1173 13.5042 15.2554 13.7963 15.2002C14.0928 15.1479 14.3252 14.9197 14.3834 14.6247C14.7627 12.6877 14.5927 9.81328 12.8649 8.0855C10.069 5.2925 4.59789 4.96847 0.726671 4.96847C0.32553 4.9684 0 5.29393 0 5.695C0 9.56765 0.324032 15.0388 3.11846 17.8347C4.28387 19.0001 6.08147 19.5233 7.86736 19.5233C9.32486 19.5233 10.7533 19.1585 11.8476 18.5264C13.3399 21.6187 14.5316 26.2383 14.5316 33.305C14.5316 33.7061 14.8571 34.0316 15.2582 34.0316C15.6592 34.0316 15.9848 33.7061 15.9848 33.305C15.9848 29.3626 16.6605 24.6311 19.173 20.7366C20.18 21.7205 21.9137 22.3439 23.8347 22.402C23.9306 22.4049 24.0251 22.4063 24.1195 22.4063C26.0711 22.4063 27.796 21.7946 28.8815 20.7076C31.6773 17.9117 31.9999 12.4405 31.9999 8.56783C32.0015 8.16683 31.6774 7.8428 31.2749 7.8428Z"
                                    fill="#00B307" />
                                <path
                                    d="M46.048 11.204V17.732H53.728V20.708H46.048V27.524H54.688V30.5H42.4V8.228H54.688V11.204H46.048ZM57.0052 21.668C57.0052 19.8547 57.3679 18.2653 58.0933 16.9C58.8399 15.5133 59.8639 14.4467 61.1653 13.7C62.4666 12.9533 63.9599 12.58 65.6453 12.58C67.7786 12.58 69.5386 13.092 70.9253 14.116C72.3333 15.1187 73.2826 16.5587 73.7733 18.436H69.8373C69.5173 17.5613 69.0053 16.8787 68.3013 16.388C67.5973 15.8973 66.7119 15.652 65.6453 15.652C64.1519 15.652 62.9573 16.1853 62.0613 17.252C61.1866 18.2973 60.7493 19.7693 60.7493 21.668C60.7493 23.5667 61.1866 25.0493 62.0613 26.116C62.9573 27.1827 64.1519 27.716 65.6453 27.716C67.7573 27.716 69.1546 26.788 69.8373 24.932H73.7733C73.2613 26.724 72.3013 28.1533 70.8933 29.22C69.4853 30.2653 67.7359 30.788 65.6453 30.788C63.9599 30.788 62.4666 30.4147 61.1653 29.668C59.8639 28.9 58.8399 27.8333 58.0933 26.468C57.3679 25.0813 57.0052 23.4813 57.0052 21.668ZM84.0968 30.788C82.4328 30.788 80.9288 30.4147 79.5848 29.668C78.2408 28.9 77.1848 27.8333 76.4168 26.468C75.6488 25.0813 75.2648 23.4813 75.2648 21.668C75.2648 19.876 75.6594 18.2867 76.4488 16.9C77.2381 15.5133 78.3154 14.4467 79.6808 13.7C81.0461 12.9533 82.5714 12.58 84.2568 12.58C85.9421 12.58 87.4674 12.9533 88.8328 13.7C90.1981 14.4467 91.2754 15.5133 92.0648 16.9C92.8541 18.2867 93.2488 19.876 93.2488 21.668C93.2488 23.46 92.8434 25.0493 92.0328 26.436C91.2221 27.8227 90.1128 28.9 88.7048 29.668C87.3181 30.4147 85.7821 30.788 84.0968 30.788ZM84.0968 27.62C85.0354 27.62 85.9101 27.396 86.7208 26.948C87.5528 26.5 88.2248 25.828 88.7368 24.932C89.2488 24.036 89.5048 22.948 89.5048 21.668C89.5048 20.388 89.2594 19.3107 88.7688 18.436C88.2781 17.54 87.6274 16.868 86.8168 16.42C86.0061 15.972 85.1314 15.748 84.1928 15.748C83.2541 15.748 82.3794 15.972 81.5688 16.42C80.7794 16.868 80.1501 17.54 79.6808 18.436C79.2114 19.3107 78.9768 20.388 78.9768 21.668C78.9768 23.5667 79.4568 25.0387 80.4168 26.084C81.3981 27.108 82.6248 27.62 84.0968 27.62ZM99.543 15.492C100.162 14.6387 101.004 13.9453 102.071 13.412C103.159 12.8573 104.364 12.58 105.687 12.58C107.244 12.58 108.652 12.9533 109.911 13.7C111.17 14.4467 112.162 15.5133 112.887 16.9C113.612 18.2653 113.975 19.8333 113.975 21.604C113.975 23.3747 113.612 24.964 112.887 26.372C112.162 27.7587 111.159 28.8467 109.879 29.636C108.62 30.404 107.223 30.788 105.687 30.788C104.322 30.788 103.106 30.5213 102.039 29.988C100.994 29.4547 100.162 28.772 99.543 27.94V30.5H95.895V6.82H99.543V15.492ZM110.263 21.604C110.263 20.388 110.007 19.3427 109.495 18.468C109.004 17.572 108.343 16.9 107.511 16.452C106.7 15.9827 105.826 15.748 104.887 15.748C103.97 15.748 103.095 15.9827 102.263 16.452C101.452 16.9213 100.791 17.604 100.279 18.5C99.7883 19.396 99.543 20.452 99.543 21.668C99.543 22.884 99.7883 23.9507 100.279 24.868C100.791 25.764 101.452 26.4467 102.263 26.916C103.095 27.3853 103.97 27.62 104.887 27.62C105.826 27.62 106.7 27.3853 107.511 26.916C108.343 26.4253 109.004 25.7213 109.495 24.804C110.007 23.8867 110.263 22.82 110.263 21.604ZM115.407 21.604C115.407 19.8333 115.769 18.2653 116.495 16.9C117.241 15.5347 118.244 14.4787 119.503 13.732C120.783 12.964 122.191 12.58 123.727 12.58C125.113 12.58 126.319 12.8573 127.343 13.412C128.388 13.9453 129.22 14.6173 129.839 15.428V12.868H133.519V30.5H129.839V27.876C129.22 28.708 128.377 29.4013 127.311 29.956C126.244 30.5107 125.028 30.788 123.663 30.788C122.148 30.788 120.761 30.404 119.503 29.636C118.244 28.8467 117.241 27.7587 116.495 26.372C115.769 24.964 115.407 23.3747 115.407 21.604ZM129.839 21.668C129.839 20.452 129.583 19.396 129.071 18.5C128.58 17.604 127.929 16.9213 127.119 16.452C126.308 15.9827 125.433 15.748 124.495 15.748C123.556 15.748 122.681 15.9827 121.871 16.452C121.06 16.9 120.399 17.572 119.887 18.468C119.396 19.3427 119.151 20.388 119.151 21.604C119.151 22.82 119.396 23.8867 119.887 24.804C120.399 25.7213 121.06 26.4253 121.871 26.916C122.703 27.3853 123.577 27.62 124.495 27.62C125.433 27.62 126.308 27.3853 127.119 26.916C127.929 26.4467 128.58 25.764 129.071 24.868C129.583 23.9507 129.839 22.884 129.839 21.668ZM140.582 27.524H148.582V30.5H136.358V27.524L144.39 15.844H136.358V12.868H148.582V15.844L140.582 27.524ZM150.236 21.604C150.236 19.8333 150.599 18.2653 151.324 16.9C152.071 15.5347 153.074 14.4787 154.332 13.732C155.612 12.964 157.02 12.58 158.556 12.58C159.943 12.58 161.148 12.8573 162.172 13.412C163.218 13.9453 164.05 14.6173 164.668 15.428V12.868H168.348V30.5H164.668V27.876C164.05 28.708 163.207 29.4013 162.14 29.956C161.074 30.5107 159.858 30.788 158.492 30.788C156.978 30.788 155.591 30.404 154.332 29.636C153.074 28.8467 152.071 27.7587 151.324 26.372C150.599 24.964 150.236 23.3747 150.236 21.604ZM164.668 21.668C164.668 20.452 164.412 19.396 163.9 18.5C163.41 17.604 162.759 16.9213 161.948 16.452C161.138 15.9827 160.263 15.748 159.324 15.748C158.386 15.748 157.511 15.9827 156.7 16.452C155.89 16.9 155.228 17.572 154.716 18.468C154.226 19.3427 153.98 20.388 153.98 21.604C153.98 22.82 154.226 23.8867 154.716 24.804C155.228 25.7213 155.89 26.4253 156.7 26.916C157.532 27.3853 158.407 27.62 159.324 27.62C160.263 27.62 161.138 27.3853 161.948 26.916C162.759 26.4467 163.41 25.764 163.9 24.868C164.412 23.9507 164.668 22.884 164.668 21.668ZM175.828 15.428C176.361 14.532 177.065 13.8387 177.94 13.348C178.836 12.836 179.892 12.58 181.108 12.58V16.356H180.18C178.751 16.356 177.663 16.7187 176.916 17.444C176.191 18.1693 175.828 19.428 175.828 21.22V30.5H172.18V12.868H175.828V15.428Z"
                                    fill="#002603" />
                            </svg>
                        </div>

                        <div class="flex basis-1/12"></div>

                        <div class="flex items-center overflow-hidden border rounded basis-3/6">
                            <div class="flex items-center bg-white basis-full h-11">

                                <svg class="ml-2 cursor-pointer" width="20" height="21" viewBox="0 0 20 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="Search">
                                        <g id="Group">
                                            <path id="Vector"
                                                d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                                                stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path id="Vector_2" d="M17.4999 18L13.8749 14.375" stroke="#1A1A1A"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </svg>

                                <input spellcheck="false"
                                    class="flex items-center justify-center px-4 py-3 outline-none basis-5/6"
                                    type="search" placeholder="Search">

                                <button
                                    class="flex items-center justify-center px-6 py-4 text-sm font-semibold text-white basis-1/6 bg-success">
                                    Search
                                </button>
                            </div>
                        </div>

                        <div class="flex basis-1/12">

                        </div>

                        <div class="flex items-center basis-1/6">
                            <div class="flex items-center justify-center basis-1/4">
                                <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                    viewBox="0 0 32 33" fill="none">
                                    <path
                                        d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16666 15.9995 7.95075C24 -2.16666 42.6666 13.8333 15.9995 28.5722Z"
                                        stroke="#1A1A1A" stroke-width="1.5" />
                                </svg>
                            </div>
                            <div class="flex items-center mx-1 bg-[#ccc] w-px h-6"></div>
                            <div class="flex items-center justify-center basis-3/4 ">
                                <div id="icon_ShowCart" onClick="showModelCart()" class="relative">
                                    <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="34"
                                        height="35" viewBox="0 0 34 35" fill="none">
                                        <path
                                            d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <div id="quantityCart"
                                        class="absolute flex items-center justify-center text-white right-0 top-0 rounded-full w-[18px] h-[18px] text-xs bg-[#2C742F]">
                                        ${cart.length || 0}</div>
                                </div>
                                <div class="flex flex-col ml-1">
                                    <div class="text-content-700 text-[11px]">Shopping cart</div>
                                    <div id="totalHeader" class="text-sm font-medium text-gray-900">$${subTotal}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav>
                    <div class="nav-header">
                            <div class="flex basis-7/12">
                                <ul class="flex items-center justify-between w-full gap-4">
                                    <li class="tw-menu-items ">
                                        <a class="mr-1" href="../index.html">Home</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"
                                            fill="none">
                                            <path d="M1.33317 1.66667L5.99984 6.33334L10.6665 1.66667" stroke="#666"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </li>
                                    <li class="tw-menu-items">
                                        <a class="mr-1" href="./products.html">Shop</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"
                                            fill="none">
                                            <path d="M1.33317 1.66667L5.99984 6.33334L10.6665 1.66667" stroke="#666"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </li>
                                    <li class="tw-menu-items">
                                        <a class="mr-1" href="#">Pages</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"
                                            fill="none">
                                            <path d="M1.33317 1.66667L5.99984 6.33334L10.6665 1.66667" stroke="#666"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </li>
                                    <li class="tw-menu-items">
                                        <a class="mr-1" href="./blog.html">Blog</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"
                                            fill="none">
                                            <path d="M1.33317 1.66667L5.99984 6.33334L10.6665 1.66667" stroke="#666"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </li>
                                    <li class="tw-menu-items">
                                        <a href="#">About Us</a>
                                    </li>
                                    <li class="tw-menu-items">
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="flex items-center justify-end basis-5/12">
                                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                    viewBox="0 0 28 28" fill="none">
                                    <path
                                        d="M17.436 4.375C18.9194 4.77396 20.2719 5.55567 21.3581 6.64184C22.4442 7.72801 23.226 9.08051 23.6249 10.5639"
                                        stroke="#666" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M16.5308 7.75687C17.4206 7.99625 18.2319 8.46521 18.8835 9.11678C19.535 9.76835 20.004 10.5797 20.2434 11.4695"
                                        stroke="#666" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.115 13.6517C11.0224 15.5074 12.5263 17.0049 14.3859 17.9042C14.522 17.9688 14.6727 17.9966 14.8229 17.9851C14.9731 17.9736 15.1178 17.9231 15.2425 17.8386L17.9812 16.0134C18.1022 15.9326 18.2414 15.8833 18.3862 15.8698C18.5311 15.8564 18.677 15.8793 18.8107 15.9364L23.9339 18.1326C24.1079 18.2065 24.2532 18.335 24.3479 18.4987C24.4426 18.6623 24.4815 18.8523 24.4589 19.04C24.2967 20.307 23.6784 21.4714 22.7196 22.3154C21.7608 23.1593 20.5273 23.6249 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75C4.37512 7.47279 4.84074 6.23941 5.68471 5.28077C6.52867 4.32213 7.6931 3.70396 8.96 3.542C9.14771 3.51936 9.33769 3.55832 9.50134 3.653C9.66499 3.74769 9.79345 3.89298 9.86738 4.067L12.0654 9.1945C12.1219 9.32698 12.1449 9.47137 12.1322 9.61485C12.1195 9.75833 12.0716 9.89647 11.9928 10.017L10.1728 12.7977C10.0901 12.923 10.0414 13.0675 10.0313 13.2171C10.0212 13.3668 10.05 13.5165 10.115 13.6517V13.6517Z"
                                        stroke="#666" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <address>
                                    <p>(219) 555-0114</p>
                                </address>
                            </div>
                    </div>
                </nav>`
})
}






