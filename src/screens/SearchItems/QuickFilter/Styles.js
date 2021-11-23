import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: responsiveScreenWidth(52),
    height: responsiveScreenHeight(6),
  },
  headerText: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    color: '#012f33',
  },
  inputContainer: {
    height: responsiveScreenHeight(11),
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(6.5),
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
  },
  textInput: {
    paddingHorizontal: responsiveScreenWidth(2),
    fontSize: responsiveScreenFontSize(2.2),
  },
  cencelButtonParent: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cancelButtonContainer: {
    backgroundColor: '#023034',
    width: responsiveScreenWidth(18),
    height: responsiveScreenHeight(6),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cencelButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  headingParent: {
    backgroundColor: '#eaeeef',
    height: responsiveScreenHeight(7),
    justifyContent: 'center',
  },
  headingContainer: {
    width: responsiveScreenWidth(47),
    alignItems: 'center',
  },
  headingText: {
    fontWeight: 'bold',
    color: '#0b3135',
    fontSize: responsiveFontSize(2.2),
  },
  mapContainer: {
    height: responsiveScreenHeight(36),
    overflow: 'hidden',
  },
  searchParent: {
    flexDirection: 'row',
    height: responsiveScreenHeight(4.5),
    marginVertical: responsiveScreenHeight(1.3),
    alignItems: 'center',
  },
  iconContainer: {
    width: responsiveScreenWidth(19),
    alignItems: 'center',
  },
  search: {
    color: '#093034',
    fontSize: responsiveFontSize(2.1),
  },
  noSearch: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    alignItems: 'center',
  },
  touchAble: {
    width: '92%',
    height: responsiveScreenHeight(6),
    justifyContent: 'space-evenly',
  },
  dataText: {
    color: '#062e30',
    fontSize: responsiveScreenFontSize(2.1),
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});
