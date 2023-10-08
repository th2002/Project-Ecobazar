async function handleDeleteCate(dataId) {
  try {
    const deleteResp = await fetch(`http://localhost:3000/categories/${dataId}`, {
      method: "DELETE",
    });
    if (deleteResp.ok) {
      console.log("The categories has been successfully deleted");
    } else {
      console.error("Error during categories deletion.");
    }
  } catch (error) {
    console.log("Error fetch categories data:", error);
  }
}

export default handleDeleteCate;