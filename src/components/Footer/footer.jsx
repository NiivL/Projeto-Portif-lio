
const Footer = () =>{
    return(
        <>
        <footer id="contact">
        
        <nav aria-label="navegação de links sociais">
            <ul className="footer_sociais">
                <li><a target="_blank" href="https://www.linkedin.com/in/nivaldo-lopes-a1559a292/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a target="_blank" href="https://www.instagram.com/niv_lopes/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a target="_blank" href="https://github.com/NiivL"><i className="fa-brands fa-github-alt"></i></a></li>
            </ul>
        </nav>
        <p className="footer_comercial">Todos os direitos reservados <span><i className="fa-solid fa-n"></i><i className="fa-solid fa-l"></i>  <i className="fa-regular fa-copyright"></i></span> - 2023</p>
    </footer>
        </>
    )
}

export default Footer;