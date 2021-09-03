import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const AccountStyles = StyleSheet.create({
  mainContainer: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
  },
  container: {
    flexDirection: 'row',
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveHeight(3),
  },
  image: {
    height: responsiveHeight(12),
    width: responsiveHeight(12),
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: responsiveHeight(2),
  },
  userName: {
    fontSize: responsiveScreenFontSize(2.7),
    fontWeight: 'bold',
  },
  text: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: 'bold',
  },
  textLine: {
    borderBottomWidth: 1,
    width: responsiveScreenWidth(39),
  },
  containerOne: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveScreenHeight(10),
    borderBottomWidth: 0.7,
    borderBottomColor: '#b3b3b3',
  },
  containerTwo: {
    marginHorizontal: responsiveHeight(3),
  },
  allTextContainer: {
    flexDirection: 'column',
    marginHorizontal: responsiveHeight(3),
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  olxImg: {
    width: responsiveHeight(3),
    height: responsiveHeight(3),
    borderRadius: 10,
  },
  allTextOne: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  allTextTwo: {
    fontSize: 15,
    color: '#b3b3b3',
    maxWidth: responsiveScreenWidth(50),
  },
});