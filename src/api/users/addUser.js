export function ShowFormAddUser() {
  modelSubmitUsers.classList.remove("hidden");
}

async function submitAddUser(e) {
  e.preventDefault();

  // get value input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const fullname = document.getElementById("fullname").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const role = document.getElementById("role").value;

  // get data users to find id
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();

  // get the highest id in database
  const highestId = Math.max(...users.map((user) => user.id));

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateCreated = `${day}/${month}/${year}`;

  // create data JSON
  const userData = {
    id: highestId + 1,
    username,
    password,
    fullname,
    address,
    phone,
    role,
    dateCreated: dateCreated,
    dateUpdate: "null",
  };

  /* Form validate */

  // check username exist
  for (let value of users) {
    if (value.username === username) {
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

  /* ----------------------------------------- */

  // POST method JSON
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((r) => r.json())
    .then((data) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Add user success",
      });
      return true;
    })
    .catch((err) => console.log(err));
}

export default submitAddUser;
