import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalMain: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
  },
  textStyles: {
    fontSize: responsiveFontSize(2.2),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(55),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  offeringTxt: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.8),
    color: '#154040',
  },
  renderItemContainer: {
    height: responsiveScreenHeight(6.5),
    width: responsiveScreenWidth(100),
    borderBottomWidth: 1,
    borderColor: '#f4f4f4',
  },
  touchAble: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTxt: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    marginHorizontal: responsiveScreenWidth(6.5),
    color: '#7a888a',
  },
  headerContainer: {
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#183338',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(5),
  },
  textInput: {
    width: responsiveScreenWidth(100),
  },
  flatList: {
    maxHeight: responsiveScreenHeight(70),
    marginVertical: responsiveScreenHeight(1),
  },
});
