import React, { ReactNode } from 'react';
import { Image, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import logoImage from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<HeaderProps> = ({
  title,
  children,
  headerRight,
}) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => navigate('Landing');

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>

        <Image source={logoImage} resizeMode='contain' />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
};

export default PageHeader;
