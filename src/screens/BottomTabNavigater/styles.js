import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
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
    paddingTop: responsiveScreenHeight(0.6),
    width: responsiveWidth(20),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
