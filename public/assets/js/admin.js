const imgList = document.querySelectorAll('.img-banner');

let currentIndex = 0;

// function animateImage() {
//             gsap.to(banner, { x: "-100%", duration: 0.5, onComplete: () => {
//                 banner.src = imgUrls[currentIndex];
//                 currentIndex = (currentIndex + 1) % imgUrls.length;
//                 gsap.fromTo(banner, { x: "100%" }, { x: "0%", duration: 0.5 });
//             } });
//         }

// setInterval(animateImage, 3000);

// function showNextSlide() {
//             imgList[currentIndex].classList.remove('opacity-100');
//             currentIndex = (currentIndex + 1) % imgList.length;
//             imgList[currentIndex].classList.remove('opacity-0');
//             imgList[currentIndex].classList.add('opacity-100');
//         }

//         setInterval(showNextSlide, 2000);

const navLinks = document.querySelectorAll('.nav-items');

// Content element
const mainContent = document.querySelector('.main-content');

// List content
const dashBoard = document.querySelector('.container-dashboard');
const account = document.querySelector('.container-account');
const product = document.querySelector('.container-product');
const categories = document.querySelector('.container-categories');
const bill = document.querySelector('.container-bill');
const blog = document.querySelector('.container-blog');

const listContent = [dashBoard, account, product, categories, bill, blog];

// Click tab menu
navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('bg-[#f6f9fc]');
        })

        if (link !== navLinks[navLinks.length - 1]) {
             link.classList.add('bg-[#f6f9fc]');   
        }

        mainContent.innerHTML = listContent[index].innerHTML
        
    });
});



// Fetch API json-server
// Get all users
const data_user = document.getElementById('data_user');
const apiUsers = 'http://localhost:3000/users';
async function fetchData_users() {
  try {
    const response = await fetch(apiUsers);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    let outputUsers = "";
    for (let data of json) {      
      outputUsers += `<tr class="user-row border-b-[0.5px] border-gray-400">
                        <td class="py-6">${data.id}</td>
                        <td>${data.username}</td>
                        <td>${data.password}</td>
                        <td>${data.fullname}</td>
                        <td>${data.address}</td>
                        <td>${data.phone}</td>
                        <td>${data.role}</td>
                        <td>${data.dateCreated}</td>
                        <td class="text-center"><button class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button></td>
                      </tr>`;
    }
    data_user.innerHTML = outputUsers;

    // account statistical
    const listUser = document.querySelectorAll('.user-row');
    const countUser = document.getElementById('count-user');
    countUser.innerHTML = listUser.length;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData_users();

// Get all products
const data_products = document.getElementById('data_products');
const apiProducts = 'http://localhost:3000/products'

async function fetchProducts() {
    try {
        const response = await fetch(apiProducts);
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
        const countProduct = document.getElementById('count-product');
        countProduct.innerHTML = result;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchProducts();

// Get all categories
const data_categories = document.getElementById('data_categories');
const apiCate = 'http://localhost:3000/categories';

async function fetchCategories() {
    try {
        const response = await fetch(apiCate);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        let outputCate = "";
        for (let data of json) {
            outputCate += `<tr class="border-b-[0.5px] border-gray-400">
                                    <td class="py-6">${data.id}</td>
                                    <td>${data.name}</td>
                                    <td>${data.quantity}</td>
                                    <td>${data.dateCreated}</td>
                                    <td class="text-center">
                                        <button class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                                    </td>
                                </tr>`
        }

        data_categories.innerHTML = outputCate;
    } catch (error) {
        console.log('Error fetching data:', error)
    }
}

fetchCategories();

// Get all bills

const data_bills = document.getElementById('data_bills');
const apiBills = 'http://localhost:3000/bills'

async function fetchBills() {
    try {
        const responsse = await fetch(apiBills);
        if(!responsse.ok){
            throw new Error('Network response was not ok');
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
                            </tr>`
            if (data.status == "Delivered") {
                total += parseInt(data.totalMoney);
            }
        }
        data_bills.innerHTML = outputBills;

        //  total bills statistic
        const listOrder = document.querySelectorAll('.bill-row');
        const countOrder = document.getElementById('count-order');
        countOrder.innerHTML = listOrder.length;

        // statistical total money
        const totalMoney = document.getElementById('total-money');
        totalMoney.innerHTML = total.toLocaleString('vi', {style : 'currency', currency : 'VND'});

        //
        
    } catch (error) {
        console.log('Error fetching data:', error)
    }
}

fetchBills()
        

// Get all blogs
const data_blogs = document.getElementById('data_blogs');
const apiBlogs = 'http://localhost:3000/blogs';

async function fetchBlogs() {
    try {
        const response = await fetch(apiBlogs);
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
                            </tr>`
        }

        data_blogs.innerHTML = outputBlogs;
    } catch (error) {
        console.log('Error fetching data:', error)
    }
}

fetchBlogs();

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['7', '8', '9', '10', '11', '12'],
      datasets: [{
        label: 'Monthly revenue statistics',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#F9A8D4'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
