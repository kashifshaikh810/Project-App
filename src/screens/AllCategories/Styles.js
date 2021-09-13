import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  mainContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
  },
  listContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    marginHorizontal: responsiveHeight(1.6),
  },
  flatList: {
    height: responsiveScreenHeight(81),
  },
  horizontalIcons: {
    width: responsiveScreenHeight(5),
    height: responsiveScreenHeight(5),
    borderRadius: responsiveScreenWidth(20),
    marginHorizontal: responsiveWidth(2.5),
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(47),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  categoriesStyle: {
    color: '#0b2a2e',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
});
