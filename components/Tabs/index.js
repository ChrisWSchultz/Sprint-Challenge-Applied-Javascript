// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsElement = document.querySelector('.topics');

function tabComponent(topic) {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topic;
    return tabDiv;
}

let tabs;

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( (data) => {
        tabs = data.data.topics;
        tabs.forEach( (topic) => {
           topicsElement.appendChild(tabComponent(topic));
        })
    })
    .catch( (err) => {
        console.log(err)
    });
