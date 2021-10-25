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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: responsiveScreenWidth(52),
    height: responsiveScreenHeight(6),
  },
  headerText: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    color: '#012f33',
  },
  flatList: {
    height: responsiveScreenHeight(35),
    justifyContent: 'space-evenly',
    marginHorizontal: responsiveScreenWidth(7),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontWeight: 'bold',
    color: '#385e60',
  },
  checkIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
