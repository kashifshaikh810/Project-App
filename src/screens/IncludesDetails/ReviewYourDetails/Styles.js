import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    justifyContent: 'center',
    height: responsiveScreenHeight(7.8),
    backgroundColor: '#fafafa',
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: responsiveScreenWidth(62),
    alignItems: 'center',
  },
  heading: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#345253',
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(65),
    borderRadius: 4,
    paddingLeft: responsiveWidth(5),
  },
  yourNameAndInputContainer: {
    height: responsiveScreenHeight(12),
  },
  yourNameTxt: {
    color: '#b4bfc1',
    fontWeight: 'bold',
    marginVertical: responsiveHeight(0.3),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: responsiveScreenHeight(1),
  },
  buttonTouchAble: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    backgroundColor: '#023034',
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: 'white',
  },
  imageAndInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '94%',
  },
  imageContainer: {
    justifyContent: 'center',
    height: responsiveScreenHeight(17),
    marginHorizontal: responsiveScreenWidth(5),
  },
  image: {
    width: responsiveScreenWidth(21),
    height: responsiveScreenHeight(10),
  },
  labelAndPhonenumContainer: {
    flexDirection: 'row',
    width: '105%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelAndPhonenumContainerChild: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneNumLabel: {
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2.7),
    color: '#062e31',
  },
  checkIcon: {
    width: '11%',
    marginLeft: responsiveScreenWidth(1),
  },
  phoneNum: {
    fontSize: responsiveScreenFontSize(2.2),
    color: '#0b2c2f',
  },
  showPhonNumAndIconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveScreenHeight(11),
  },
  showPhonNum: {
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2.7),
    color: '#022e32',
  },
  toggleIconContainer: {
    width: '20%',
    alignItems: 'flex-end',
  },
});
