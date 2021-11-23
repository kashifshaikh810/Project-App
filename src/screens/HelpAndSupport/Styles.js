import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(55),
    height: responsiveScreenHeight(8),
  },
  headerText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: '#3a5752',
  },
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveScreenHeight(11),
  },
  flexContainerChild: {
    width: responsiveScreenWidth(88),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  sellTxt: {
    width: responsiveScreenWidth(67),
    color: '#7a8d91',
  },
  iconContainer: {
    width: responsiveScreenWidth(23),
    alignItems: 'flex-end',
  },
  firstText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(5),
    color: '#062a2d',
    textAlignVertical: 'bottom',
  },
  line: {
    height: 0.5,
    backgroundColor: '#b3b3b3',
  },
});
