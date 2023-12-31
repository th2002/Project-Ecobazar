import fetchData_users from './getUsers.js';
import {data_user, apiUsers} from './getUsers.js';

async function handleDeleteUser(dataId, e) {
  e.preventDefault();
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            fetch(`http://localhost:3000/users/${dataId}`, {
                method: "DELETE",
            });
        }
        // fetchData_users(e);
    });
}

export default handleDeleteUser;
