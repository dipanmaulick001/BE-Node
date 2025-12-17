async function getPost() {
  console.log("Before request");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  console.log(data);
  console.log("After request");
}


getPost();
