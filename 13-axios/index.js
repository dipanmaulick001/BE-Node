const axios = require("axios");

async function getPost() {
  console.log("Before request");

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  console.log("After request");
  console.log(response.data);
}

getPost();
