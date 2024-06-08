// components/Cards/Cards.tsx
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectCard from './Card';
import style from './Card.module.css'

const projects = [
    {
      title: 'SpaceX',
      description: 'Website inspirado na SpaceX, desenvolvido para praticar o uso do BootStrap, proporcionando uma interface responsiva e moderna.',
      imageUrl: '/spaceX.png',
      link: 'https://henriquebitencourtoliveira.github.io/Projeto-SpaceX/'
    },
    {
      title: 'Calculadora JS',
      description: 'Aplicação de calculadora criada para aprimorar habilidades em JavaScript, com funcionalidades básicas de operações matemáticas.',
      imageUrl: '/Calculadora.png',
      link: 'https://henriquebitencourtoliveira.github.io/Calculadora/'
    },
    {
      title: 'Portfólio 2.0',
      description: 'Meu segundo portfólio online, desenvolvido com HTML, CSS, JS e BootStrap, apresentando meus trabalhos e habilidades.',
      imageUrl: '/portifolio 2.0.png',
      link: 'https://henriquebitencourtoliveira.github.io/novo-portifolio/'
    },
    {
      title: 'E-commerce NEXT.JS',
      description: 'Projeto de um site de comércio eletrônico, construído com Next.js para praticar SSR e SSG, oferecendo uma experiência de compra rápida e eficiente.',
      imageUrl: '/nextjs-ecomerce.png',
      link: 'https://black-nextjs-azure.vercel.app/.com'
    },
    {
      title: 'Pokedex',
      description: 'Aplicação Pokedex criada utilizando TypeScript e consumindo a PokeAPI, permitindo a busca e visualização de detalhes sobre diversos Pokémons.',
      imageUrl: '/pokedex.png',
      link: 'https://pokedex-sigma-umber.vercel.app/'
    },
    {
      title: 'Dashboard REACT',
      description: 'Primeiro projeto utilizando React, consistindo em um painel de controle (dashboard) para visualização e gerenciamento de dados.',
      imageUrl: '/Dashboard.png',
      link: 'https://react-stock-lac.vercel.app/'
    }
  ];
  

const Cards: React.FC = () => {
  return (
    <Container className={style.container}>
         <h1 className={style.titleText}>Projetos</h1>
      <Row>
        {projects.map((project, index) => (
          <Col sm="4" key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
