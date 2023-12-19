var icon = document.getElementById('toggle-icon');
var navbarNav=document.getElementById('navbarNav');

  

  navbarNav.addEventListener('hidden.bs.offcanvas',function(){
    if(icon.classList.contains("fa-xmark")){
        animacao(); 
    }
  })
  
  
  function animacao() {
    var iconElement = document.getElementById('toggle-icon');
    
    iconElement.classList.add('icon-change-animation');

    setTimeout(function(){
        if (iconElement.classList.contains('fa-bars')) {
            iconElement.classList.remove('fa-bars');
            iconElement.classList.add('fa-xmark');
        } else {
            iconElement.classList.remove('fa-xmark');
            iconElement.classList.add('fa-bars');
        }
        setTimeout(function () {
            iconElement.classList.remove('icon-change-animation');
          }, 500);
    },50) 
    
    
  }