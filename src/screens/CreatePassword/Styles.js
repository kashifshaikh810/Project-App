import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerParent: {
    backgroundColor: '#fafafa',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(55),
    height: responsiveScreenHeight(8),
  },
  headerText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#3a5752',
  },
  secondInputContainer: {
    height: responsiveScreenHeight(11),
    justifyContent: 'flex-end',
  },
  thiredInputTextContainer: {
    width: responsiveScreenWidth(32),
    height: responsiveScreenHeight(2.6),
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    width: responsiveScreenWidth(92),
    height: responsiveScreenHeight(7),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#183338',
    paddingHorizontal: responsiveWidth(3),
  },
  buttonContainer: {
    height: responsiveScreenHeight(20),
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
    color: '#bbc3d0',
  },
  inputMain: {
    width: responsiveScreenWidth(80),
  },
  eyeIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
