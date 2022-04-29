const locationUrl = new URLSearchParams(location.search);

function ativarLink(link){
  const elemento = document.getElementById(link);
  elemento.checked = true;
}
locationUrl.forEach(ativarLink);

/* Script para mostrar menu ativo */
const links = document.querySelectorAll('.header-menu a');

function linkAtivo(link){
  let url = window.location.href;
  let href = link.href;

  if(url.includes(href)){
    link.classList.add('active')
  }
}
links.forEach(linkAtivo);
//========================

const faqButton = document.querySelectorAll('.faq-content button');

function showFaq(faq){
  function handleClick (event){
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('active');
    const active = resposta.classList.contains('active');
    question.setAttribute('aria-expanded', active)
  }

  faq.addEventListener('click',handleClick)
}


faqButton.forEach(showFaq)


//Animation plugin
if(window.SimpleAnime){
  new SimpleAnime();
}
