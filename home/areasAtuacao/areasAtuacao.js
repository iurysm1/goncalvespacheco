import * as utilidades from "/utilities.js";

function animateIfVisible() {
    
    let divAreaAtuacao= document.getElementById('areasAtuacao')
    if (utilidades.isElementVisibleExport(divAreaAtuacao)) {
        let cards= document.querySelectorAll('.card').forEach(cardAtual=>{
            cardAtual.classList.add('slideCard')

        })
    }
  }
  
  window.addEventListener('scroll', animateIfVisible);
  animateIfVisible();


document.querySelectorAll('.content').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('rotate');
    });
    

});