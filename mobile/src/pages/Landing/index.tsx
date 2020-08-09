import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import heartIcon from '../../assets/images/icons/heart.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/connections');

      setTotalConnections(data.length);
    })();
  }, []);

  const handleNavigateToOtherPage = (screen: string) => navigate(screen);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem vindo{'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => handleNavigateToOtherPage('Study')}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => handleNavigateToOtherPage('GiveClasses')}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas{'  '}
        <Image source={heartIcon} />
      </Text>
    </SafeAreaView>
  );
};

export default Landing;
