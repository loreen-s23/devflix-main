// para utilizar um oponente crie o import na pagina que deseja
// coloque o descritivo entre <Footer>Descritivo</Footer>
// passe informação dentro da tag footer - link
// <Footer link={}>ProfCastello</Footer>
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";

const Footer = ({children, link}) => {
  return (
    <footer>
      <p>
        feito com <ion-icon name="heart" /> por {""}<a href={link} target="_blank">{""}{children}
        </a>
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/loreen-s23/meu-primeiro-repositorio"}/>
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/imloren_28/"}/>
        <SocialLinks icon={"logo-linkedin"} href={"https://www.linkedin.com/in/sophi-loren-a2513828b/"}/>
    </footer>
  );
};

export default Footer;
