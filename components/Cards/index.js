// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data);
        for (const myArticle in response.data.articles) {
            articleBuilder(myArticle, response.data.articles);
        }
    })
    
    .catch(err => {
        console.log("the data was not returned", err);
    });

function articleBuilder (myArticle, articles){
        articles[myArticle].forEach(element => {
        const newCard = document.createElement('div');
        newCard.classList.add('card');      
        const eHeadline = document.createElement('div');
        eHeadline.classList.add('headline');
        eHeadline.textContent = element.headline;
        newCard.appendChild(eHeadline);      
        const eAuthor = document.createElement('div');
        const authorImgContainer = document.createElement('div');
        authorImgContainer.classList.add('img-container');
        const authorImg = document.createElement('img');
        authorImg.setAttribute('src', element.authorPhoto);
        authorImgContainer.appendChild(authorImg);
        eAuthor.appendChild(authorImgContainer);
        eAuthor.classList.add('author');
        const eAuthorBy = document.createElement('span');
        eAuthorBy.textContent = 'By '+ element.authorName;
        eAuthor.appendChild(eAuthorBy);
        newCard.appendChild(eAuthor);
        document.querySelector('.cards-container').appendChild(newCard);
    });
}