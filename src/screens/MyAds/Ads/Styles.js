import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  },
  dropDownText: {
    fontWeight: 'bold',
    color: '#3a5752',
    fontSize: responsiveFontSize(2.2),
    flex: 1,
    marginHorizontal: responsiveScreenWidth(5),
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
  renderItemContainer: {
    height: responsiveScreenHeight(40),
    borderLeftWidth: 5,
    width: responsiveScreenWidth(95),
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0.3,
    borderTopColor: '#b3b3b3',
    borderRightColor: '#b3b3b3',
    borderBottomColor: '#b3b3b3',
  },
  dateContainer: {
    flexDirection: 'row',
    borderLeftColor: '#023034',
    width: responsiveScreenWidth(94),
    height: responsiveScreenHeight(6.9),
    backgroundColor: '#eaeeef',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(2),
    borderRightWidth: 0.3,
    borderRightColor: '#b3b3b3',
  },
  fromText: {
    color: '#3d5c60',
    fontSize: responsiveFontSize(2.2),
  },
  adImgStyle: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(15),
  },
  midSectionContainer: {
    flexDirection: 'row',
    flex: 0.6,
    borderBottomWidth: 0.3,
    borderBottomColor: '#b3b3b3',
  },
  adDescriptionStyle: {
    fontWeight: 'bold',
    color: '#193d40',
    fontSize: responsiveFontSize(2.1),
    maxWidth: responsiveScreenWidth(60),
  },
  adDescriptionContainerStyle: {
    height: responsiveScreenHeight(11),
    width: responsiveScreenWidth(59),
    justifyContent: 'space-around',
    marginHorizontal: responsiveScreenWidth(3),
  },
  iconsRowContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: responsiveScreenHeight(0.3),
  },
  threeDotsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  heartIconContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionTypeParentContainer: {
    flex: 0.3,
    justifyContent: 'center',
  },
  typeContainer: {
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: responsiveScreenHeight(1.5),
  },
  type: {
    color: '#e3f0f1',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
  },
  descriptionType: {
    fontSize: responsiveFontSize(1.8),
    marginHorizontal: responsiveScreenWidth(3),
    marginVertical: responsiveHeight(0.2),
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonTouchAble: {
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(5),
    maxHeight: responsiveScreenHeight(6),
    borderRadius: 4,
    marginHorizontal: responsiveScreenWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
  },
  myAdsLoader: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
