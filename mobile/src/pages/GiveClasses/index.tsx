import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import { ImageBackground, SafeAreaView, Text } from 'react-native';

import styles from './styles';
import bgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        style={styles.content}
        resizeMode='contain'
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar você precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>Tudo bem!</Text>
      </RectButton>
    </SafeAreaView>
  );
};

export default GiveClasses;
