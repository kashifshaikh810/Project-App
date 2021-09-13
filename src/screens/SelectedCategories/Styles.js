import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  renderContainer: {
    height: responsiveScreenHeight(7),
    paddingHorizontal: responsiveWidth(8),
    width: responsiveScreenWidth(100),
    justifyContent: 'space-around',
  },
  renderText: {
    color: '#637777',
    fontSize: responsiveFontSize(2.2),
  },
  routeNameContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  routeName: {
    color: '#0b2a2e',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.5),
  },
  flatList: {
    height: responsiveScreenHeight(82),
  },
  conditions: {
    width: responsiveScreenWidth(22),
    height: responsiveScreenHeight(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(1),
  },
});
