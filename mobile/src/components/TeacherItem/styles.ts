import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: normalize(16),
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(24),
  },

  avatar: {
    width: normalize(64, 'width'),
    height: normalize(64, 'height'),
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: normalize(16, 'width'),
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: normalize(20, 'height'),
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: normalize(12, 'height'),
    marginTop: normalize(4, 'height'),
  },

  bio: {
    marginHorizontal: normalize(24),
    fontFamily: 'Poppins_400Regular',
    fontSize: normalize(14, 'height'),
    lineHeight: normalize(24, 'height'),
    color: '#6a6180',
  },

  footer: {
    backgroundColor: '#fafafc',
    padding: normalize(24),
    alignItems: 'center',
    marginTop: normalize(24, 'height'),
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 14,
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: normalize(16, 'height'),
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: normalize(16, 'height'),
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    height: normalize(56, 'height'),
    width: normalize(56, 'width'),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(8, 'width'),
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: normalize(56, 'height'),
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(8, 'width'),
  },

  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: normalize(16, 'height'),
    marginLeft: normalize(16, 'width'),
  },
});

export default styles;
