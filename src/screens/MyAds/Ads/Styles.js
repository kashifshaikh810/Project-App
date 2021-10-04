import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
  dropDownContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveScreenWidth(45),
  },
  dropDownText: {
    fontWeight: 'bold',
    color: '#3a5752',
    fontSize: responsiveFontSize(2.2),
  },
  midContainer: {
    height: responsiveScreenHeight(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainerChild: {
    flexDirection: 'row',
    backgroundColor: '#3e7dfa',
    justifyContent: 'center',
    height: responsiveScreenHeight(12),
    alignItems: 'center',
    width: responsiveScreenWidth(95),
    borderRadius: 8,
  },
  heavyDiscountText: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.1),
  },
  viewPackageBoxContainer: {
    width: responsiveScreenWidth(40),
    alignItems: 'flex-end',
  },
  viewPackageBox: {
    borderWidth: 1,
    height: responsiveScreenHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveScreenWidth(35),
    borderRadius: 7,
    borderColor: '#f1f1f1',
  },
  viewPackageText: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.1),
  },
  youDontHaveTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  youDontHaveText: {
    color: '#093134',
    fontSize: responsiveFontSize(2.9),
    fontWeight: 'bold',
  },
});
