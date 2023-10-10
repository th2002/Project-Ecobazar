export function ShowFormAddBlogs() {
  modelSubmitBlogs.classList.toggle("hidden");
}

async function submitAddBlogs(e) {
  e.preventDefault();

  const fileInput = document.getElementById("thumbnail");
  if (fileInput.files.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Thumbnail cannot be left blank",
    });
    return false;
  }

  const imageName = fileInput.files[0].name;

  // get value input
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const status = document.getElementById("status").value;
  const category = document.getElementById("blogCategory").value;
  const thumbnail = `../../assets/images/latest-news/${imageName}`;

  const response = await fetch("http://localhost:3000/blogs");
  const blogs = await response.json();

  // get the highest id in database
  const highestId = Math.max(...blogs.map((blog) => blog.id));

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateCreated = `${day}/${month}/${year}`;

  // create data JSON
  const blogData = {
    id: highestId + 1,
    title,
    author,
    status,
    category,
    thumbnail,
    dateCreated: dateCreated,
  };

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
        !validateInput(title, "Title") ||
        !validateInput(author, "Author") ||
        !validateInput(status, "Status") ||
        !validateInput(category, "Category blog") 
    ) {
        return false;
    }

  // add data to database
  await fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Add blog successfully!",
  });
}

export default submitAddBlogs;
