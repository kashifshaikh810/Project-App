import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
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
    height: responsiveScreenHeight(40),
    backgroundColor: '#25a49e',
  },
  adAndCongContainer: {
    flex: 0.9,
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
  buttonTouchAble: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    backgroundColor: '#023034',
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: 'white',
  },
  previewbuttonTouchAble: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    borderWidth: 2,
    borderColor: '#023034',
    backgroundColor: 'white',
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewbuttonTxt: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: '#023034',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  labelImg: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(15),
  },
  reachText: {
    fontSize: responsiveScreenFontSize(2.6),
    color: '#023034',
    fontWeight: 'bold',
  },
  upgradingText: {
    fontSize: responsiveScreenFontSize(2.1),
    color: '#082c2f',
    textAlign: 'center',
  },
});
