import { componentHeader } from "../component/header.js";
import { componentFooter } from "../component/footer.js";



componentHeader();
componentFooter();

// animation input
const inputs = document.querySelectorAll(".input");
const inputTexts = document.querySelectorAll(".input-text");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    if (inputs[i].value) {
      inputTexts[i].classList.add("input-active");
    } else {
      inputTexts[i].classList.remove("input-active");
    }
  });
}

// handle swap form
const layoutLogin = document.getElementById("layoutLogin");
const layoutRegister = document.getElementById("layoutRegister");

const btnSwapToLogin = document.getElementById("link_login");
const btnSwapToRegister = document.getElementById("link_register");

btnSwapToLogin.addEventListener("click", function (e) {
  e.preventDefault();

  layoutLogin.classList.remove("hidden");
  layoutRegister.classList.add("hidden");
});

btnSwapToRegister.addEventListener("click", function (e) {
  e.preventDefault();

  layoutLogin.classList.add("hidden");
  layoutRegister.classList.remove("hidden");
});


// handle form register
const formRegister = document.getElementById("formRegister");

const usernameRg = document.getElementById("usernameRg");
const passwordRg = document.getElementById("passwordRg");
const cfpasswordRg = document.getElementById("cfpasswordRg");

async function registerUser(event) {
  event.preventDefault();

  const username = usernameRg.value;
  const password = passwordRg.value;
  const cfpassword = cfpasswordRg.value;

  const resp = await fetch("http://localhost:3000/users");
  const listUsers = await resp.json();

  // get the highest id in database
  const highestId = Math.max(...listUsers.map((user) => user.id));

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateCreated = `${day}/${month}/${year}`;

  const userData = {
    id: highestId + 1,
    username,
    password,
    fullname: "null",
    address: "null",
    phone: "null",
    role: "customer",
    dateCreated: dateCreated,
    dateUpdate: "null",
  };

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
    !validateInput(username, "Username") ||
    !validateInput(password, "Password") ||
    !validateInput(cfpassword, "Confirm password")
  ) {
    return false;
  }

  const user = listUsers.find((user) => user.username === username);
  if (user) {
    Swal.fire({
      title: "Username already exists",
      text: "Please choose another username!",
      icon: "error",
    });
    return false;
  }

  if (password !== cfpassword) {
    Swal.fire({
      title: "Password confirmation is incorrect",
      text: "Please confirm again!",
      icon: "error",
    });
    return false;
  }

  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then(() => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Register success",
    });
    window.location.href = "./signIn.html";
    location.reload();
  });
}

formRegister.addEventListener("submit", registerUser);

// handle form login
const formLogin = document.getElementById("formLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");


// Hàm để thiết lập một cookie
function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
}

// Hàm để lấy giá trị của cookie dựa trên tên
function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

// set localStorage for user
const addUser = (name, fullname, phone, address) => {
    var user = JSON.parse(localStorage.getItem("user")) || [];

    if (user.length == 0) {
      user.push({name: name, fullname: fullname, phone: phone, address: address});
    }
    
    localStorage.setItem('user', JSON.stringify(user));
}

async function login(event) {
  event.preventDefault();

  const usernameLogin = username.value;
  const passwordLogin = password.value;

  const resp = await fetch("http://localhost:3000/users");
  const listUsers = await resp.json();

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
    !validateInput(usernameLogin, "Username") ||
    !validateInput(passwordLogin, "Password")
  ) {
    return false;
  }

  const user = listUsers.find(
    (user) => user.username === usernameLogin && user.password === passwordLogin
  );
  if (user) {
    if (user.role === "customer") {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Login success",
      });
      
      addUser(user.username, user.fullname, user.phone, user.address)
      window.location.href = "../index.html";
    } else if (user.role === "admin") {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Login success",
      });
      window.location.href = "./admin/index.html";
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Username or password is incorrect",
    });
  }
}

formLogin.addEventListener("submit", login);
