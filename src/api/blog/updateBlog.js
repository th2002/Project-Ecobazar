const apiBlog = "http://localhost:3000/blogs";

export async function ShowFormUpdateBlog(dataId) {
  const blogId = document.getElementById("blogId");
  const title = document.getElementById("titleUpdate");
  const author = document.getElementById("authorUpdate");
  const status = document.getElementById("statusUpdate");
  const category = document.getElementById("blogCategoryUpdate");

  console.log(blogId, title, author, status, category);
  const reps = await fetch(`${apiBlog}/${dataId}`);
  const blog = await reps.json();

  console.log(blog);

  blogId.textContent = blog.id;
  title.value = blog.title;
  author.value = blog.author;
  status.value = blog.status;
  category.value = blog.category;

  modelUpdateBlogs.classList.remove("hidden");
}

async function submitUpdateBlog(e) {
  e.preventDefault();

  const fileInput = document.getElementById("thumbnailUpdate");
  let imageName = "";
  let thumbnail = "";

  if (fileInput.files.length === 0) {
    imageName = "";
    thumbnail = "";
  } else {
    imageName = fileInput.files[0].name;
    thumbnail = `../../assets/images/latest-news/${imageName}`;
  }

  // get value input
  const blogId = document.getElementById("blogId").textContent;
  const title = document.getElementById("titleUpdate").value;
  const author = document.getElementById("authorUpdate").value;
  const status = document.getElementById("statusUpdate").value;
  const category = document.getElementById("blogCategoryUpdate").value;

  // get current day
  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = currentDay.getMonth() + 1;
  const year = currentDay.getFullYear();
  const dateUpdate = `${day}/${month}/${year}`;

  // create data JSON

  let blogData;
  if (thumbnail === "") {
    blogData = {
      id: blogId,
      title,
      author,
      status,
      category,
      dateUpdate: dateUpdate,
    };
  } else {
    blogData = {
      id: blogId,
      title,
      author,
      status,
      category,
      thumbnail,
      dateUpdate: dateUpdate,
    };
  }

  // validate input
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

  await fetch(`${apiBlog}/${blogId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  Swal.fire({
    icon: "success",
    title: "Success",
    text: `Update success`,
  });
}

export default submitUpdateBlog;
