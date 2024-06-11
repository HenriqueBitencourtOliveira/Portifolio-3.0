// src/components/Header.tsx
import style from './ButtonBlack.module.css'


const ButtonBlack = () => {
  return (
    <>
    <button className={style.buttonBlack}>
        <a href="https://drive.google.com/file/d/1Z749ZbdRwu0GSwbM03P0uUfxKbSy5Cp5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download CV</a>
    </button>
    </>
  );
};

export default ButtonBlack;