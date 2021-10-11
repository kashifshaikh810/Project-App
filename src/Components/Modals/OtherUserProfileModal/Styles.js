import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  modalContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: responsiveScreenWidth(4),
  },
  modalMain: {
    paddingHorizontal: responsiveHeight(3),
    backgroundColor: '#f3f3f3',
    height: responsiveScreenHeight(21),
    width: responsiveScreenWidth(50),
    borderWidth: 0.4,
    borderColor: '#b3b3b3',
  },
  textStyles: {
    fontSize: responsiveFontSize(2.4),
    color: '#0b2a2e',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  main: {
    alignItems: 'flex-end',
  },
});
