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
  midContainer: {
    height: responsiveScreenHeight(17),
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
  renderItemContainer: {
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(27),
    alignItems: 'center',
  },
  renderItemContent: {
    borderWidth: 0.2,
    borderRadius: 1,
    width: responsiveScreenWidth(46),
    height: responsiveScreenHeight(25),
  },
  imgBackground: {
    width: responsiveScreenWidth(45.7),
    height: responsiveScreenHeight(13),
  },
  insideContainer: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(1),
    marginVertical: responsiveHeight(1),
  },
  featuredTextContainer: {
    backgroundColor: '#ffce38',
    width: responsiveScreenWidth(13),
    height: responsiveScreenHeight(2.6),
    justifyContent: 'center',
  },
  featuredText: {
    fontSize: responsiveFontSize(1.1),
    textAlign: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconMain: {
    width: responsiveScreenHeight(3.2),
    height: responsiveScreenHeight(3.2),
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rsStyle: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    paddingTop: responsiveHeight(1),
    marginHorizontal: responsiveHeight(0.6),
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  description: {
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveHeight(0.7),
    marginVertical: responsiveHeight(0.8),
    maxWidth: responsiveScreenWidth(50),
    color: '#2a4b4e',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(0.7),
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  locationStyle: {
    fontSize: responsiveFontSize(1.5),
    maxWidth: responsiveScreenWidth(40),
    color: '#2a4b4e',
  },
});
