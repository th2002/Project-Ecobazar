// import component from module users
import * as addUser from "../../../src/api/users/addUser.js";
import * as getUsers from "../../../src/api/users/getUsers.js";
import handleDeleteUser from "../../../src/api/users/deleteUser.js";
import * as updateUser from "../../../src/api/users/updateUser.js";

// import component from module categories
import * as cate from "../../../src/api/categories/addCategories.js";
import getCategories from "../../../src/api/categories/getCategories.js";
import handleDeleteCate from "../../../src/api/categories/deleteCategories.js";
import * as updateCate from "../../../src/api/categories/updateCategories.js";

// import component from module products
import * as addProducts from "../../../src/api/products/addProducts.js";
import getProducts from "../../../src/api/products/getProducts.js";
import * as updateProduct from "../../../src/api/products/updateProducts.js";
import handleDeleteProduct from "../../../src/api/products/deleteProducts.js";


const navLinks = document.querySelectorAll(".nav-items");

// Content element
const mainContent = document.querySelector(".main-content");

// List content
const dashBoard = document.querySelector(".container-dashboard");
const account = document.querySelector(".container-account");
const product = document.querySelector(".container-product");
const categories = document.querySelector(".container-categories");
const bill = document.querySelector(".container-bill");
const blog = document.querySelector(".container-blog");

const listContent = [dashBoard, account, product, categories, bill, blog];

// Click tab menu
navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove("bg-[#f6f9fc]");
    });

    if (link !== navLinks[navLinks.length - 1]) {
      link.classList.add("bg-[#f6f9fc]");
    }

    // render content
    mainContent.innerHTML = listContent[index].innerHTML;
  });
});

// Get all bills
const data_bills = document.getElementById("data_bills");
const apiBills = "http://localhost:3000/bills";

async function fetchBills() {
  try {
    const responsse = await fetch(apiBills);
    if (!responsse.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await responsse.json();
    let outputBills = "";
    let total = 0;
    for (let data of json) {
      outputBills += `<tr class="bill-row border-b-[0.5px] border-gray-400">
                                <td class="py-6">${data.id}</td>
                                <td>${data.customer}</td>
                                <td>${data.coupon}</td>
                                <td>${data.shipping}</td>
                                <td class="money-bill">${data.totalMoney}</td>
                                <td>${data.paymentMethod}</td>
                                <td>${data.dateCreated}</td>
                                <td>${data.status}</td>
                                <td class="text-center">
                                    <button class="w-16 h-8 mr-2 text-white bg-yellow-500 rounded-md">Detail</button>
                                    <button class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                                </td>
                            </tr>`;
      if (data.status == "Delivered") {
        total += parseInt(data.totalMoney);
      }
    }
    data_bills.innerHTML = outputBills;

    //  total bills statistic
    const listOrder = document.querySelectorAll(".bill-row");
    const countOrder = document.getElementById("count-order");
    countOrder.innerHTML = listOrder.length;

    // statistical total money
    const totalMoney = document.getElementById("total-money");
    totalMoney.innerHTML = total.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBills();
});

// Get all blogs
const data_blogs = document.getElementById("data_blogs");
const apiBlogs = "http://localhost:3000/blogs";

async function fetchBlogs() {
  try {
    const response = await fetch(apiBlogs);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    let outputBlogs = "";
    for (let data of json) {
      outputBlogs += `<tr class="border-b-[0.5px] border-gray-400">
                                <td class="py-14">${data.id}</td>
                                <td>${data.title}</td>
                                <td>${data.author}</td>
                                <td>${data.status}</td>
                                <td>${data.category}</td>
                                <td>${data.views}</td>
                                <td>${data.comments}</td>
                                <td><img class="w-28 h-28" src="${data.thumnail}"></td>
                                <td>${data.dateCreated}</td>
                                <td class="text-center">
                                    <button class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                                </td>
                            </tr>`;
    }

    data_blogs.innerHTML = outputBlogs;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBlogs();
});

// library statictiscal
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Monthly revenue statistics",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "#A855F7",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


// Model users form
const modelSubmitUsers = document.getElementById("modelSubmitUsers");
const modelUpdateUsers = document.getElementById("modelUpdateUsers");

// Close model add user form
modelSubmitUsers.addEventListener("click", (e) => {
  if (e.target === modelSubmitUsers) {
    modelSubmitUsers.classList.add("hidden");
  }
});

// Close model update user form
modelUpdateUsers.addEventListener("click", (e) => {
  if (e.target === modelUpdateUsers) {
    modelUpdateUsers.classList.add("hidden");
  }
});

// CRUD users
window.getDataUsers = getUsers.default;
document.addEventListener("DOMContentLoaded", event => {
  getDataUsers(event);
});

window.ShowFormAddUser = addUser.ShowFormAddUser;
window.submitAddUser = addUser.default;
window.ShowFormUpdateUser = updateUser.ShowFormUpdateUser;
window.submitUpdateUsers = updateUser.default;
window.handleDeleteUser = handleDeleteUser;




// model cate form
const modelSubmitCate = document.getElementById("modelSubmitCate");
const modelUpdateCate = document.getElementById("modelUpdateCate");

// Close model add cate form 
modelSubmitCate.addEventListener("click", (e) => {
  if (e.target === modelSubmitCate) {
    modelSubmitCate.classList.add("hidden");
  }
});

// Close model update cate form 
modelUpdateCate.addEventListener("click", (e) => {
  if (e.target === modelUpdateCate) {
    modelUpdateCate.classList.add("hidden");
  }
});

// CRUD categories
window.getCategories = getCategories;

document.addEventListener("DOMContentLoaded", () => {
  getCategories();
});

window.ShowFormAddCate = cate.ShowFormAddCate;
window.submitAddCate = cate.default;
window.ShowFormCate = updateCate.ShowFormCate;
window.submitUpdateCate = updateCate.default;
window.handleDeleteCate = handleDeleteCate;


// Model products form
const modelSubmitProducts = document.getElementById("modelSubmitProducts");
const modelUpdateProducts = document.getElementById("modelUpdateProducts");

// Close model add products form
modelSubmitProducts.addEventListener("click", (e) => {
  if (e.target === modelSubmitProducts) {
    modelSubmitProducts.classList.add("hidden");
  }
});

// Close model update products form
modelUpdateProducts.addEventListener("click", (e) => {
  if (e.target === modelUpdateProducts) {
    modelUpdateProducts.classList.add("hidden");
  }
});

// CRUD products
window.getProducts = getProducts;

document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});

window.ShowFormAddProducts = addProducts.ShowFormAddProducts;
window.submitAddProducts = addProducts.default;
window.ShowUpdateProductForm = updateProduct.ShowUpdateProductForm;
window.submitUpdateProduct = updateProduct.default;
window.handleDeleteProduct = handleDeleteProduct;