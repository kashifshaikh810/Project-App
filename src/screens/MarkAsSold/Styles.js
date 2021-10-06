import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
    responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(8),
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: responsiveFontSize(2.7),
    fontWeight: 'bold',
    color: '#3a5752',
  },
  headerMainContainer: {
    backgroundColor: 'white',
    elevation: 3,
  },
  midParentContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  midContainer: {
    marginHorizontal: responsiveScreenWidth(6),
    justifyContent: 'center',
  },
  adDescription: {
    color: '#072c31',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.3),
  },
  rs: {
    color: '#072c31',
    fontSize: responsiveFontSize(2.2),
    marginVertical: responsiveHeight(0.6),
  },
  imgContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  img: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(7),
  },
  boughtTextContainer: {
    flex: 0.1,
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(6),
    borderBottomWidth: 0.3,
    borderBottomColor: '#b3b3b3',
  },
  boughtText: {
    fontSize: responsiveFontSize(2.7),
    fontWeight: 'bold',
    color: '#012f34',
  },
  lastSectionParentContainer: {
    flex: 1,
  },
  lastSectionContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(9),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: responsiveScreenWidth(67),
  },
  defaultImg: {
    width: responsiveScreenWidth(12.6),
    height: responsiveScreenHeight(6),
  },
  someOne: {
    color: '#85979a',
    fontSize: responsiveFontSize(2.2),
  },
});
