import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  keyboad: {
    flex: 1,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    bottom: 0,
    zIndex: 1,
    position: 'relative',
  },
  profileAndNameContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: '#b3b3b3',
  },
  backButton: {
    justifyContent: 'center',
    width: responsiveScreenWidth(9),
  },
  imgBackContainer: {
    flexDirection: 'column',
  },
  imgBack: {
    width: responsiveScreenWidth(13),
    height: responsiveScreenHeight(6.7),
  },
  profileImgContainer: {
    alignItems: 'flex-end',
    height: responsiveScreenHeight(6.7),
    justifyContent: 'flex-end',
  },
  profileImg: {
    width: responsiveScreenWidth(7),
    height: responsiveScreenHeight(3),
  },
  userNameContainer: {
    flexDirection: 'column',
    marginHorizontal: responsiveScreenWidth(2),
  },
  userName: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#4a6164',
  },
  lastActive: {
    fontSize: responsiveFontSize(1.9),
    color: '#b3b3b3',
  },
  dotsIconContainer: {
    width: responsiveScreenWidth(29),
    alignItems: 'flex-end',
  },
});
