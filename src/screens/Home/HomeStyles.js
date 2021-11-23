import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const HomeStyles = StyleSheet.create({
  renderItemContainer: {
    width: responsiveScreenWidth(39),
    marginHorizontal: responsiveHeight(2.8),
    marginVertical: responsiveScreenHeight(1),
    alignItems: 'center',
  },
  renderItemContent: {
    borderWidth: 0.2,
    borderRadius: 1,
    width: 165,
    height: 190,
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
    width: responsiveScreenHeight(2.6),
    height: responsiveScreenHeight(2.6),
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
    fontSize: responsiveFontSize(1.6),
    marginHorizontal: responsiveHeight(0.7),
    maxWidth: responsiveScreenWidth(50),
    color: '#2a4b4e',
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
  areaContainer: {
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  areaContent: {
    marginHorizontal: responsiveHeight(1.5),
    marginVertical: responsiveHeight(0.5),
  },
  topIconsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  categoriesContainer: {
    marginHorizontal: responsiveHeight(2.2),
    marginVertical: responsiveHeight(1.5),
    flexDirection: 'row',
  },
  sellAll: {
    borderBottomWidth: 1,
  },
  iconsHorizontalContainer: {
    flexDirection: 'row',
  },
  horizontalIcons: {
    width: responsiveScreenHeight(6.5),
    height: responsiveScreenHeight(6.5),
    borderRadius: responsiveScreenWidth(20),
    marginHorizontal: responsiveHeight(1.7),
    paddingVertical: responsiveHeight(1.8),
    textAlign: 'center',
  },
  smallTextContainer: {
    alignItems: 'center',
    marginVertical: responsiveHeight(1.5),
  },
  bigTextContainer: {
    alignItems: 'center',
    marginVertical: responsiveHeight(0.7),
  },
  allTextStyle: {
    maxWidth: responsiveScreenWidth(14.5),
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
  },
  basedHeading: {
    paddingHorizontal: responsiveHeight(1.5),
    fontWeight: 'bold',
    paddingBottom: responsiveHeight(0.7),
    color: '#0e383c',
  },
  freshHeading: {
    paddingHorizontal: responsiveHeight(1.5),
    fontWeight: 'bold',
    paddingBottom: responsiveHeight(0.5),
    paddingTop: responsiveHeight(2),
  },
  arrowAndButtonContainer: {
    height: responsiveScreenHeight(22),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
  },
  arrowMain: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(1),
  },
  arrow: {
    width: responsiveScreenWidth(8),
    height: responsiveScreenHeight(5),
  },
  startButton: {
    width: responsiveScreenWidth(55),
    height: responsiveScreenHeight(7),
    backgroundColor: '#499f4c',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
});
