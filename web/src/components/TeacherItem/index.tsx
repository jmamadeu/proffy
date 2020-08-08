import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

interface ITeacherProps {
  teacher: {
    cost: number;
    id: number;
    subject: string;
    user: {
      id: number;
      avatar: string;
      bio: string;
      name: string;
      whatsapp: string;
    };
  };
}

const TeacherItem: React.FC<ITeacherProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', { userId: teacher.user.id });
  }

  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.user.avatar} alt={teacher.user.name} />
        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.user.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}Kz</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https:wa.me/${teacher.user.whatsapp}`}
          target='_blank'
        >
          <img src={whatsappIcon} alt='Whatsapp' /> Entrar em contacto
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
