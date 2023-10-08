async function handleDeleteUser(dataId) {
  try {
    const deleteResp = await fetch(`http://localhost:3000/users/${dataId}`, {
      method: "DELETE",
    });
    if (deleteResp.ok) {
      console.log("The account has been successfully deleted");
    } else {
      console.error("Error during account deletion.");
    }
  } catch (error) {
    console.log("Error fetch users data:", error);
  }
}

export default handleDeleteUser;
