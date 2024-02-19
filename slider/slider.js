var backgrounds = document.querySelectorAll('.background');

const slider = document.querySelector('.slider-images');

const images = Array.from(slider.children);

let imageIndex=0
let pauserSlide;

var nome = document.getElementById('nomeFuncionario');
var sobre = document.getElementById('sobreFuncionario');

document.addEventListener("DOMContentLoaded", function() {
    nome.style.opacity=1;
    sobre.style.opacity=1;
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
s
classePauseSlide.forEach(slider => {
    slider.addEventListener('mouseenter', pauseSlider);
    slider.addEventListener('mouseleave', startSlider);
});


function trocarDados(){
    var facebook = document.getElementById('fbFuncionario');
    var instagram = document.getElementById('igFuncionario');
    
    
    images.forEach(image=>{
        if(image.classList.contains("active")){
            var altFoto = image.alt;
        switch (altFoto){
            case 'luana':
                nome.style.opacity=0;
                sobre.style.opacity=0;
                
                setTimeout(() => {
                nome.style.opacity=1;
                sobre.style.opacity=1;
                nome.textContent="LUANA SILVEIRA MARQUES"
                sobre.textContent="Advogada. Especialista em Direito Imobiliário. Formada pela Universidade do Vale do Itajaí - UNIVALI. Inscrita na Ordem dos Advogados do Brasil com o nº 49.290. Pós-graduada em Direito e Negócios Imobiliários pelo Complexo de Ensino Superior de Santa Catarina - CESUSC. Pós graduanda em Direito Ambiental e Urbanístico. Direito Tributário - Fundação Getúlio Vargas - FGV Auditora do TJD - Tribunal de Justiça do Futebol de SC. Ex-Presidente da Subcomissão Jovem Advocacia da 30° Subseção - OAB/SC. Ex-Presidente da Comissão de Direito Imobiliário da 30° Subseção - OAB/SC."
                }, 900);
                
                break;

            case 'marlon':
                nome.style.opacity=0;
                sobre.style.opacity=0;
                
                setTimeout(() => {
                nome.style.opacity=1;
                sobre.style.opacity=1;
                nome.textContent="MARLON TESTONI BATISTI"
                sobre.textContent="Sócio. Formado pela Universidade do Sul de Santa Catarina - UNISUL. Inscrito na Ordem dos Advogados do Brasil com o n. 32.631. Pós-graduado em Direito Material e Processual do Trabalho pela Faculdade de Direito Damásio de Jesus. Pós-graduado em Direito Constitucional pela Anhanguera. Ex-Assessor Jurídico do Município de Imbituba/SC. Ex-Procurador do Município de Imbituba. Ex-Assessor Jurídico da Presidência da Câmara Municipal de Imbituba. Membro da Associação Catarinense dos Advogados Trabalhistas - ACAT. Delegado da Caixa de Assistência dos Advogados de Santa Catarina (gestão 2019/2021 e 2022/2024). Diretor Jurídico da Associação Empresarial de Imbituba desde 2019."
                }, 900);
                
                break;
            case 'felipe':
                nome.style.opacity=0;
                sobre.style.opacity=0;
                
                setTimeout(() => {
                nome.style.opacity=1;
                sobre.style.opacity=1;
                nome.textContent="FELIPE MARLONDREY BALTAZAR CARDOSO"
                sobre.textContent="Advogado, Formado pelo Centro Universitário Barriga Verde – UNIBAVE, Inscrito na Ordem dos Advogados do Brasil sob o nº 51.237. Com atuação profissional no Município de Treze de Maio e Região. Pós-Graduando em Direito Administrativo – Damásio Educacional, Criciúma/SC. Membro da Comissão de Direito Público da 6ª Subseção da OAB/SC – Tubarão."
                }, 900);
                
                break;
                
        }
        }
        
        
    })
}

