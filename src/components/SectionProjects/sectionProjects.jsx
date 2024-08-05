import { useEffect } from "react";


const SectionProjects = () => {
useEffect(()=> {
    const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
  const buttonGeral = document.querySelectorAll('.project_navegacao li');
  const buttonALL = document.querySelector('.project_models .all');
  
  listaALL.forEach((item)=>{
    item.classList.add('ativo');
  })
  
  function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
  }
  
  buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
  })
  
  function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });
  
    if(buttom == 'design'){
        lista[0].classList.add('ativo');
  
    }
    if(buttom == 'graphic'){
  
    }
  
    if(buttom == 'website'){
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }
  
    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }
  }
  
  buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } if(currentButton.classList.contains('design')){
            showLista(listaALL, "design")
        }
  
        if(currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic")
        }
  
        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website")
        }
  
        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all")
        }
    });
  });
})

    return (
        <section className="projects">
            <div className="sobre_titulo">
                <h1 id="portfolio">Meus Projetos</h1>
                <p>Aqui você pode ver meus projetos e minha evolução.</p>
                <div aria-label="Seção apenas de ilustrações de botões">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="project_models">
                <ul className="project_navegacao" aria-label="Navegação entre modelos expecificos de projetos">
                    <li className="all">All</li>
                    <li className="design">Design</li>
                    <li className="graphic">Graphic</li>
                    <li className="website">Websites</li>
                </ul>
            </div>
            <div className="projects_armazenamento">
                <ul aria-label="Navegação de projetos e websites">
                    <li ><img src="src/images/One-piece.png" alt="Site criado para ser um site do anime One Pierce" /></li>
                    <li ><img src="src/images/NLcalendar.png" alt="Site criado para ser uma agenda eletronica online" /></li>
                    <li ><img src="src/images/gerador-de-conselhos.png" alt="Site de gerador de conselhos" /></li>
                    <li ><img src="src/images/Api-do-github.png" alt="Projeto com Api do GitHub" /></li>
                </ul>
            </div>
            <a href="#inicio">Voltar para o Inicio</a>
        </section>
    )
};

export default SectionProjects;