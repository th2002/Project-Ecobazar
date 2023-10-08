const data_categories = document.getElementById("data_categories");
const apiCate = "http://localhost:3000/categories";

async function getCategories() {
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
      }" class="w-16 h-8 mr-2 text-white bg-purple-500 rounded-md delete-btn">Delete</button>
                                        <button onclick="ShowFormCate(${data.id})" class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                                    </td>
                                </tr>`;
    }

    data_categories.innerHTML = outputCate;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

export default getCategories;