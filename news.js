console.log("News Website");
// c279c8f928eb40468366771fb6f30fc6

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=c279c8f928eb40468366771fb6f30fc6', true);



xhr.onload = function () {
    let div=document.getElementById("div1");
    var json = JSON.parse(this.responseText);
    console.log(json);
    var article = json.articles;
    console.log(article);
    let newshtml = "";
    article.forEach(element => {
        console.log(element["content"]);
        let news = `<div class="card" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element['description']}</h5>
            <p class="card-text">${element['content']}</p>
            <a href=${element[`url`]} class="btn btn-primary">Watch Full News</a>
        </div>
    </div>`
    newshtml+=news;
    });
    div1.innerHTML=newshtml;
}

xhr.send();