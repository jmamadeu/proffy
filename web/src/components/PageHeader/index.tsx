import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ children, title, description }) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={backIcon} alt='Ícone Voltar' />
        </Link>
        <img src={logoImg} alt='LogoImg' />
      </div>

      <div className='header-content'>
        <strong>{title}</strong>

        {description && <p>{description} </p>}

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
