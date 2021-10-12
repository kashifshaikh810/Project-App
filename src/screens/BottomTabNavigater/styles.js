import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const styles = StyleSheet.create({
  adsIcon: {
    height: responsiveHeight(5.5),
    width: responsiveHeight(5.5),
    borderWidth: responsiveWidth(0.7),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: responsiveHeight(1.5),
    backgroundColor: 'white',
  },
  TopLine: {
    paddingTop: responsiveScreenHeight(0.6),
    width: responsiveWidth(20),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  container: {
    flex: 1.0,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  grediant: {
    height: 44,
    width: 55,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
  },
  buttonContainer: {
    flex: 1.0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 25,
    margin: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    // alignSelf: 'center',
  },
});
