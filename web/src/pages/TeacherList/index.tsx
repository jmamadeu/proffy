import React, { FormEvent, useCallback, useState } from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');

  const [teachers, setTeachers] = useState([]);

  const handleSearchTeachers = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { data } = await api.get('/classes', {
          params: {
            subject,
            weekDay,
            time,
          },
        });

        setTeachers(data);
        console.log(data);
      } catch (err) {}
    },
    [subject, weekDay, time]
  );

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers' onSubmit={handleSearchTeachers}>
          <Select
            label='Matéria'
            name='subject'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Química', label: 'Química' },
              { value: 'Física', label: 'Física' },
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            label='Dia da Semana'
            name='weekDay'
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
          />
          <Input
            label='Hora'
            name='time'
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type='submit'>Enviar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacherItem, index) => (
          <TeacherItem key={index} teacher={teacherItem} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
