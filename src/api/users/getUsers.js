export const data_user = document.getElementById("data_user");
export const apiUsers = "http://localhost:3000/users";

async function fetchData_users(e) {
  e.preventDefault();
  try {
    const response = await fetch(apiUsers);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const json = await response.json();
    let outputUsers = "";

    for (let data of json) {
      outputUsers += `<tr class="user-row border-b-[0.5px] border-gray-400">
                        <td class="py-6">${data.id}</td>
                        <td>${data.username}</td>
                        <td>${data.password}</td>
                        <td>${data.fullname}</td>
                        <td>${data.address}</td>
                        <td>${data.phone}</td>
                        <td>${data.role}</td>
                        <td>${data.dateCreated}</td>
                        <td>${data.dateUpdate ? data.dateUpdate : "null"}</td>
                        <td class="text-center">
                            <button type="button" onclick="handleDeleteUser(${
        data.id
      },event)" data-id="${
        data.id
      }" class="w-16 h-8 mr-2 text-white bg-yellow-500 rounded-md delete-btn">Delete</button>
                            <button onclick="ShowFormUpdateUser(${
                              data.id
                            })" class="w-16 h-8 text-white bg-red-500 rounded-md">Edit</button>
                        </td>
                      </tr>`;
    }

    // print users data
    data_user.innerHTML = outputUsers;

    // account statistical
    const listUser = document.querySelectorAll(".user-row");
    const countUser = document.getElementById("count-user");
    countUser.innerHTML = listUser.length;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchData_users;