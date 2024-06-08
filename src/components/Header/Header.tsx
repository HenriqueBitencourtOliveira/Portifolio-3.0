// src/components/Header.tsx
import style from './Header.module.css'
import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar  container="md" style={{background:'#222222'}} dark >
      <Link href="/" passHref className={`navbar-brand ${style.font}`}>
        HB
      </Link>
      <Nav className={`flex-row ${style.navFont}`} navbar>
        <Link href="/products" passHref className="nav-link me-4">
        Início
        </Link>
        <Link href="/cart" passHref className="nav-link me-4 ">
          Projetos
        </Link>
        <Link href="/cart" passHref className="nav-link ">
          Contato
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;