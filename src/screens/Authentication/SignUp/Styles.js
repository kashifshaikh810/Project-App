import {StyleSheet} from 'react-native';

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(35),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  categoriesStyle: {
    color: '#023034',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  emailLabel: {
    color: '#8aa2a1',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2.2),
    marginVertical: responsiveHeight(0.3),
  },
  emailInput: {
    borderWidth: 0.8,
    borderColor: '#345253',
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(7),
    borderRadius: 4,
    paddingHorizontal: responsiveScreenWidth(4),
  },
  buttonParentContainer: {
    height: responsiveScreenHeight(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: responsiveScreenHeight(6.5),
    width: responsiveScreenWidth(85),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(30),
  },
  passwordContainer: {
    height: responsiveScreenHeight(15),
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  password: {
    width: responsiveScreenWidth(60),
  },
  hideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  hide: {
    textTransform: 'uppercase',
  },
  dontHaveContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dontHave: {
    fontSize: responsiveScreenFontSize(2.2),
    color: '#023034',
  },
  dot: {
    width: responsiveScreenWidth(0.8),
    height: responsiveScreenHeight(0.4),
    borderRadius: 2,
    backgroundColor: 'black',
  },
  register: {
    fontSize: responsiveScreenFontSize(2.2),
    color: 'blue',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  white: {
    backgroundColor: 'white',
  },
});
