import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

export const Styles = StyleSheet.create({
  imgBack: {
    width: '100%',
    height: '75.5%',
  },
  iconContainer: {
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 30,
  },
  iconSContainerMain: {
    borderWidth: 2,
    width: responsiveScreenWidth(13),
    height: responsiveScreenHeight(6.2),
    borderRadius: 30,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
