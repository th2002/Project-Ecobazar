
const apiUsers = "http://localhost:3000/users";

// print input value
export async function ShowFormUpdateUser(userId) {
  const userIdData = document.getElementById("userIdData");
  const username = document.getElementById("usernameUpdate");
  const password = document.getElementById("passwordUpdate");
  const fullname = document.getElementById("fullnameUpdate");
  const address = document.getElementById("addressUpdate");
  const phone = document.getElementById("phoneUpdate");
  const role = document.getElementById("roleUpdate");

  const getData = await fetch(`http://localhost:3000/users/${userId}`);

  if (!getData.ok) {
    throw new Error("Error fetch data");
  }

  const usersData = await getData.json();

  userIdData.textContent = usersData.id;
  username.value = usersData.username;
  password.value = usersData.password;
  fullname.value = usersData.fullname;
  address.value = usersData.address;
  phone.value = usersData.phone;
  role.value = usersData.role;

  modelUpdateUsers.classList.remove("hidden");
}

async function submitUpdateUsers(e) {
  e.preventDefault();

  // get value input
  const userIdData = document.getElementById("userIdData").textContent;
  const username = document.getElementById("usernameUpdate").value;
  const password = document.getElementById("passwordUpdate").value;
  const fullname = document.getElementById("fullnameUpdate").value;
  const address = document.getElementById("addressUpdate").value;
  const phone = document.getElementById("phoneUpdate").value;
  const role = document.getElementById("roleUpdate").value;

  const resp = await fetch(apiUsers);
  const listUsers = await resp.json();

  // check username exist
  for (let value of listUsers) {
    if (value.username === username && value.id != userIdData) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Username already exists",
      });
      return false;
    }
  }

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
    !validateInput(fullname, "Fullname") ||
    !validateInput(address, "Address") ||
    !validateInput(phone, "Phone")
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

  if (password.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Password must be greater than 6 characters",
    });
    return false;
  }

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateUpdate = `${day}/${month}/${year}`;

  // Create object user data
  const userData = {
    userIdData,
    username,
    password,
    fullname,
    address,
    phone,
    role,
    dateUpdate,
  };

  try {
    const response = await fetch(`http://localhost:3000/users/${userIdData}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // throw new Error("Network response was not ok");
      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text: "Update error",
      });
      return false;
    } else {
      Swal.fire({
        icon: "success",
        title: "Thành công!",
        text: `Update success`,
      });
    }

    // alert("Cập nhật thông tin người dùng thành công!");
  } catch (error) {
    console.error("Error update user:", error);
  }
}

export default submitUpdateUsers;
