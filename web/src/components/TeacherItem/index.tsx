import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars1.githubusercontent.com/u/59426856?s=460&u=51dbc62f347ce74c7e27272bf79129caa01614f8&v=4'
          alt='João Amadeu'
        />
        <div>
          <strong>João Amadeu</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das
        pessoas através de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>900 Kz</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' /> Entrar em contacto
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
