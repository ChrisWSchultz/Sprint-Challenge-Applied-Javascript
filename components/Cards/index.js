// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardComponent(article) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("card");

    const headline = document.createElement('div');
    headline.classList.add("headline");
    headline.textContent = article.headline;

    const authorDiv = document.createElement('div');
    authorDiv.classList.add("author");

    const imageDiv = document.createElement('div');
    imageDiv.classList.add("img-container");

    const image = document.createElement('img');
    image.src = article.authorPhoto;

    const authorSpan = document.createElement('span');
    authorSpan.textContent = article.authorName;

    imageDiv.appendChild(image);

    authorDiv.appendChild(imageDiv);
    authorDiv.appendChild(authorSpan);

    cardDiv.appendChild(headline);
    cardDiv.appendChild(authorDiv);

    return cardDiv;
}

const cardContainer = document.querySelector('.cards-container');

let topics = ["javascript","bootstrap","technology","jquery","node"];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        topics.forEach((item) => {
            let topic = response.data.articles[item];
            topic.forEach((article) => {
                cardContainer.appendChild(cardComponent(article));
            })
        })
    })
    .catch((err) => {
        console.log(err);
    });