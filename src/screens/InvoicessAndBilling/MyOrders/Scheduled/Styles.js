import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeeef',
  },
  mainContainer: {
    height: responsiveScreenHeight(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    height: responsiveScreenHeight(30),
  },
  img: {
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(22),
  },
  nothingTxtContainer: {
    height: responsiveScreenHeight(4),
  },
  nothingTxt: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: '#092f32',
  },
  youDontText: {
    fontSize: responsiveFontSize(2.2),
    color: '#96a4a5',
  },
});
