var backgrounds = document.querySelectorAll('.background');

const slider = document.querySelector('.slider-images');

const images = Array.from(slider.children);

let imageIndex=0
let pauserSlide;

function updateSlider(){

    if(imageIndex+1>images.length-1){
        imageIndex=0
    }else{
        imageIndex=imageIndex+1
    }

    images.forEach(image=>{
        image.classList.remove('active','previous','next','inactive')
    });

    images[imageIndex].classList.add('active');

    if(imageIndex+1>images.length-1){
        images[0].classList.add('next')
    }else{
        images[imageIndex+1].classList.add('next')
    }

    if (imageIndex - 1 < 0) {
        images[images.length-1].classList.add('previous');
    } else {
        images[imageIndex - 1].classList.add('previous');
    }
    
    images.forEach(image=>{
        if(!image.classList.contains('next')&&!image.classList.contains('previous')&&!image.classList.contains('active')){
            image.classList.add('inactive')
        }
        }
    )

    backgrounds.forEach((background)=>{
        background.style.opacity=0;
    })

    if(images[imageIndex].classList.contains('active')){
        backgrounds[imageIndex].style.opacity=1;
    }
}



function prevSlide(){

    if (imageIndex - 1 >= 0) {
        imageIndex=imageIndex-1;
    } else {
        imageIndex=images.length - 1;
    }

    images.forEach(image=>{
        image.classList.remove('active','previous','next','inactive');
    });

    console.log("index active: "+imageIndex)
    images[imageIndex].classList.add('active');

    
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    images.forEach(image=>{
        if(!image.classList.contains('next')&&!image.classList.contains('previous')&&!image.classList.contains('active')){
            image.classList.add('inactive')
        }
        }
    )

    backgrounds.forEach((background)=>{
        background.style.opacity = 0;
    });

    if(images[imageIndex].classList.contains('active')){
        backgrounds[imageIndex].style.opacity = 1;
    }


}

startSlider()

function pauseSlider(){
    clearInterval(pauserSlide)
}

function startSlider(){
    pauserSlide=setInterval(updateSlider,7000)
}

const classePauseSlide = document.querySelectorAll('.sliderFuncionarios');

classePauseSlide.forEach(slider => {
    slider.addEventListener('mouseenter', pauseSlider);
    slider.addEventListener('mouseleave', startSlider);
});

