const data_products = document.getElementById("data_products");
const apiProducts = "http://localhost:3000/products";

async function getProducts() {
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
                                    <td>${data.category}</td>
                                    <td><img class="w-28 h-28" src="${data.images}" ></td>
                                    <td>${data.description}</td>
                                    <td>${data.sold ? data.sold : 0}</td>
                                    <td>${data.dateCreated}</td>
                                    <td>${data.dateUpdate ? data.dateUpdate : "null"}</td>
                                    <td class="text-center">
                                        <button onclick="handleDeleteProduct(${data.id})" class="w-16 h-8 text-white bg-yellow-500 rounded-md">Delete</button>
                                        <button onclick="ShowUpdateProductForm(${data.id})" class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                                    </td>
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

export default getProducts;