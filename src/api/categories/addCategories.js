export function ShowFormAddCate() {
  modelSubmitCate.classList.remove("hidden");
}

async function submitAddCate(e) {
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

    // Validate form
    for(let value of cates) {
        if(name === value.name) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Category already exists!",
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
    !validateInput(name, "Name") ||
    !validateInput(quantity, "Quantity")
  ) {
    return false;
  }

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
      Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Add category successfully!",
    });
    return false;
    })
    .catch((err) => console.log(err));
}

export default submitAddCate;