import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from '../../../Components/Utility/ResponsiveDimensions/Responsive';

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
  inputContainer: {
    height: responsiveScreenHeight(11),
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(6.5),
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
  },
  textInput: {
    paddingHorizontal: responsiveScreenWidth(2),
    fontSize: responsiveScreenFontSize(2.2),
  },
});
