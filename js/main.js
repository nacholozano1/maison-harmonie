
// Botón para subir

// NOTICE: This pen may appear to not work on mobile devices, but it is  due to the codepen footer and the browser's bottom menu bar that hide the button. It should work fine when implemented for your website

// used to avoid using 255, thus generating white-ish backgrounds that make text unreadable
const colorMax = 192;

// gets the breakpoint at which the scroll-to-top button should appear
const scrollBreakpoint = window.innerHeight * 13.5;

document.addEventListener('DOMContentLoaded', () => {
  randomizeBackgrounds();
  setupScrollListener();
  setupScrollEvent();  
});

// scrolls window to top
function setupScrollEvent() {
  const scrollButton = document.querySelector('.scroll-top');
  
  scrollButton.addEventListener('click', (e) => {
    // not the best solution until Safari/Edge support scroll behavior
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Thanks to Geroge Daniel https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari
    smoothVerticalScrolling(scrollButton.parentElement, 250, "top");
  });
}

// prepares the window for a scroll event to show the scroll button
function setupScrollListener() {  
   window.addEventListener('scroll', (e) => {
     const scrollButton = document.querySelector('.scroll-top');
     
     // const scrollOffset = document.scrollingElement.scrollTop;
     const scrollOffset = window.scrollY;
    
     if (scrollOffset >= scrollBreakpoint) {
       scrollButton.classList.add('visible');
     } else if (scrollOffset <= 0) {
       scrollButton.classList.remove('visible');
     }    
  });
}

function randomizeBackgrounds() {
  // get all the content containers
  const contentContainers = document.querySelectorAll('.content-container');
  
  [].forEach.call(contentContainers, container => {
    // assign random background
    container.style.background = `rgb(${randVal(colorMax)},${randVal(colorMax)},${randVal(colorMax)})`;
  });
}

// random between 0 to max
function randVal(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// uses a timeout to scroll to top
function smoothVerticalScrolling(e, time, where) {
  // gets the element's top position relative to the viewport
  const eTop = e.getBoundingClientRect().top;
  
  // divides the top offset into 100 steps to be ellapsed
  const eAmt = eTop / 100;
  
  // starting time
  let curTime = 0;
  
  // not to exceed the desired duration
  while (curTime <= time) {
    // call a function to execute at one hundreth of the desired scroll time
    window.setTimeout(SVS_B, curTime, eAmt, where);
    // increase by one hundreth of the desired time to execute exactly 100 times
    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  // scroll by half the hundredth of the top offset if destination is not top (since to center only involves scrolling either in the top or bottom half of the window)
  if(where == "center" || where == "") {
    window.scrollBy(0, eAmt / 2); 
  }
  // otherwise scroll the full amount
  if (where == "top") {
    window.scrollBy(0, eAmt);
  }    
}

// Carousel

var fancyCarousel = document.getElementById('fancy-carousel');
if (fancyCarousel && fancyCarousel.hasChildNodes()) {
  var imagesWrapper = document.createElement('div');
  var controlsWrapper = document.createElement('div');
  var prevArrow = document.createElement('div');
  var nextArrow = document.createElement('div');
  fancyCarousel.classList.add('fancy-carousel--active')
  imagesWrapper.classList.add('fancy-carousel__images-wrapper');
  controlsWrapper.classList.add('fancy-carousel__controls-wrapper');
  prevArrow.classList.add('fancy-carousel__prev-arrow');
  nextArrow.classList.add('fancy-carousel__next-arrow');
  controlsWrapper.appendChild(prevArrow);
  controlsWrapper.appendChild(nextArrow);
  fancyCarousel.appendChild(imagesWrapper);
  fancyCarousel.appendChild(controlsWrapper);

  var childNodes = fancyCarousel.childNodes;
  var imagesArray = [];
  for (var i = 0; i < childNodes.length; i++) {
    var currentNode = childNodes[i];
    if (currentNode.nodeName === 'IMG') {
      imagesArray.push(currentNode.src);
      currentNode.classList.add('hide');
    }
  }

  imagesWrapper.style.backgroundImage = `url(${imagesArray[0]})`;

  var currentImage = 0;
  var numberOfImages = imagesArray.length;

  prevArrow.addEventListener('click', function() {
    handleSlideshowArrow('prev')
  });
  nextArrow.addEventListener('click', function() {
    handleSlideshowArrow('next')
  });

  function handleSlideshowArrow(val) {
    if (val === 'prev') {
      if (currentImage > 0) {
        currentImage--;
      } else {
        currentImage = (numberOfImages - 1);
      }
    } else if (val === 'next') {
      if (currentImage < (numberOfImages - 1)) {
        currentImage++;
      } else {
        currentImage = 0;
      }
    }
    imagesWrapper.classList.add('fade-out');
    imagesWrapper.addEventListener('transitionend', handleTransitionEnd);
  }
  
  function handleTransitionEnd() {
    imagesWrapper.removeEventListener('transitionend', handleTransitionEnd);
    imagesWrapper.style.backgroundImage = 'url(' + imagesArray[currentImage] + ')';
    imagesWrapper.classList.remove('fade-out');
  }
}
