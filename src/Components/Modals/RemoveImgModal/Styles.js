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
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalMain: {
    paddingHorizontal: responsiveHeight(3),
    backgroundColor: 'white',
    minHeight: responsiveScreenHeight(12),
    minWidth: responsiveScreenWidth(100),
    justifyContent: 'space-around',
  },
  textStyles: {
    fontSize: responsiveFontSize(2.2),
  },
});
