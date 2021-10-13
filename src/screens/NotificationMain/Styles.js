import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
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
});
