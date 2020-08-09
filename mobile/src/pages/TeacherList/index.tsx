import React, { useEffect, useState } from 'react';

import { SafeAreaView, Text, View } from 'react-native';
import {
  BorderlessButton,
  RectButton,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/Header';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList: React.FC = () => {
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  useEffect(() => {}, []);

  async function loadTeachersFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: ITeacher) => teacher.user.id
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadTeachersFavorites();
  });

  async function handleFiltersSubmit() {
    loadTeachersFavorites();
    try {
      const { data } = await api.get('/classes', {
        params: {
          subject,
          weekDay,
          time,
        },
      });

      setIsFiltersVisible(false);
      setTeachers(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader
        title='Proffys disponíveis'
        headerRight={
          <BorderlessButton
            onPress={() => setIsFiltersVisible(!isFiltersVisible)}
          >
            <Feather
              name='filter'
              color='#fff'
              size={normalize(24, 'height')}
            />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <>
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                placeholderTextColor='#c1bccc'
                style={styles.input}
                placeholder='Qual a matéria'
                onChangeText={(text) => setSubject(text)}
                value={subject}
              />

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da Semana</Text>
                  <TextInput
                    placeholderTextColor='#c1bccc'
                    style={styles.input}
                    placeholder='Qual o dia ?'
                    onChangeText={(text) => setWeekDay(text)}
                    value={weekDay}
                  />
                </View>

                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    placeholderTextColor='#c1bccc'
                    style={styles.input}
                    placeholder='Qual o horário'
                    onChangeText={(text) => setTime(text)}
                    value={time}
                  />
                </View>
              </View>
              <RectButton
                style={styles.submitButton}
                onPress={handleFiltersSubmit}
              >
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          </>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: normalize(16, 'width'),
          paddingBottom: normalize(16, 'height'),
        }}
        showsVerticalScrollIndicator={false}
      >
        {teachers.map((teacher: ITeacher, index) => (
          <TeacherItem
            key={index}
            teacher={teacher}
            favorited={favorites.includes(teacher.user.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeacherList;
