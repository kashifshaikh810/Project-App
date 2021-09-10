import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 0.3,
  },
  iconContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(90),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  offeringTxt: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.2),
    color: '#1d4646',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  browseTxt: {
    fontSize: responsiveFontSize(2.3),
    color: '#375457',
  },
  seeAllContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  seeAll: {
    fontSize: responsiveFontSize(2),
    borderBottomWidth: 1,
  },
  flatList: {
    marginVertical: responsiveHeight(2),
  },
  renderListContainer: {
    width: responsiveScreenWidth(33),
    height: responsiveScreenHeight(13.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTextContainerOne: {
    marginVertical: responsiveHeight(1),
  },
  listTextContainerTwo: {
    marginVertical: responsiveHeight(2),
  },
  textStyle: {
    color: '#375457',
    textAlign: 'center',
    maxWidth: responsiveScreenWidth(30),
  },
});
