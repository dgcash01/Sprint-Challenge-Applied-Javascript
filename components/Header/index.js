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
    const eHeader = document.createElement('div');
    eHeader.classList.add ('header');
    const eSpan = document.createElement('span');
    eSpan.classList.add ('date');
    eSpan.textContent = 'SMARCH 28, 2019';
    const eHone = document.createElement('h1');
    eHone.textContent = 'Lambda Times';    
    const eTemp = document.createElement('span');
    eTemp.classList.add ('temp');
    eTemp.textContent = '98°';
    eHeader.appendChild(eSpan);
    eHeader.appendChild(eHone);
    eHeader.appendChild(eTemp);

    document.querySelector('.header-container').appendChild(eHeader);
}
Header ();


