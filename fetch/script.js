let tbl = document.querySelector(".table");
let primary = document.querySelector(".table-primary");
let post = document.querySelector(".btn-post");
let comment = document.querySelector(".btn-comment");
let album = document.querySelector(".btn-album");
let photo = document.querySelector(".btn-photo");
let todo = document.querySelector(".btn-todo");
let user = document.querySelector(".btn-user")



post.addEventListener('click', function () {
    tbl.classList.remove();
    tbl.classList.add("table", "table-striped", "table-success")
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        response.json().then(value => {
            let tr = `   <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">userId</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
            </tr>
          </thead>`
            value.forEach((item, index) => {
                tr += `  <tr>
            <th scope="row">${index + 1}</th>
            <td> ${item.userId} </td>
            <td>${item.id}</td>
            <td> ${item.title} </td>
            <td>${item.body} </td>
          </tr>`
            });
            tbl.innerHTML = tr
        }).catch(error=>alert("error"))
    }) .catch(error=>alert("error"))
})

comment.addEventListener('click', function () {
    tbl.classList.remove();
    tbl.classList.add("table", "table-striped", "table-primary")
    fetch("https://jsonplaceholder.typicode.com/comments").then(response => {
        response.json().then(value => {
            let tr = `   <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">postId</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">body</th>
            </tr>
          </thead>`
            value.forEach(item => {
                tr += `  <tr>
            <th scope="row">${item.id}</th>
            <td> ${item.postId} </td>
            <td>${item.name}</td>
            <td> ${item.email} </td>
            <td>${item.body} </td>
          </tr>`
            })
            tbl.innerHTML = tr
        }).catch(error=>alert("error"))
    }).catch(error=>alert("error"))
})

album.addEventListener('click', function () {
    tbl.classList.remove();
    tbl.classList.add("table", "table-striped", "table-info")
    fetch("https://jsonplaceholder.typicode.com/albums").then(response => {
        response.json().then(value => {
            let tr = `   <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">userId</th>
              <th scope="col">title</th>
            </tr>
          </thead>`
            value.forEach(item => {
                tr += `  <tr>
            <th scope="row">${item.id}</th>
            <td> ${item.userId} </td>
            <td>${item.title}</td>
          </tr>`
            })
            tbl.innerHTML = tr
        }).catch(error=>alert("error"))
    }).catch(error=>alert("error"))
})

photo.addEventListener('click', async function () {
    
    tbl.classList.remove();
    tbl.classList.add("table", "table-striped", "table-danger")
    let response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let value = await response.json();
    let tr = `   <thead>
     <tr>
       <th scope="col">id</th>
       <th scope="col">albumId</th>
       <th scope="col">title</th>
       <th scope="col">url</th>
       <th scope="col">photo</th>
     </tr>
   </thead>`
    for (let item in value) {
        tr += `  <tr>
    <th scope="row">${value[item].id}</th>
    <td> ${value[item].albumId} </td>
    <td>${value[item].title}</td>
    <td>${value[item].url}</td>
    <td><img src='${value[item].thumbnailUrl}'></td>
  </tr>`
    }
    tbl.innerHTML = tr
})

todo.addEventListener('click', async function () {
    tbl.classList.remove();
    tbl.classList.add("table", "table-striped", "table-warning")
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let value = await response.json();
    let tr = `   <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">userId</th>
      <th scope="col">title</th>
      <th scope="col">completed</th>
    </tr>
  </thead>`
    for (let item of value) {
        tr += `  <tr>
    <th scope="row">${item.id}</th>
    <td> ${item.userId} </td>
    <td>${item.title}</td>
    <td>${item.completed}</td>
  </tr>`
    }
    tbl.innerHTML = tr
})

user.addEventListener("click", async () => {
    tbl.classList.remove();
    tbl.classList.add("table", "table-striped", "table-dark")
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let value = await response.json();
    let tr = `   <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
      <th scope="col">company</th>
    </tr>
  </thead>`

    value.forEach(item => {
        tr += `  <tr>
    <th scope="row">${item.id}</th>
    <td> ${item.name} </td>
    <td>${item.username}</td>
    <td>${item.email}</td>
    <td><ol>
    <li>${item.address.street}</li>
    <li>${item.address.suite}</li>
    <li>${item.address.city}</li>
    <li>${item.address.zipcode}</li>
    <li>
    <ul>
    <li>${item.address.geo.lat}</li>
    <li>${item.address.geo.lng}</li>
    </ul>
    </li>
    </ol></td>
    <td>${item.phone}</td>
    <td>${item.website}</td>
    <td>
    <ul>
    <li>${item.company.name}</li>
    <li>${item.company.catchPhrase}</li>
    <li>${item.company.bs}</li>
    </ul>

    </td>
  </tr>`
    });

    tbl.innerHTML = tr;

})