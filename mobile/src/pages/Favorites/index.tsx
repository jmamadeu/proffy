import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import normalize from 'react-native-normalize';

import Header from '../../components/Header';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  async function loadTeachersFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadTeachersFavorites();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Meus proffys favoritos' />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: normalize(16, 'width'),
          paddingBottom: normalize(16, 'height'),
        }}
        showsVerticalScrollIndicator={false}
      >
        {favorites.map((teacher: ITeacher) => (
          <TeacherItem teacher={teacher} favorited={true} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
