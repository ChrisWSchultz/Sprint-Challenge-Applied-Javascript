// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const spanDate = document.createElement('span');
    spanDate.classList.add('date');
    let currentDate = Date.now();
    spanDate.textContent = 'Maytember 34th';
    headerDiv.appendChild(spanDate);

    const title = document.createElement('h1');
    title.textContent = "Lambda Times";
    headerDiv.appendChild(title);

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');
    spanTemp.textContent = '98 °';
    headerDiv.appendChild(spanTemp);

    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());