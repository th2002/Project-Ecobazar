async function handleDeleteCate(dataId) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            fetch(`http://localhost:3000/categories/${dataId}`, {
                method: "DELETE",
            });
        }
    });
}

export default handleDeleteCate;