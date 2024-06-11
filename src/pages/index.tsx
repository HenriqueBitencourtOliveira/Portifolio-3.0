import Header from "../components/Header/Header";
import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "reactstrap";

import Buttons from "@/components/Buttons/Buttons";
import Image from "next/image";
import TextTop from "@/components/TextTop/TextTop";
import Languages from "@/components/Languages/Languages";
import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portifolio 3.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="py-5 text-center">
          <div id="inicio" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <TextTop />
            <Image
              style={{ borderRadius: "50%", objectFit: "cover" }}
              src={"/teste2.jpeg"}
              alt=""
              width={250}
              height={250}
              className="mb-5"
            />
            <Buttons />
          </div>

          <Languages />

          <div id="projetos">
            <Cards />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
