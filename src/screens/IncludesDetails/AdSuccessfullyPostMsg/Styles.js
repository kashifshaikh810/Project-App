import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundColor: {
    width: '100%',
    height: responsiveScreenHeight(43),
    backgroundColor: '#25a49e',
  },
  adAndCongContainer: {
    height: responsiveScreenHeight(40),
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  checkIconContainer: {
    borderWidth: responsiveScreenWidth(2.8),
    width: responsiveScreenWidth(28),
    height: responsiveScreenHeight(13),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    borderColor: 'white',
    marginVertical: responsiveScreenHeight(2),
  },
  checkIcon: {
    textAlign: 'center',
  },
  congText: {
    marginVertical: responsiveScreenHeight(1.5),
    color: 'white',
    fontSize: responsiveScreenFontSize(2.8),
  },
  adText: {
    color: 'white',
    fontSize: responsiveScreenFontSize(2.7),
  },
});
