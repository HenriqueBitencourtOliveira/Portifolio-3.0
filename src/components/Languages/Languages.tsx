// components/Languages/Languages.tsx
import Image from 'next/image';
import { useEffect, useState } from 'react';
import style from './Languages.module.css';

interface Language {
  name: string;
  percent: number;
  color: string;
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  text: string;
  total_seconds: number;
}

const Languages: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/languages'); // Certifique-se de que o caminho está correto
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.HardSkills} data-aos="zoom-in" data-aos-duration="1500">
      <h1 className={style.titleText}>Hard Skills</h1>
      <div className='d-flex justify-content-around flex-wrap mt-5'>
        {languages.map((language, index) => (
          <div key={index}>
            <Image src={`/${language.name}.svg`} className='mb-4' alt={language.name} width={150} height={150} />
            <p className={`${style.textLanguage} mb-1`}>{language.name}</p>
            <p className={style.textLanguage}>{language.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
