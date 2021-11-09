import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const styles = StyleSheet.create({
  TopLine: {
    paddingTop: responsiveScreenHeight(0.6),
    width: responsiveScreenWidth(20),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: responsiveScreenHeight(2.5),
    left: 0,
    right: 0,
    top: 0,
  },
  grediant: {
    height: responsiveScreenHeight(5.5),
    width: responsiveScreenWidth(12),
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
});
