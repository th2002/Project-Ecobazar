// import component from module users
import * as addUser from "../../../src/api/users/addUser.js";
import * as getUsers from "../../../src/api/users/getUsers.js";
import handleDeleteUser from "../../../src/api/users/deleteUser.js";
import * as updateUser from "../../../src/api/users/updateUser.js";


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

/* Products */

// Get data products
const data_products = document.getElementById("data_products");
const apiProducts = "http://localhost:3000/products";

async function fetchProducts() {
  try {
    const response = await fetch(apiProducts);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    let outputProducts = "";
    let result = 0;
    for (let data of json) {
      outputProducts += `<tr class="border-b-[0.5px] border-gray-400">
                                    <td class="py-6">${data.id}</td>
                                    <td>${data.name}</td>
                                    <td>${data.price}</td>
                                    <td>${data.prince_sale}</td>
                                    <td class="quantity_prd">${data.quantity}</td>
                                    <td><img class="w-28 h-28" src="${data.images}" ></td>
                                    <td>${data.description}</td>
                                    <td>${data.sold}</td>
                                    <td>${data.dateCreated}</td>
                                    <td class="text-center"><button class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button></td>
                                </tr>`;
      result += parseInt(data.quantity);
    }

    data_products.innerHTML = outputProducts;

    // products statistical
    const countProduct = document.getElementById("count-product");
    countProduct.innerHTML = result;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

// Get all categories
const data_categories = document.getElementById("data_categories");
const apiCate = "http://localhost:3000/categories";

async function handleDeleteCate(dataId) {
  try {
    const deleteResp = await fetch(`http://localhost:3000/categories/${dataId}`, {
      method: "DELETE",
    });
    if (deleteResp.ok) {
      console.log("The categories has been successfully deleted");
    } else {
      console.error("Error during categories deletion.");
    }
  } catch (error) {
    console.log("Error fetch categories data:", error);
  }
}

async function fetchCategories() {
  try {
    const response = await fetch(apiCate);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    let outputCate = "";
    for (let data of json) {
      outputCate += `<tr class="border-b-[0.5px] border-gray-400">
                                    <td class="py-6">${data.id}</td>
                                    <td>${data.name}</td>
                                    <td>${data.quantity}</td>
                                    <td>${data.dateCreated}</td>
                                    <td>${data.dateUpdate ? data.dateUpdate : "null"}</td>
                                    <td class="text-center">
                                        <button type="button" onclick="handleDeleteCate(${
                              data.id
                            })" data-id="${
        data.id
      }" class="w-16 h-8 mr-2 text-white bg-yellow-500 rounded-md delete-btn">Delete</button>
                                        <button class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                                    </td>
                                </tr>`;
    }

    data_categories.innerHTML = outputCate;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
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
        backgroundColor: "#F9A8D4",
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

// model, root node
const root = document.querySelector(".root");

// Model users form
const modelSubmitUsers = document.getElementById("modelSubmitUsers");

const modelSubmitCate = document.getElementById("modelSubmitCate");

// List handle CRUD methods

// fetch API users
// function fetchApiUsers() {
//   fetch("http://localhost:3000/users")
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// }

// CRUD users
window.getDataUsers = getUsers.default;

document.addEventListener("DOMContentLoaded", () => {
  getDataUsers();
});

window.ShowFormAddUser = addUser.ShowFormAddUser;
window.submitAddUser = addUser.default;
window.ShowFormUpdateUser = updateUser.ShowFormUpdateUser;
window.submitUpdateUsers = updateUser.default;
window.handleDeleteUser = handleDeleteUser;


// CRUD categories

function handleBtnCateClick() {
  modelSubmitCate.classList.remove("hidden");
}

// Click model event close model add user form
modelSubmitUsers.addEventListener("click", (e) => {
  if (e.target === modelSubmitUsers) {
    modelSubmitUsers.classList.add("hidden");
  }
});

// Click model event close model update user form
modelUpdateUsers.addEventListener("click", (e) => {
  if (e.target === modelUpdateUsers) {
    modelUpdateUsers.classList.add("hidden");
  }
});

/* Cate button */
modelSubmitCate.addEventListener("click", (e) => {
  if (e.target === modelSubmitCate) {
    modelSubmitCate.classList.add("hidden");
  }
});

// list form

const cateForm = document.getElementById("cateForm");

// Submit cate form
cateForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // get value input
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;

  const response = await fetch("http://localhost:3000/categories");
  const cates = await response.json();

  // get the highest id in database
  const highestId = Math.max(...cates.map((cate) => cate.id));

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateCreated = `${day}/${month}/${year}`;

  // create data JSON
  const cateData = {
    id: highestId + 1,
    name,
    quantity,
    dateCreated: dateCreated,
  };

  // POST method JSON
  await fetch("http://localhost:3000/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cateData),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});
