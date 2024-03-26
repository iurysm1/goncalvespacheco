import * as utilidades from "/utilities.js";

function animateIfVisible() {
    
    let faixaAzul= document.getElementById('faixaAzulHorizontalDireitaBorda')
    if (utilidades.isElementVisibleExport(faixaAzul)) {
        faixaAzul.classList.add('animationFaixaAzul')
    }else{
        faixaAzul.classList.remove('animationFaixaAzul')

    }
  }

  window.addEventListener('scroll', animateIfVisible);
  animateIfVisible();
