import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(8),
  },
  headerText: {
    fontSize: responsiveFontSize(2.6),
    fontWeight: 'bold',
    color: '#3a5752',
  },
  middileTextContainer: {
    height: responsiveScreenHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveScreenHeight(8),
  },
  flexContainerChild: {
    width: responsiveScreenWidth(88),
  },
  firstText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(5),
    color: '#062a2d',
    textAlignVertical: 'bottom',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  sellTxt: {
    width: responsiveScreenWidth(62),
    color: '#7a8d91',
  },
  iconContainer: {
    width: responsiveScreenWidth(25),
    alignItems: 'flex-end',
  },
  line: {
    marginVertical: responsiveHeight(2),
    height: 0.5,
    backgroundColor: '#b3b3b3',
  },
  buttonContainer: {
    height: responsiveScreenHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouchAble: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6),
    backgroundColor: '#e4e7ee',
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: '#b3b3b3',
  },
  buttonParent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
