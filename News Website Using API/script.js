let api = "2a9c8858181544e99b082df83d927a09";
let source = "bbc-news";

let news = document.getElementById("news");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let card = `<div class="accordion-item py-2">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
          <b>Breaking News ${index + 1} :</b>  ${element["title"]}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
          <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank" >Read more here</a></div>
        </div>
      </div>`;

      newsHtml += card;
    });
    news.innerHTML = newsHtml;
  }
  else{
    news.innerHTML="<b>Some Error Occured !!<b> ";
  }
};
xhr.send();
