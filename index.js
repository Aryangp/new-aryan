console.log("hello world")
// 6bc556e70bf842a8acc9bdd4091cb4ce
let news = document.getElementById("newsAccordion")
// function fetchnews(){
//     fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=6bc556e70bf842a8acc9bdd4091cb4ce").
//     then(response => response.json).then(data=> console.log(data))
// }
// fetchnews()
const xhr = new XMLHttpRequest();

// Open the object
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

// USE THIS FOR POST REQUEST
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=6bc556e70bf842a8acc9bdd4091cb4ce', true);
xhr.getResponseHeader('Content-type', 'application/json');






// What to do when response is ready



xhr.onload = function () {
  if (this.status === 200) {

    let json = JSON.parse(this.responseText)
    let article = json.articles
    console.log(article)
    let newsHtml = ""
    article.forEach(function (element, index) {
      let newsHandle = `<div class="card">
           <div class="card-header" id="heading${index}">
             <h5 class="mb-0">
               <button
                 class="btn btn-link collapsed"
                 data-toggle="collapse"
                 data-target="#collapse${index}"
                 aria-expanded="true"
                 aria-controls="collapse${index}"
               >
               <b> Breaking news ${index + 1} :</b> ${element.title} 
               </button>
             </h5>
           </div>
           
           <div
             id="collapse${index}"
             class="collapse"
             aria-labelledby="heading${index}"
             data-parent="#newsAccordion"
           >
             <div class="card-body">
              ${element.content}   <a href="${element.url}" target="_blank">Read more news </a>
             </div>
           </div>
           </div>`
      newsHtml += newsHandle
    })
    newsAccordion.innerHTML = newsHtml

  } else {
    console.log(error)
  }
}


// send the request

xhr.send();


