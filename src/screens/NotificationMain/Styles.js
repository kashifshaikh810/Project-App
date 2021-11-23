import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(8),
  },
  headerText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: '#3a5752',
  },
  bottomContainer: {
    height: responsiveScreenHeight(43),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bellImg: {
    width: responsiveScreenWidth(57),
    height: responsiveScreenHeight(25),
  },
  noNotificationText: {
    fontSize: responsiveScreenFontSize(2.6),
    fontWeight: 'bold',
    color: '#09363b',
  },
  updateText: {
    fontSize: responsiveScreenFontSize(2),
    color: '#9badae',
  },
});
