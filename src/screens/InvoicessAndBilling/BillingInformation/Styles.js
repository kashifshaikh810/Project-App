import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: responsiveHeight(15),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(8),
  },
  headerText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#3a5752',
  },
  mobilePhonesDropDownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobilePhonesDropDownTouchAbleParent: {
    borderWidth: 1,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    borderRadius: 5,
  },
  mobilePhonesDropDownTextContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveScreenWidth(6),
  },
  make: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  mobilePhonesDropDownSelectedValue: {
    fontSize: responsiveFontSize(2),
    width: responsiveScreenWidth(73),
    color: '#718281',
  },
  mobilePhonesDropDownIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  direction: {
    flexDirection: 'row',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    width: responsiveScreenWidth(92),
    height: responsiveScreenHeight(7),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#183338',
    paddingHorizontal: responsiveWidth(7),
  },
  buttonContainer: {
    height: responsiveScreenHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouchAble: {
    width: responsiveScreenWidth(92),
    height: responsiveScreenHeight(6),
    backgroundColor: '#e4e7ee',
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: 'white',
  },
  firstInputContainer: {
    height: responsiveScreenHeight(10),
    justifyContent: 'flex-end',
  },
  firstInputTextContainer: {
    width: responsiveScreenWidth(36),
    height: responsiveScreenWidth(5.6),
    alignItems: 'center',
  },
  firstInputText: {
    color: '#718281',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  secondInputContainer: {
    height: responsiveScreenHeight(15),
    justifyContent: 'flex-end',
  },
  secondInputTextContainer: {
    width: responsiveScreenWidth(18),
    height: responsiveScreenHeight(2.6),
    alignItems: 'center',
  },
  thiredInputTextContainer: {
    width: responsiveScreenWidth(32),
    height: responsiveScreenHeight(2.6),
    alignItems: 'center',
  },
  fourthInputTextContainer: {
    width: responsiveScreenWidth(32),
    height: responsiveScreenHeight(2.6),
    alignItems: 'center',
  },
  fivithInputTextContainer: {
    width: responsiveScreenWidth(32),
    height: responsiveScreenHeight(2.6),
    alignItems: 'center',
  },
  headingContainer: {
    width: responsiveScreenWidth(47),
    height: responsiveScreenHeight(10),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heading: {
    color: '#022b2c',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  sixithInputContainer: {
    height: responsiveScreenHeight(13),
    justifyContent: 'flex-end',
  },
  sixithInputTextContainer: {
    width: responsiveScreenWidth(29),
    height: responsiveScreenHeight(2.6),
    alignItems: 'center',
  },
  seventhInputTexrContainer: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(2.6),
    alignItems: 'center',
  },
});
