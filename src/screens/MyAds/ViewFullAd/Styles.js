import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

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
    height: responsiveScreenHeight(43),
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
    height: responsiveScreenHeight(9),
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
    height: responsiveScreenHeight(6),
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
