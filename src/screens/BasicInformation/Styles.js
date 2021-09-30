import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    height: responsiveScreenHeight(90),
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveScreenHeight(7.8),
    backgroundColor: '#fafafa',
  },
  headerMain: {
    flexDirection: 'row',
    width: responsiveScreenWidth(90),
  },
  saveButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  saveButton: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#c9ccd1',
  },
  middileContainer: {
    height: responsiveScreenHeight(37),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: '#b3b3b3',
  },
  middileContainerChild: {
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(90),
  },
  informationTxt: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    color: '#042f32',
  },
  middileSectionInputContainer: {
    height: responsiveScreenHeight(15),
    alignItems: 'center',
    flexDirection: 'row',
  },
  defaultImg: {
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(12),
  },
  inputContainer: {
    height: responsiveScreenHeight(13),
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: responsiveScreenWidth(70),
  },
  inputContainerChild: {
    width: responsiveScreenWidth(60),
  },
  yourNameTxt: {
    color: '#61797d',
    fontWeight: 'bold',
    marginVertical: responsiveHeight(0.3),
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#345253',
    height: responsiveScreenHeight(6),
    borderRadius: 4,
    paddingLeft: responsiveWidth(5),
  },
  aboutYouTxt: {
    color: '#8aa2a1',
    fontWeight: 'bold',
    marginVertical: responsiveHeight(0.3),
  },
  middileSectionLastInput: {
    borderWidth: 1,
    borderColor: '#345253',
    height: responsiveScreenHeight(7),
    borderRadius: 4,
    paddingLeft: responsiveWidth(5),
  },
  footerContainer: {
    height: responsiveScreenHeight(37),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerInputContainer: {
    height: responsiveScreenHeight(17),
    justifyContent: 'center',
  },
  footerGuideText: {
    marginVertical: responsiveHeight(0.3),
    color: '#3a5752',
    fontSize: responsiveFontSize(1.8),
  },
});
