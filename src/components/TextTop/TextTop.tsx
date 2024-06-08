// src/components/Header.tsx
import style from "./TextTop.module.css";
import Link from "next/link";
import { Container, Nav, Navbar } from "reactstrap";

const TextTop = () => {
  return (
    <>
      <Container className={style.TextTop}>
        <h1>Fique à vontade para conhecer</h1>

        <h1 className={style.TextColor}>meu portfolio!</h1>

        <p className={`${style.paragraph} py-4 `}>
          Olá, meu nome é Henrique. Atualmente, estou cursando Engenharia de
          Software e deixei recentemente o Exército, onde servi por quatro anos,
          para me dedicar à área de desenvolvimento. Minha experiência militar
          me proporcionou disciplina e habilidades de trabalho em equipe, que
          agora aplico em meus estudos e projetos de software. Estou animado
          para explorar novas oportunidades no desenvolvimento de software e
          contribuir com soluções inovadoras.
        </p>
      </Container>
    </>
  );
};

export default TextTop;
