import { StyleSheet } from 'react-native';

import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    padding: normalize(40),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: normalize(32, 'height'),
    lineHeight: normalize(37, 'height'),
    maxWidth: normalize(180, 'height'),
  },
  description: {
    marginTop: normalize(24, 'height'),
    color: '#fff',
    fontSize: normalize(16),
    lineHeight: normalize(26, 'height'),
    fontFamily: 'Poppins_400Regular',
    maxWidth: normalize(240, 'height'),
  },
  okButton: {
    marginVertical: normalize(40, 'height'),
    backgroundColor: '#04d361',
    height: normalize(58, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  okButtonText: {
    color: '#fff',
    fontSize: normalize(16, 'height'),
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;
