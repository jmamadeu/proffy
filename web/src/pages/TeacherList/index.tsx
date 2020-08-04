import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers'>
          <div className='input-block'>
            <label htmlFor='subject'>Matéria</label>
            <input type='text' id='subject' />
          </div>

          <div className='input-block'>
            <label htmlFor='dia'>Dia da semana</label>
            <input type='text' id='dia' />
          </div>

          <div className='input-block'>
            <label htmlFor='hora'>Hora</label>
            <input type='text' id='hora' />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className='teacher-item'>
          <header>
            <img
              src='https://avatars1.githubusercontent.com/u/59426856?s=460&u=51dbc62f347ce74c7e27272bf79129caa01614f8&v=4'
              alt='João Amadeu'
            />
            <div>
              <strong>Química</strong>
            </div>
          </header>
        </article>
      </main>
    </div>
  );
};

export default TeacherList;
