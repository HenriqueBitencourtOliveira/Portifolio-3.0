import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from "next/app";
import 'aos/dist/aos.css'; // Importando os estilos do AOS
// @ts-ignore
import AOS from 'aos';

import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect (() => {
    AOS.init({
      duration: 1000, // A duração padrão das animações em milissegundos
      once: true, // Se verdadeiro, a animação será executada apenas uma vez ao rolar para baixo
    });
  }, []);

  return <Component {...pageProps} />;
}
