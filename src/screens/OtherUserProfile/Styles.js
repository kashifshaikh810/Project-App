import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(92),
    height: responsiveScreenHeight(8),
    alignItems: 'center',
  },
  shareIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  renderItemContainer: {
    width: responsiveScreenWidth(38),
    height: responsiveScreenHeight(28),
    marginHorizontal: responsiveHeight(3),
    alignItems: 'center',
  },
  renderItemContent: {
    borderWidth: 0.2,
    borderRadius: 1,
    width: responsiveScreenWidth(45.5),
    height: responsiveScreenHeight(25),
  },
  imgBackground: {
    width: responsiveScreenWidth(45.5),
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
  headerBottomLine: {
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: '#b3b3b3',
  },
  profileSectionBottomLine: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#b3b3b3',
  },
  profileSectionContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(15),
    alignItems: 'center',
    marginHorizontal: responsiveScreenWidth(5),
  },
  profileImg: {
    width: responsiveScreenWidth(22),
    height: responsiveScreenHeight(10.5),
  },
  usernameAndDateContainer: {
    marginHorizontal: responsiveScreenWidth(4),
    height: responsiveScreenHeight(7),
    justifyContent: 'space-around',
  },
  username: {
    fontSize: responsiveScreenFontSize(2.8),
    fontWeight: 'bold',
    color: '#012f33',
  },
  joinDate: {
    fontSize: responsiveScreenFontSize(2.2),
    color: '#63797c',
  },
  publishedContainer: {
    height: responsiveScreenHeight(8),
    justifyContent: 'center',
    width: responsiveScreenWidth(87),
  },
  published: {
    fontSize: responsiveScreenFontSize(2.7),
    fontWeight: 'bold',
    color: '#022f32',
  },
});
