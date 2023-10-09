const apiProducts = "http://localhost:3000/products";

export async function ShowUpdateProductForm(productId) {
  const productIdData = document.getElementById("productIdData");
  const name = document.getElementById("productUpdateName");
  const price = document.getElementById("priceUpdate");
  const prince_sale = document.getElementById("price_saleUpdate");
  const quantity = document.getElementById("productUpdateQuantity");
  const category = document.getElementById("categoryProductUpdate");
  const description = document.getElementById("productUpdateDescription");

  const resp = await fetch(`${apiProducts}/${productId}`);
  const product = await resp.json();

  productIdData.textContent = product.id;
  name.value = product.name;
  price.value = product.price;
  prince_sale.value = product.prince_sale;
  quantity.value = product.quantity;
  category.value = product.category;
  description.value = product.description;

  modelUpdateProducts.classList.remove("hidden");
}

async function submitUpdateProduct(e) {
  e.preventDefault();

  const fileInput = document.getElementById("productUpdateImages");
  let imageName = "";
  let images = "";

  if (fileInput.files.length === 0) {
    imageName = "";
    images = "";
  } else {
    imageName = fileInput.files[0].name;
    images = `../../assets/images/products/${imageName}`;
  }

  // get value input
  const productId = document.getElementById("productIdData").textContent;
  const name = document.getElementById("productUpdateName").value;
  const price = document.getElementById("priceUpdate").value;
  const prince_sale = document.getElementById("price_saleUpdate").value;
  const quantity = document.getElementById("productUpdateQuantity").value;
  const category = document.getElementById("categoryProductUpdate").value;
  const description = document.getElementById("productUpdateDescription").value;

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateUpdate = `${day}/${month}/${year}`;

  // create data JSON

  let productData;
  if (images === "") {
    productData = {
      id: parseInt(productId),
      name,
      price,
      prince_sale,
      quantity,
      category,
      description,
      dateUpdate: dateUpdate,
    };
  } else {
    productData = {
      id: parseInt(productId),
      name,
      price,
      prince_sale,
      quantity,
      category,
      images,
      description,
      dateUpdate: dateUpdate,
    };
  }

  // Validate form
  const response = await fetch(apiProducts);
  const products = await response.json();

  for (let value of products) {
    if (
      name.toLowerCase() === value.name.toLowerCase() &&
      productId != value.id
    ) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: `Product name already exists!`,
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
    !validateInput(price, "Price") ||
    !validateInput(quantity, "Quantity") ||
    !validateInput(category, "Category") ||
    !validateInput(description, "Description")
  ) {
    return false;
  }

  if (quantity <= 0) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Quantity must be greater than 0",
    });
    return false;
  }

  // update product
  await fetch(`${apiProducts}/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  Swal.fire({
    icon: "success",
    title: "Success",
    text: `Update success`,
  });
}

export default submitUpdateProduct;
