/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselBuilder(picArray){
    const myCarousel = document.createElement('div');
    myCarousel.classList.add('carousel');
    const myLeftBtn = document.createElement('div');
    myLeftBtn.classList.add('left-button');
    myLeftBtn.innerText = ' < '
    myCarousel.appendChild(myLeftBtn);
    picArray.forEach(element => {        
      const myImage = document.createElement('img');
      myImage.setAttribute('src', element);
      myCarousel.appendChild(myImage);
    });
    const myRightBtn = document.createElement('div');
    myRightBtn.classList.add('right-button');
    myRightBtn.innerText = ' > '
    myCarousel.appendChild(myRightBtn);
    document.querySelector('.carousel-container').appendChild(myCarousel);
}
carouselBuilder(["./assets/carousel/mountains.jpeg","./assets/carousel/computer.jpeg","./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"]);

document.querySelector('.carousel img').style.display = 'flex';
document.addEventListener('DOMContentLoaded',function(event){
  debugger;
  document.querySelector('.carousel img:first').style('dislay: flex');
});

