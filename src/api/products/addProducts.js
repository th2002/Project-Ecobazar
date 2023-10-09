export function ShowFormAddProducts() {
    modelSubmitProducts.classList.remove("hidden");
}

async function submitAddProducts(e) {
    e.preventDefault();

    const fileInput = document.getElementById("productImages");
        if (fileInput.files.length === 0) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Images cannot be left blank",
            });
            return false;
        }

    const imageName = fileInput.files[0].name;

    // get value input
    const name = document.getElementById("productName").value;
    const price = document.getElementById("price").value;
    const prince_sale = document.getElementById("price_sale").value;
    const quantity = document.getElementById("productQuantity").value;
    const category = document.getElementById("category").value;
    const images = `../../assets/images/products/${imageName}`;
    const description = document.getElementById("productDescription").value;

    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();

    // get the highest id in database
    const highestId = Math.max(...products.map((product) => product.id));

    // get current day
    const currentDay = new Date();
    const day = currentDay.getDate();
    const month = currentDay.getMonth() + 1;
    const year = currentDay.getFullYear();
    const dateCreated = `${day}/${month}/${year}`;

    // create data JSON
    const productData = {
        id: highestId + 1,
        name,
        price,
        prince_sale,
        quantity,
        category,
        images,
        description,
        dateCreated: dateCreated,
    };

    // Validate form
    for (let value of products) {
        if (name.toLowerCase() === value.name.toLowerCase()) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Product already exists!",
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
        !validateInput(prince_sale, "Price sale") ||
        !validateInput(quantity, "Quantity") ||
        !validateInput(category, "Category") ||
        !validateInput(imageName, "Images") ||
        !validateInput(description, "Description")
    ) {
        return false;
    }

    // POST method JSON
    await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    })
        .then((r) => r.json())
        .then((data) => {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Add product successfully!",
            });
        })
        .catch((error) => {
            console.log(error);
        });

}

export default submitAddProducts;