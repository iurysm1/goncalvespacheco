

var navbarNav=document.getElementById('navbarNav');
var checkbox = document.getElementById('checkbox')
  

  navbarNav.addEventListener('hidden.bs.offcanvas',function(){
    if(this.classList.contains("show","showing")){
      checkbox.checked=true;
    }else{
      checkbox.checked=false;
    }
  })

  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (rect.top <= windowHeight && rect.bottom >= 0);
  }



  window.addEventListener('scroll', function() {

      if (!isElementVisible(document.getElementById('navbarTop'))) {
          document.getElementById('navbarBot').classList.add('fixado')

          
      } else {
          document.getElementById('navbarBot').classList.remove('fixado')

      }


  });



  export function isElementVisibleExport(element){
      return isElementVisible(element)
  }

  
  