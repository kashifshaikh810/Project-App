import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalMain: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(94),
    width: responsiveScreenWidth(100),
  },
  textStyles: {
    fontSize: responsiveFontSize(2.2),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(55),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  offeringTxt: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.8),
    color: '#1d4646',
  },
});
