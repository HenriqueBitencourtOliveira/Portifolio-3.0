// src/components/Header.tsx
import style from './ButtonWhite.module.css'
import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const ButtonWhite = () => {
  return (
    <>
    <button className={style.buttonWhite} >
        <a href="https://www.linkedin.com/in/henrique-bitencourt-oliveira-065b94207/" target="_blank" rel="noopener noreferrer">Contatar</a>
    </button>


    </>
  );
};

export default ButtonWhite;