import * as utilidades from "/utilities.js";


  function animateIfVisible() {
    const h1Slogan = document.getElementById('fraseH1');
    const h2Slogan  = document.getElementById('fraseH2');
    const h3Slogan  = document.getElementById('fraseH3');

    if (utilidades.isElementVisibleExport(h1Slogan)) {
      h1Slogan.classList.add('h1slide');
      h2Slogan.classList.add('h2slide');
      h3Slogan.classList.add('h3slide');
    }else{
        h1Slogan.classList.remove('h1slide');
        h2Slogan.classList.remove('h2slide');
        h3Slogan.classList.remove('h3slide');
    }
  }
  
  window.addEventListener('scroll', animateIfVisible);
  animateIfVisible();