import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

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
  headerChildContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: responsiveScreenHeight(6),
    alignItems: 'center',
  },
  headerChildTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: responsiveScreenWidth(60),
  },
  headerChildText: {
    fontWeight: 'bold',
    color: '#4a6164',
    fontSize: responsiveFontSize(2.2),
  },
  headerChildIconLeftContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: responsiveScreenWidth(3),
  },
  scrollViewContainer: {
    flex: 10,
    backgroundColor: '#eaeeef',
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: responsiveScreenHeight(10),
  },
  date: {
    color: '#c7c8ca',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: responsiveScreenWidth(4),
    marginVertical: responsiveScreenHeight(0.5),
  },
  messageBackground: {
    backgroundColor: '#cfdbfd',
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(1.5),
    borderRadius: 8,
  },
  message: {
    fontSize: responsiveFontSize(2.1),
    color: '#06162c',
    flex: 1,
    maxWidth: responsiveScreenWidth(55),
    paddingHorizontal: responsiveScreenWidth(0.5),
    paddingVertical: responsiveScreenHeight(0.5),
  },
  timeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  timeMain: {
    flexDirection: 'row',
    width: responsiveScreenWidth(18),
    height: responsiveScreenHeight(2.7),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  time: {
    fontSize: responsiveFontSize(1.5),
    color: '#536280',
    maxWidth: responsiveScreenWidth(20),
    maxHeight: responsiveScreenHeight(8),
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footerContainerTwo: {
    flexDirection: 'row',
    height: responsiveScreenHeight(6),
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  questionContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontWeight: 'bold',
    color: '#4a6164',
    fontSize: responsiveFontSize(2.2),
  },
  offerContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  offer: {
    fontWeight: 'bold',
    color: '#4a6164',
    fontSize: responsiveFontSize(2.2),
  },
  inputMain: {
    justifyContent: 'flex-end',
  },
  inputContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(7),
    backgroundColor: 'white',
    borderTopWidth: 0.3,
    borderColor: '#b3b3b3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  attachmentIcon: {
    width: responsiveScreenWidth(11),
    textAlign: 'center',
  },
  shortWidth: {
    width: responsiveScreenWidth(75),
  },
  longWidth: {
    width: responsiveScreenWidth(79),
  },
  pressIcon: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  icon: {
    width: responsiveScreenWidth(10),
  },
});
