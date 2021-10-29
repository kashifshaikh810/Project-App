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
  buttonParentContainer: {
    height: responsiveScreenHeight(30),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    borderColor: '#023034',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 1.5,
    height: responsiveScreenHeight(6.5),
    width: responsiveScreenWidth(84),
    borderRadius: 8,
    paddingHorizontal: responsiveScreenWidth(10),
    alignItems: 'center',
  },
  buttonText: {
    color: '#032e33',
    fontSize: responsiveScreenFontSize(2.2),
  },
  iconContainer: {
    height: responsiveScreenHeight(9),
    paddingVertical: responsiveScreenHeight(2),
    width: responsiveScreenWidth(18),
    alignItems: 'center',
  },
  imageBackContainer: {
    alignItems: 'center',
    height: responsiveScreenHeight(35),
  },
  imageBack: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(30),
    borderRadius: 100,
  },
  welcomeTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: responsiveScreenHeight(2),
  },
  welcomeText: {
    fontSize: responsiveScreenFontSize(2.7),
    textTransform: 'uppercase',
    color: '#033236',
    fontWeight: 'bold',
  },
  trustedText: {
    fontSize: responsiveScreenFontSize(2.7),
    width: responsiveScreenWidth(70),
    textAlign: 'center',
    color: '#052c31',
    paddingVertical: responsiveScreenHeight(2),
  },
  loginIcon: {
    marginHorizontal: responsiveScreenHeight(3),
  },
  registerIcon: {
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2.5),
    marginHorizontal: responsiveScreenWidth(6.5),
  },
  bottomTextContainer: {
    height: responsiveScreenHeight(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ifYou: {
    color: '#193b3d',
  },
  olxTerms: {
    color: '#193b3d',
    borderBottomWidth: 1,
    borderColor: '#4c5d5e',
  },
});
