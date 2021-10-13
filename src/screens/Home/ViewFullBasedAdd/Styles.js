import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

const {StyleSheet} = require('react-native');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  readMoreContainer: {
    height: responsiveScreenHeight(5),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  readMore: {
    color: '#133539',
  },
  headerParent: {
    backgroundColor: '#b3b3b3',
    elevation: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: responsiveScreenWidth(4),
    height: responsiveScreenHeight(8),
    alignItems: 'center',
  },
  shareIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backgroundImg: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
  },
  imagesCountParent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: responsiveScreenWidth(4),
    marginVertical: responsiveScreenHeight(1.5),
  },
  imagesCountContainer: {
    backgroundColor: '#218386',
    height: responsiveScreenHeight(3.5),
    width: responsiveScreenWidth(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  imagesCount: {
    color: 'white',
    fontWeight: 'bold',
  },
  likeAndHeartParent: {
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#b3b3b3',
  },
  likeAndHeartContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(85),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  eyeAndViewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    width: responsiveScreenWidth(11),
  },
  views: {
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(3.2),
    color: '#023034',
  },
  midLine: {
    borderWidth: 0.3,
    borderColor: '#b3b3b3',
    height: responsiveScreenHeight(5.5),
  },
  rsAndDescriptionContainer: {
    height: responsiveScreenHeight(8),
    justifyContent: 'flex-end',
    paddingHorizontal: responsiveScreenWidth(5),
  },
  midRs: {
    fontWeight: 'bold',
    color: '#023034',
    fontSize: responsiveScreenFontSize(2.5),
  },
  adDescription: {
    color: '#023034',
    fontSize: responsiveScreenFontSize(2.3),
    maxWidth: responsiveScreenWidth(100),
    maxHeight: responsiveScreenHeight(8),
  },
  locationAndExpireDateContainer: {
    flexDirection: 'row',
    marginHorizontal: responsiveScreenWidth(4),
    height: responsiveScreenHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  expireDateContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  lastContainerOnDetails: {
    width: responsiveScreenWidth(90),
  },
  details: {
    fontSize: responsiveScreenFontSize(2.2),
    fontWeight: 'bold',
    color: '#032e32',
  },
  priceContainer: {
    height: responsiveScreenHeight(6),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderBottomColor: '#b3b3b3',
  },
  price: {
    fontSize: responsiveScreenFontSize(2.2),
  },
  rsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rs: {
    color: '#9eacae',
    fontSize: responsiveScreenFontSize(2.2),
  },
  conditionContainer: {
    height: responsiveScreenHeight(5),
    alignItems: 'center',
    flexDirection: 'row',
  },
  descriptionHeadingContainer: {
    height: responsiveScreenHeight(4),
    justifyContent: 'flex-end',
    marginVertical: responsiveScreenHeight(0.3),
  },
  descriptionHeading: {
    fontSize: responsiveScreenFontSize(2.2),
    color: '#032e32',
    fontWeight: 'bold',
  },
  readMoreParent: {
    flex: 1,
  },
  fullDescription: {
    color: '#14383d',
    fontSize: responsiveScreenFontSize(2.2),
  },
  renderItemContainer: {
    width: responsiveScreenWidth(40),
    marginHorizontal: responsiveScreenWidth(5),
    height: responsiveScreenHeight(27),
    alignItems: 'center',
  },
  renderItemContent: {
    borderWidth: 0.4,
    borderColor: '#b3b3b3',
    width: responsiveScreenWidth(46),
    height: responsiveScreenHeight(25),
  },
  imgBackground: {
    width: responsiveScreenWidth(45.7),
    height: responsiveScreenHeight(13),
    elevation: 2,
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
    width: responsiveScreenHeight(3),
    height: responsiveScreenHeight(3),
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
  backImgFeaturedTxtContainer: {
    width: responsiveScreenWidth(22),
    height: responsiveScreenHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fece37',
  },
  backImgFeaturedTxt: {
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: 'bold',
    color: '#0c2d19',
  },
  rsAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  conditionBottomLine: {
    height: responsiveScreenHeight(3),
    justifyContent: 'flex-end',
  },
  line: {
    height: 0.5,
    width: responsiveScreenWidth(100),
    backgroundColor: '#b3b3b3',
  },
  descriptionBottomLine: {
    height: responsiveScreenHeight(4),
    justifyContent: 'center',
  },
  profileSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: responsiveScreenWidth(17),
    height: responsiveScreenHeight(8),
  },
  usernameAndDataContainer: {
    paddingHorizontal: responsiveScreenWidth(4),
    height: responsiveScreenHeight(8),
    justifyContent: 'space-between',
  },
  username: {
    fontWeight: 'bold',
    color: '#042d2f',
    fontSize: responsiveScreenFontSize(2.2),
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  profileSectionBottomLine: {
    height: responsiveScreenHeight(2.5),
    justifyContent: 'flex-end',
  },
  relatedTextContainer: {
    height: responsiveScreenHeight(7),
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(5),
  },
  relatedText: {
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2.3),
    color: '#0b3336',
  },
  threeButtonsContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(10),
    borderTopWidth: 0.3,
    borderTopColor: '#b3b3b3',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonTextAndIconContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(6.6),
    width: responsiveScreenWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#023034',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  imgModalContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  modalCloseIcon: {
    height: responsiveScreenHeight(6),
    justifyContent: 'flex-end',
    width: responsiveScreenWidth(20),
    alignItems: 'center',
  },
});
