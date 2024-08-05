import { useEffect } from "react";


const Navigation = () => {


    useEffect(() => {
        function ativacaoMenu() {
            const ativaMenu = document.querySelector('.fa-bars');
            const navMenu = document.querySelector('header .navegacao-primaria')


            ativaMenu.addEventListener('click', () => {
                ativaMenu.classList.toggle('fa-x')
                navMenu.classList.toggle('ativado')
            })
        }
        ativacaoMenu();


    });

    
    return (
        <>
            <header id="inicio">
                <h1><i className="fa-solid fa-n"></i><i className="fa-solid fa-l"></i></h1>
                <nav>
                    <ul aria-label="Navegação primária" className="navegacao-primaria">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Sobre mim</a></li>
                        <li><a href="#resume">Resumo</a></li>
                        <li><a href="#portfolio">Porfolio</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                    <i className="fa-solid fa-bars"></i>
                </nav>

            </header>

        </>
    )
}

export default Navigation;