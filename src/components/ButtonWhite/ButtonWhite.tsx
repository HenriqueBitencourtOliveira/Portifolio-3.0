// src/components/Header.tsx
import style from './ButtonWhite.module.css'
import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const ButtonWhite = () => {
  return (
    <>
    <button className={style.buttonWhite}>
        Contatar
    </button>
    </>
  );
};

export default ButtonWhite;