import {StyleSheet} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(8),
  },
  headerText: {
    fontSize: responsiveFontSize(2.6),
    fontWeight: 'bold',
    color: '#3a5752',
    maxWidth: responsiveScreenWidth(65),
  },
  containerOne: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveScreenHeight(13),
    borderBottomWidth: 0.7,
    borderBottomColor: '#b3b3b3',
  },
  allTextContainer: {
    flexDirection: 'column',
    marginHorizontal: responsiveHeight(3),
  },
  allTextOne: {
    fontSize: responsiveFontSize(2),
    color: '#023134',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: responsiveWidth(4),
  },
  allTextTwo: {
    fontSize: 15,
    color: '#b3b3b3',
    maxWidth: responsiveScreenWidth(65),
  },
});
