import Image from "next/image";
import Link from "next/link";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <>
      <Container fluid style={{ background: "#222222", color:"#a7a7a7", paddingTop: "2rem", paddingBottom: "2rem"}} id="contato">
        <Container>
          <h1>Contato</h1>

          <p className="my-5">
            Sinta-se à vontade para entrar em contato comigo! Estou sempre aberto
            a novas oportunidades, colaborações e conversas interessantes. Se você
            tiver alguma dúvida, feedback ou apenas quiser dizer olá, não hesite
            em me enviar uma mensagem.
          </p>

          <div className="d-flex" style={{gap:"3rem"}}>
            <Link href="https://github.com/HenriqueBitencourtOliveira">
              <Image alt="" src="/github.svg" width={60} height={60}/>
            </Link>
            <Link href="mailto:brasiliahenrique@gmail.com">
              <Image alt="" src="/gmail.svg" width={60} height={60}/>
            </Link>
            <Link href="https://www.linkedin.com/in/henrique-bitencourt-oliveira-065b94207/">
              <Image alt="" src="/linkedin.svg" width={60} height={60}/>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
