import React, { FormEvent, useCallback, useState } from 'react';

import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import { useHistory } from 'react-router-dom';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { weekDay: 0, from: '', to: '' },
  ]);

  const handleAddNewScheduleItem = useCallback(() => {
    setScheduleItems((oldScheduleItems) => [
      ...oldScheduleItems,
      { weekDay: 0, from: '', to: '' },
    ]);
  }, []);

  const handleSubmitForm = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { data } = await api.post('/classes', {
          name,
          bio,
          avatar,
          whatsapp,
          subject,
          cost: Number(cost),
          schedule: scheduleItems,
        });

        console.log(data);
        alert('Cadastro realizado');

        history.push('/');
      } catch (err) {
        console.log(err.message);
        alert('Houve um erro, por favor verifique os dados introduzidos');
      }
    },
    [name, bio, avatar, whatsapp, subject, cost, scheduleItems, history]
  );

  const setItemScheduleValue = useCallback(
    (position: number, field: string, value: string) => {
      const newArrayScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return {
            ...scheduleItem,
            [field]: value,
          };
        }

        return scheduleItem;
      });

      setScheduleItems(newArrayScheduleItems);
    },
    [scheduleItems]
  );

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Que incrível que você quer dar aulas.'
        description='O primeiro passo é preencher esse formulário de inscrição!'
      />

      <main>
        <form onSubmit={handleSubmitForm}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              type='text'
              name='name'
              label='Nome Completo'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type='text'
              name='avatar'
              label='Avatar'
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              type='text'
              name='whatsapp'
              label='WhatsApp'
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Textarea
              name='bio'
              label='Biografia'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              label='Matéria'
              name='subject'
              value={subject}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Química', label: 'Química' },
                { value: 'Física', label: 'Física' },
              ]}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              type='text'
              name='cost'
              label='Custo da aula por hora'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis{' '}
              <button type='button' onClick={handleAddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={index} className='schedule-item'>
                <Select
                  label='Dia da Semana'
                  name='weekDay'
                  value={scheduleItem.weekDay}
                  onChange={(e) =>
                    setItemScheduleValue(index, 'weekDay', e.target.value)
                  }
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça' },
                    { value: '3', label: 'Quarta' },
                    { value: '4', label: 'Quinta' },
                    { value: '5', label: 'Sexta' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
                <Input
                  name='from'
                  label='Dás'
                  type='time'
                  onChange={(e) =>
                    setItemScheduleValue(index, 'from', e.target.value)
                  }
                  value={scheduleItem.from}
                />
                <Input
                  type='time'
                  label='Até'
                  name='time'
                  onChange={(e) =>
                    setItemScheduleValue(index, 'to', e.target.value)
                  }
                  value={scheduleItem.to}
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt='Warning' /> Importante! <br />
              Preencha todos dos dados
            </p>
            <button type='submit'>Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
