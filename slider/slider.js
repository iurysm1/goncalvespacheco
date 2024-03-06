var backgrounds = document.querySelectorAll('.background');



const slider = document.querySelector('.slider-images');

const images = Array.from(slider.children);

let imageIndex=0
let pauserSlide;


var iconSobreMobile = document.getElementById('iconSobreMobile')
var nome = document.getElementById('nomeFuncionario');
var sobre = document.getElementById('sobreFuncionario');
var nomeMobile = document.getElementById('nomeFuncionarioMobile');
var sobreMobile = document.getElementById('sobreFuncionarioMobile');
var cargo = document.getElementById('cargoFuncionario');
var cargoMobile = document.getElementById('cargoFuncionarioMobile');
var elementosOpacityAnimation=[iconSobreMobile,nome,sobre,nomeMobile,sobreMobile, cargo, cargoMobile];


document.addEventListener("DOMContentLoaded", function() {
    
    setOpacity(1)
});

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

    
    images.forEach(imagem=>{
        if(!imagem.classList.contains('next')&&!imagem.classList.contains('previous')&&!imagem.classList.contains('active')){
            imagem.classList.add('inactive');
        }
    })
    
    
    backgrounds.forEach((background)=>{
        background.style.opacity = 0;
        background.classList.remove('backgroundprevious-change-animation')
        background.classList.remove('background-change-animation')
        
    });

    if(images[imageIndex].classList.contains('active')){
        backgrounds[imageIndex].style.opacity = 1;
        backgrounds[imageIndex].classList.add('background-change-animation')
    }

    trocarDados()
    
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
        background.classList.remove('backgroundprevious-change-animation')
        background.classList.remove('background-change-animation')
    });

    if(images[imageIndex].classList.contains('active')){
        backgrounds[imageIndex].style.opacity = 1;
        backgrounds[imageIndex].classList.add('backgroundprevious-change-animation')
    }

    trocarDados()

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


function setOpacity(opactiynumber){

    elementosOpacityAnimation.forEach(element=>{
        element.style.opacity=opactiynumber;
    })
}

