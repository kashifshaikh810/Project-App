import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const styles = StyleSheet.create({
  adsIcon: {
    height: responsiveHeight(5.5),
    width: responsiveHeight(5.5),
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: responsiveHeight(0.5),
    backgroundColor: 'white',
  },
  TopLine: {
    paddingTop: responsiveScreenFontSize(1),
    paddingBottom: responsiveWidth(0.8),
    width: responsiveWidth(20),
    textAlign: 'center',
  },
});
