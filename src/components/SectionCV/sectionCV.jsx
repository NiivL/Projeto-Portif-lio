import { useEffect } from "react";


const SectionCV = () => {

    useEffect(()=> {
        function escrevendoLetra(){
            function ativaLetra(elemento){
                const arrTexto = elemento.innerHTML.split('');
                elemento.innerHTML  = '';
                arrTexto.forEach((letra, i)=>{
                    setTimeout(()=>{
                        elemento.innerHTML += letra; 
                    }, 75 * i);
                });
            }
            const titulo = document.querySelector('.digitando');
            
            ativaLetra(titulo);
          }
          escrevendoLetra();
    }, [])

    return (
        <>
            <section  aria-label="seção curriculo dowload Nivaldo" className="section-div">
                <div>
                    <h2>Olá! Eu sou um</h2>
                    <h2 className="digitando">Desenvolvedor Web</h2>
                    <p>Seja bem vindo ao portifólio!</p>
                    <a href="#">Dowload CV</a>
                </div>
                <img src="src/images/NivaldoLopes.jpeg" alt="ilustrativa imagem de uma pessoa" />
            </section>
        </>
    );
};

export default SectionCV;