var icon = document.getElementById('toggle-icon');
var navbarNav=document.getElementById('navbarNav');

  

  navbarNav.addEventListener('hidden.bs.offcanvas',function(){
    if(icon.classList.contains("fa-xmark")){
        animacao(); 
    }
  })

  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (rect.top <= windowHeight && rect.bottom >= 0);
  }



  window.addEventListener('scroll', function() {
      var currentScrollPosition = window.scrollY;

      if (!isElementVisible(document.getElementById('navbarTop'))) {
          document.getElementById('navbarBot').classList.add('fixado')

          
      } else {
          document.getElementById('navbarBot').classList.remove('fixado')

      }


  });

  
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