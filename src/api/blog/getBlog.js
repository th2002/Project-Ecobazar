const data_blogs = document.getElementById("data_blogs");
const apiBlogs = "http://localhost:3000/blogs";

async function getBlogs() {
  try {
    const response = await fetch(apiBlogs);
    if (!response.ok) {
      throw new Error("Network response was not ok");
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
                                <td>${data.views ? data.views : 0}</td>
                                <td>${data.comments ? data.views : 0}</td>
                                <td><img class="w-28 h-28" src="${data.thumbnail}"></td>
                                <td>${data.dateCreated}</td>
                                <td>${data.dateUpdate ? data.dateUpdate : "null"}</td>
                                <td class="text-center">
                                    <button onclick="handleDeleteBlog(${data.id})" class="w-16 h-8 text-white bg-yellow-500 rounded-md">Delete</button>
                                    <button onclick="ShowFormUpdateBlog(${data.id})" class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                                </td>
                            </tr>`;
    }

    data_blogs.innerHTML = outputBlogs;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

export default getBlogs;