import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

const {StyleSheet} = require('react-native');

export const Styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(8),
  },
  headerText: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    color: '#3a5752',
  },
  tabBarIndicator: {
    height: responsiveScreenHeight(0.6),
    borderRadius: responsiveScreenWidth(1),
    color: '#012022',
    backgroundColor: '#012022',
  },
  tabBarLabel: {
    color: '#132524',
    fontSize: responsiveFontSize(2.1),
  },
  tabBar: {
    elevation: 0,
    backgroundColor: 'white',
  },
});
