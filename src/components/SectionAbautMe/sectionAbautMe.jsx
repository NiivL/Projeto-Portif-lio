

const SectionAbautMe = () => {
    return (
        <>
            <main>
                <article aria-label="seção sobre mim" className="sobre">
                    <div className="sobre_titulo">
                        <h1 id="about">Sobre mim</h1>
                        <p>Perfil Profissional</p>
                        <div aria-label="Seção apenas de ilustrações de botões">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <img src="/Projeto-Portifolio/src/images/NivaldoLopes.jpeg" alt="imagem de uma pessoa ilustrativa" />
                    <div className="sobre_conteudo">
                        <div className="sobre_texto">
                            <h1>Eu sou Nivaldo Lopes</h1>
                            <p>Sou um desenvolvedor júnior apaixonado por tecnologia e programação. Desde jovem, sempre fui fascinado pelo mundo digital e, ao longo do tempo, desenvolvi minhas habilidades em diversas linguagens e ferramentas de desenvolvimento web.
                                <br />
                                <br />
                                Estou em constante busca por novas oportunidades e desafios que me permitam crescer profissionalmente e aplicar meus conhecimentos em projetos reais. Meu objetivo é me especializar cada vez mais nas tecnologias que já domino e expandir meu repertório com novas linguagens e frameworks.
                            </p>
                        </div>
                        <div className="sobre_info">
                            <p><i className="fa-solid fa-location-dot"></i>Endereço: Pernambuco, Brasil</p>
                            <p><i className="fa-sharp fa-solid fa-globe"></i>Idiomas falado: Português</p>
                            <p><i className="fa-solid fa-flag"></i>Nationalidade: Brasileiro</p>
                            <p><i className="fa-solid fa-envelope"></i>Email: nivaldolsrj@gmail.com</p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default SectionAbautMe;