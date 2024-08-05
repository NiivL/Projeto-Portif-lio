import { useEffect } from "react";


const SectionMyResume = () => {

    useEffect(() => {
        function sobreMim() {
            const experiencia = document.querySelectorAll('.experience_content div');
            const botao = document.querySelectorAll('.experience_content ul li')
            const education = document.querySelectorAll('.education_content div');
            const botaoEducation = document.querySelectorAll('.education_content ul li')


            experiencia[0].classList.add('ativo')
            botao[0].classList.add('ativo')
            education[0].classList.add('ativo')
            botaoEducation[0].classList.add('ativo')

            function slideShow(index) {
                experiencia.forEach((divisao) => {
                    divisao.classList.remove('ativo');
                });
                botao.forEach((item) => {
                    item.classList.remove('ativo')
                });
                experiencia[index].classList.add('ativo')
                botao[index].classList.add('ativo')
            }

            function slideShow2(index) {
                education.forEach((divisao) => {
                    divisao.classList.remove('ativo');
                });
                botaoEducation.forEach((item) => {
                    item.classList.remove('ativo')
                });
                education[index].classList.add('ativo')
                botaoEducation[index].classList.add('ativo')
            }


            botao.forEach((event, index) => {
                event.addEventListener('click', () => {
                    slideShow(index)
                });
            });

            botaoEducation.forEach((div, index) => {
                div.addEventListener('click', () => {
                    slideShow2(index)
                })
            })
        }
        sobreMim();
    })
    return (
        <section className="my_resume">
            <div className="sobre_titulo">
                <h1 id="resume">Meu Resumo</h1>
                <p>Mais um pouco sobre mim</p>
                <div aria-label="Seção apenas de ilustrações de botões">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="resume_gerenico">
                <h2 className="experience"><i className="fa-solid fa-handshake"></i>EXPERIÊNCIAS</h2>
                <div className="experience_content">
                    <div>
                        <span>2015 - 2019</span>
                        <h3>Contax S.A</h3>
                        <p>Operador de Telemarketing - Suporte Técnico </p>
                    </div>

                    <ul>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                    </ul>
                </div>
                <h2 className="education"><i className="fa-solid fa-book"></i>FORMAÇÃO</h2>
                <div className="education_content">
                    <div>
                        <span>2024 - cursando</span>
                        <h3>Graduação - Gran Faculdade</h3>
                        <p>Analise e desenvolvimento de sistemas</p>
                    </div>
                    <div>
                        <span>2023 - 2023</span>
                        <h3>O Instituto Federal de Educação, Ciência e Tecnologia.</h3>
                        <p>Projeto de Sistemas Web</p>
                    </div>
                    <div>
                        <span>2024 - 2024</span>
                        <h3>Fundação Bradesco</h3>
                        <p>Modelagem de dados</p>
                    </div>
                    <div>
                        <span>2024 - 2024</span>
                        <h3>Fundação Bradesco</h3>
                        <p>Implementação de dados</p>
                    </div>
                    <ul>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                    </ul>
                </div>
            </div>
            <div className="cursos">
                <div className="my_skill">
                    <h2><i className="fa-sharp fa-regular fa-star"></i>Minhas habilidades</h2>
                    <div className="skill_content">
                        <h3>HTML 5</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star-sharp-half-stroke"></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>CSS 3</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <li><i className="fa-regular fa-star-sharp-half-stroke"></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>PHP</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star-sharp-half-stroke"></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>REACT JS</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>JAVASCRIPT</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <li><i className="fa-regular fa-star-sharp-half-stroke"></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>GIT</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star-sharp-half-stroke"></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Banco de Dados</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star-sharp-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionMyResume;