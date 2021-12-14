import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
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
    width: responsiveScreenWidth(40),
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
    alignItems: 'center',
    width: responsiveScreenWidth(85),
  },
  headerChildText: {
    color: '#4a6164',
    fontSize: responsiveFontSize(2.1),
    maxWidth: responsiveScreenWidth(50),
  },
  headerChildIconLeftContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: responsiveScreenWidth(3),
  },
  scrollViewContainer: {
    flex: 9,
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
    height: responsiveScreenHeight(7),
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
    width: responsiveScreenWidth(20),
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
    width: responsiveScreenWidth(30),
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
  topBar: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(2),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topBarMain: {
    backgroundColor: '#b3b3b3',
    height: responsiveScreenHeight(0.8),
    width: responsiveScreenWidth(12),
    borderRadius: 10,
  },
  questionMain: {
    height: responsiveScreenHeight(30),
    backgroundColor: 'white',
  },
  questionContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContentChild: {
    width: responsiveScreenWidth(93),
    height: responsiveScreenHeight(15),
    justifyContent: 'center',
  },
  questionContentMain: {
    backgroundColor: '#cfdbfd',
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(1),
  },
  chatToKnowTxt: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
  },
  questionContentMainTwo: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8.5),
    alignItems: 'center',
  },
  closeTheDealTxt: {
    width: responsiveScreenWidth(60),
    fontSize: responsiveFontSize(1.9),
  },
  questionImgContainer: {
    alignItems: 'flex-end',
    width: responsiveScreenWidth(28),
    height: responsiveScreenHeight(10),
  },
  questionImg: {
    width: responsiveScreenWidth(18),
    height: responsiveScreenHeight(8),
    borderRadius: responsiveHeight(5),
  },
  questionLastContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(180),
    height: responsiveScreenHeight(8),
  },
  boxContainer: {
    borderWidth: 2,
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  makeAnOfferContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: responsiveScreenWidth(90),
    alignItems: 'center',
    height: responsiveScreenHeight(10),
  },
  makeAnOfferRsContainer: {
    flexDirection: 'row',
  },
  makeAnOfferRsMain: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(5),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  makeAnOfferRs: {
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    width: responsiveScreenWidth(16),
    textAlign: 'center',
    color: '#043738',
  },
  makeAnOfferTxt: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(5.6),
    borderBottomWidth: 1,
    borderColor: '#99a5a6',
  },
  makeAnOfferTxtMain: {
    fontSize: responsiveFontSize(4.5),
    color: '#043738',
  },
  makeAnOfferLastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  makeAnOfferLastContainerChild: {
    flexDirection: 'row',
    backgroundColor: '#25a49e',
    height: responsiveScreenHeight(10),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: responsiveHeight(2.5),
    borderRadius: 6,
    width: responsiveScreenWidth(55),
  },
  handOkayIcon: {
    textAlignVertical: 'center',
    color: '#eafeff',
  },
  makeAnGoodOfferContainer: {
    height: responsiveScreenHeight(5),
    justifyContent: 'center',
  },
  makeAnGoodOfferTxt: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#eafeff',
  },
  makeAnHighChanceContainer: {
    flexDirection: 'row',
  },
  makeAnHighChanceTxt: {
    fontSize: responsiveFontSize(1.9),
    color: '#eafeff',
    maxWidth: responsiveScreenWidth(40),
  },
  sendOfferButtonParent: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(10),
    justifyContent: 'center',
  },
  sendOfferButtonContainer: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(5.5),
    backgroundColor: '#023033',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendOfferButton: {
    fontSize: responsiveFontSize(2.2),
    color: '#edf5f6',
    fontWeight: 'bold',
  },
  custMsg: {
    backgroundColor: '#EDEDED',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 0,
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  myMsg: {
    backgroundColor: '#72bed0',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 22,
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
});
