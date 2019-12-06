// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response.data.topics);
            const newTopics = response.data.topics;
            newTopics.forEach(element => {
            const newTab = document.createElement('div');
            newTab.classList.add('tab');
            newTab.innerText = element;
            document.querySelector('.topics').appendChild(newTab);
        });
    })
    .catch(err => {
        console.log("the data was not returned", err);
    });