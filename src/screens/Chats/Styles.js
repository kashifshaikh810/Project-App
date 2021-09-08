import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  chatHeader: {
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chat: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: responsiveFontSize(2.5),
  },
  tabBarIndicator: {
    borderWidth: responsiveScreenHeight(0.3),
    borderRadius: responsiveScreenWidth(1.5),
  },
  tabBarLabel: {
    color: 'black',
  },
  tabBar: {
    elevation: 0,
    backgroundColor: '#f1f1f1',
  },
  allContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(9),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  allStyle: {
    width: responsiveScreenWidth(13),
    height: responsiveScreenHeight(5),
    borderColor: '#b3b3b3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(5),
  },
  unreadChatStyle: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(5),
    borderColor: '#b3b3b3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(5),
  },
  importantStyle: {
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(5),
    borderColor: '#b3b3b3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(5),
  },
  line: {
    backgroundColor: '#b3b3b3',
    width: responsiveScreenWidth(100),
    height: 0.5,
  },
  renderContainer: {
    flex: 1,
    paddingBottom: responsiveHeight(1),
  },
  renderContentContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(95),
  },
  dataContainer: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(2),
  },
  imgBackContainer: {
    justifyContent: 'center',
  },
  backImg: {
    width: responsiveHeight(7),
    height: responsiveHeight(7),
  },
  profileImgContainer: {
    position: 'relative',
    top: responsiveHeight(5),
    bottom: 0,
    left: responsiveHeight(5),
    right: 0,
  },
  profileImg: {
    width: responsiveHeight(3),
    height: responsiveHeight(3),
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: responsiveHeight(2.5),
  },
  userName: {
    maxWidth: responsiveScreenWidth(80),
    fontSize: responsiveFontSize(2),
  },
  message: {
    marginVertical: responsiveHeight(2),
    maxWidth: responsiveScreenWidth(60),
    minWidth: responsiveScreenWidth(60),
    fontSize: responsiveFontSize(2),
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: responsiveScreenWidth(20),
    alignItems: 'center',
  },
  iconsContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: responsiveScreenWidth(39),
    alignItems: 'center',
  },
  threeDotsContainer: {
    width: responsiveScreenWidth(93),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  messageCount: {
    position: 'absolute',
    top: responsiveScreenHeight(3.5),
    left: responsiveScreenWidth(65),
  },
  title: {
    maxWidth: responsiveScreenWidth(50),
    minWidth: responsiveScreenWidth(50),
    fontSize: responsiveFontSize(2),
  },
  count: {
    backgroundColor: 'lightblue',
    width: responsiveHeight(2.5),
    height: responsiveHeight(2.5),
    borderRadius: 10,
    textAlign: 'center',
  },
  importanatContainer: {
    height: responsiveScreenHeight(2.5),
    width: responsiveScreenWidth(19),
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: responsiveHeight(0.5),
    marginVertical: responsiveHeight(1),
  },
  importanat: {
    fontSize: responsiveFontSize(2),
    color: 'white',
  },
  main: {
    width: responsiveScreenWidth(65),
    alignItems: 'center',
  },
  renderContainerChild: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: responsiveScreenWidth(95),
  },
  allChatStyle: {
    height: responsiveScreenHeight(60),
  },
  sellingContainer: {
    height: responsiveScreenHeight(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    height: responsiveScreenHeight(38),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noMessageImg: {
    width: responsiveScreenWidth(35),
    height: responsiveScreenHeight(17),
    borderRadius: responsiveHeight(15),
  },
  button: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
  },
  noMessageTxt: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
  },
  titileText: {
    fontSize: responsiveFontSize(1.9),
    maxWidth: responsiveScreenWidth(65),
    textAlign: 'center',
  },
  buttonContainer: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6),
    backgroundColor: 'purple',
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