function trocarDados(){
    var facebook = document.getElementById('LinkFacebookSlider');
    var instagram = document.getElementById('LinkInstagramSlider');

    var facebookMobile=document.getElementById('facebookMobileSlider')
    var instagramMobile=document.getElementById('instagramMobileSlider')
    
    
    
    images.forEach(image=>{
        if(image.classList.contains("active")){
            var altFoto = image.alt;
        switch (altFoto){
            case 'luana':
                setOpacity(0)
                facebook.href="https://instagram.com/luanamarques0";
                instagram.href="https://instagram.com/luanamarques0";
                facebookMobile.href="https://instagram.com/luanamarques0";
                instagramMobile.href="https://instagram.com/luanamarques0";
                
                setTimeout(() => {
                setOpacity(1)
                nome.textContent="LUANA SILVEIRA MARQUES"
                sobre.textContent="Formada em Direito pela Universidade do Vale do Itajaí, pós-graduada em Direito e Negócios Imobiliários, pós graduada em Direito Ambiental, pós graduanda em Direito Processual Civil."
                cargo.textContent="Sócia";    
                

                nomeMobile.textContent="LUANA SILVEIRA MARQUES"
                sobreMobile.textContent="Formada em Direito pela Universidade do Vale do Itajaí, pós-graduada em Direito e Negócios Imobiliários, pós graduada em Direito Ambiental, pós graduanda em Direito Processual Civil."
                cargoMobile.textContent="Sócia";
                }, 900);
                
                break;

            case 'marlon':
                setOpacity(0)
                facebook.href="https://instagram.com/luanamarques0";
                instagram.href="https://instagram.com/marlonbatisti";
                facebookMobile.href="https://instagram.com/luanamarques0";
                instagramMobile.href="https://instagram.com/marlonbatisti";
                setTimeout(() => {
                setOpacity(1)

                nome.textContent="MARLON TESTONI BATISTI"
                sobre.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, possui especialização em Direito Material e Processual do Trabalho, e especialização em Direito Constitucional."
                cargo.textContent="Sócio"

                nomeMobile.textContent="MARLON TESTONI BATISTI"
                sobreMobile.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, possui especialização em Direito Material e Processual do Trabalho, e especialização em Direito Constitucional."
                cargoMobile.textContent="Sócio"
                }, 900);
                
                break;
            case 'felipe':
                setOpacity(0)
                facebook.href="https://instagram.com/luanamarques0";
                instagram.href="https://instagram.com/cardosofmb";
                
                facebookMobile.href="https://instagram.com/luanamarques0";
                instagramMobile.href="https://instagram.com/cardosofmb";

                setTimeout(() => {
                setOpacity(1)
                nome.textContent="FELIPE MARLONDREY BALTAZAR CARDOSO"
                sobre.textContent="Formado em Direito pelo Centro Universitário Barriga Verde, pós-graduado em Direito Administrativo."
                cargo.textContent="Associado"


                nomeMobile.textContent="FELIPE MARLONDREY BALTAZAR CARDOSO"
                sobreMobile.textContent="Formado em Direito pelo Centro Universitário Barriga Verde, pós-graduado em Direito Administrativo."
                cargoMobile.textContent="Associado"

                
                }, 900);
                
                break;
            
            case 'orlando':
                setOpacity(0)
                facebook.href="https://instagram.com/luanamarques0";
                instagram.href="https://instagram.com/orlandogoncalvespa";
                
                facebookMobile.href="https://instagram.com/luanamarques0";
                instagramMobile.href="https://instagram.com/orlandogoncalvespa";

                setTimeout(() => {
                setOpacity(1)
                nome.textContent="ORLANDO GONÇALVES PACHECO JÚNIOR"
                sobre.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, Pós-graduado em Direito Processual Civil e com especialidade em Direito Empresarial."
                cargo.textContent="Sócio Fundador"


                nomeMobile.textContent="ORLANDO GONÇALVES PACHECO JÚNIOR"
                sobreMobile.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, Pós-graduado em Direito Processual Civil e com especialidade em Direito Empresarial."
                cargoMobile.textContent="Sócio Fundador"

                
                }, 900);
                
                break;

                case 'eduardo':
                    setOpacity(0)
                    facebook.href="https://instagram.com/luanamarques0";
                    instagram.href="https://instagram.com/edufaustina";

                    facebookMobile.href="https://instagram.com/luanamarques0";
                    instagramMobile.href="https://instagram.com/edufaustina";
                    setTimeout(() => {
                    setOpacity(1)
                    nome.textContent="EDUARDO FAUSTINA DA ROSA"
                    sobre.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, possuí especialização em Direito Material e Processual Penal e formação em Agente de Desenvolvimento Regional."
                    cargo.textContent="Sócio"
    
    
                    nomeMobile.textContent="EDUARDO FAUSTINA DA ROSA"
                    sobreMobile.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, possuí especialização em Direito Material e Processual Penal e formação em Agente de Desenvolvimento Regional."
                    cargoMobile.textContent="Sócio"
    
                    
                    }, 900);
                    
                    break;

                case 'guilherme':
                    setOpacity(0)
                    facebook.href="https://instagram.com/luanamarques0";
                    instagram.href="https://instagram.com/adv.guilhermetavares";
                    
                    facebookMobile.href="https://instagram.com/luanamarques0";
                    instagramMobile.href="https://instagram.com/adv.guilhermetavares";
                    
                    setTimeout(() => {
                    setOpacity(1)
                    nome.textContent="GUILHERME TAVARES DE JESUS"
                    sobre.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, possui especialização em Direito Material Civil."
                    cargo.textContent="Associado"
    
    
                    nomeMobile.textContent="GUILHERME TAVARES DE JESUS"
                    sobreMobile.textContent="Formado em Direito pela Universidade do Sul de Santa Catarina, possui especialização em Direito Material Civil."
                    cargoMobile.textContent="Associado"
    
                    
                    }, 900);
                    
                    break;
                case 'joao':
                    setOpacity(0)
                    facebook.href="https://instagram.com/luanamarques0";
                    instagram.href="https://instagram.com/jgabrielkuntze";
                    
                    facebookMobile.href="https://instagram.com/luanamarques0";
                    instagramMobile.href="https://instagram.com/jgabrielkuntze";

                    setTimeout(() => {
                    setOpacity(1)
                    nome.textContent="JOÃO GABRIEL KUNTZE"
                    sobre.textContent="Formado em Direito pelo Complexo de Ensino Superior de Santa Catarina, pós-graduado em Direito Material Criminal."
                    cargo.textContent="Associado"
    
    
                    nomeMobile.textContent="JOÃO GABRIEL KUNTZE"
                    sobreMobile.textContent="Formado em Direito pelo Complexo de Ensino Superior de Santa Catarina, pós-graduado em Direito Material Criminal."
                    cargoMobile.textContent="Associado"
    
                    
                    }, 900);
                    
                    break;
                
                case 'melina':
                    setOpacity(0)
                    facebook.href="https://instagram.com/luanamarques0";
                    instagram.href="https://instagram.com/melinafechine";
                    
                    facebookMobile.href="https://instagram.com/luanamarques0";
                    instagramMobile.href="https://instagram.com/melinafechine";
                    
                    setTimeout(() => {
                    setOpacity(1)
                    nome.textContent="MELINA FECHINE MODOLON FILETI"
                    sobre.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduada em Direito Material e Processual Tributário."
                    cargo.textContent="Associada"
    
    
                    nomeMobile.textContent="MELINA FECHINE MODOLON FILETI"
                    sobreMobile.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduada em Direito Material e Processual Tributário."
                    cargoMobile.textContent="Associada"
    
                    
                    }, 900);
                    
                    break;
                case 'isabella':
                    setOpacity(0)
                    facebook.href="https://instagram.com/luanamarques0";
                    instagram.href="https://instagram.com/isabella.testoni";
                    
                    facebookMobile.href="https://instagram.com/luanamarques0";
                    instagramMobile.href="https://instagram.com/isabella.testoni";
                    
                    setTimeout(() => {
                    setOpacity(1)
                    nome.textContent="ISABELLA PEREIRA TESTONI BATISTI"
                    sobre.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduada em Direito Material Empresarial e Contratual, graduanda em Direito do Trabalho."
                    cargo.textContent="Associada"


                    nomeMobile.textContent="ISABELLA PEREIRA TESTONI BATISTI"
                    sobreMobile.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduada em Direito Material Empresarial e Contratual, graduanda em Direito do Trabalho."
                    cargoMobile.textContent="Associada"

                    
                    }, 900);
                
                    break;
                case 'anna':
                    setOpacity(0)
                    facebook.href="https://instagram.com/luanamarques0";
                    instagram.href="https://instagram.com/anna.attanasio0";
                    
                    facebookMobile.href="https://instagram.com/luanamarques0";
                    instagramMobile.href="https://instagram.com/anna.attanasio0";
                    
                    setTimeout(() => {
                    setOpacity(1)
                    nome.textContent="ANNA KAROLINA ATTANASIO"
                    sobre.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduada em Direito de Família e Direito Imobiliário."
                    cargo.textContent="Associada"


                    nomeMobile.textContent="ANNA KAROLINA ATTANASIO"
                    sobreMobile.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduada em Direito de Família e Direito Imobiliário."
                    cargoMobile.textContent="Associada"

                    
                    }, 900);
                
                    break; 
                    case 'suzani':
                        setOpacity(0)
                        facebook.href="https://instagram.com/luanamarques0";
                        instagram.href="https://instagram.com/suzanifaustina";
                        
                        facebookMobile.href="https://instagram.com/luanamarques0";
                        instagramMobile.href="https://instagram.com/suzanifaustina";
                        
                        setTimeout(() => {
                        setOpacity(1)
                        nome.textContent="SUZANI FAUSTINA DA ROSA"
                        sobre.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduanda em Advocacia Criminal."
                        cargo.textContent="Associada"
    
    
                        nomeMobile.textContent="SUZANI FAUSTINA DA ROSA"
                        sobreMobile.textContent="Formada em Direito pela Universidade do Sul de Santa Catarina, pós-graduanda em Advocacia Criminal."
                        cargoMobile.textContent="Associada"
    
                        
                        }, 900);
                    
                        break; 
        }
        }
        
        
    })
}

