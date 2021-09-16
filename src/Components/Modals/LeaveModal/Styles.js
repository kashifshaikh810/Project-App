import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalMain: {
    paddingHorizontal: responsiveHeight(3),
    backgroundColor: 'white',
    height: responsiveScreenHeight(22),
    width: responsiveScreenWidth(85),
    justifyContent: 'space-around',
  },
  textStyles: {
    fontSize: responsiveFontSize(2.4),
    color: '#0b2a2e',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 150,
    alignItems: 'center',
  },
  main: {
    alignItems: 'flex-end',
  },
});
