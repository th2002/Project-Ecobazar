const apiCate = "http://localhost:3000/categories";

// print input value
export async function ShowFormCate (cateId) {

    const cateIdData = document.getElementById("cateId");
    const name = document.getElementById("nameUpdate");
    const quantity = document.getElementById("quantityUpdate");

    const resp = await fetch(`${apiCate}/${cateId}`);
    const cate = await resp.json();

    cateIdData.textContent = cate.id;
    name.value = cate.name;
    quantity.value = cate.quantity;

    modelUpdateCate.classList.remove("hidden");
}

async function submitUpdateCate(e) {
    e.preventDefault();

    // get value input
    const cateId = document.getElementById("cateId").textContent;
    const name = document.getElementById("nameUpdate").value;
    const quantity = document.getElementById("quantityUpdate").value;

    const resp = await fetch(apiCate);
    const listCate = await resp.json();

    // check name exist
    for (let value of listCate) {
        if (value.name === name && value.id != cateId) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Category already exists",
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

    // validate input

    if (
        !validateInput(name, "Name") ||
        !validateInput(quantity, "Quantity")
    ) {
        return false;
    }

    if (quantity < 0) {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Quantity must be greater than 0",
        });
        return false;
    }

    // get current day
    const currentDay = new Date();
    const day = currentDay.getDate();
    const month = currentDay.getMonth() + 1;
    const year = currentDay.getFullYear();
    const dateUpdate = `${day}/${month}/${year}`;

    // create data JSON
    const cateData = {
        id: cateId,
        name,
        quantity,
        dateUpdate: dateUpdate,
    };

    // update data
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cateData),
    };

    await fetch(`${apiCate}/${cateId}`, options)
        .then((r) => r.json())
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Update category successfully!",
            });
        })
        .catch((error) => {
            console.log("Error", error);
        });
}

export default submitUpdateCate;
