// XHR  to -> fetch

const getUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const postUrl = 'http://jsonplaceholder.typicode.com/posts'

const postOptions = { 
  method: "POST",
   body: JSON.stringify('my-body'),
   title: JSON.stringify('Mytitle'),  

}


const http = {  
  get() {
    fetch(getUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
},
  post() {
    fetch(postUrl, postOptions )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
};

http.get()
http.post()
