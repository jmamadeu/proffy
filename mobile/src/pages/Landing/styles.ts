import { StyleSheet } from 'react-native';

import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    padding: normalize(40),
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: normalize(20, 'height'),
    lineHeight: normalize(30, 'height'),
    marginTop: normalize(80),
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: normalize(40, 'height'),
    justifyContent: 'space-between',
  },
  button: {
    height: normalize(150, 'height'),
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: normalize(24),
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9871F5',
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: normalize(20, 'height'),
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: normalize(12, 'height'),
    lineHeight: normalize(20, 'height'),
    maxWidth: normalize(140, 'width'),
    marginTop: normalize(40, 'height'),
  },
});

export default styles;
