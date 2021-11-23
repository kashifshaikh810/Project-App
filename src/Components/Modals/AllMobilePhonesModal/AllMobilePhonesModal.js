import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import {data, registerData} from './Data';
import {responsiveScreenWidth} from '../../Utility/ResponsiveDimensions/Responsive';

const AllMobilePhonesModal = props => {
  const routeName = props.route.params.routeData.name;

  const click = item => {
    props.setShowPhonesModal({
      shown: false,
      routeData: props.route.params.routeData.name,
      data: item,
    });
  };

  const renderItems = ({item}) => {
    return (
      <View style={Styles.renderItemContainer}>
        <TouchableOpacity style={Styles.touchAble} onPress={() => click(item)}>
          <Text style={Styles.itemTxt}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal visible={props.showPhonesModal.shown} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <View style={Styles.container}>
            <View
              style={[
                Styles.iconContainer,
                {
                  width:
                    routeName === 'Cars'
                      ? responsiveScreenWidth(100)
                      : responsiveScreenWidth(55),
                },
              ]}>
              <TouchableOpacity
                onPress={() => props.setShowPhonesModal({shown: false})}>
                <CloseIcon name="close" size={25} />
              </TouchableOpacity>
              <Text
                style={[
                  Styles.offeringTxt,
                  {
                    width:
                      routeName === 'Cars'
                        ? responsiveScreenWidth(75)
                        : responsiveScreenWidth(40),
                  },
                ]}>
                {routeName === 'Cars'
                  ? 'Choose Installment plan'
                  : 'Choose Make'}
              </Text>
            </View>
            <View style={Styles.headerContainer}>
              <View style={Styles.headerContent}>
                <SearchIcon name="search" size={20} />
                <TextInput style={Styles.textInput} />
              </View>
            </View>
          </View>

          <FlatList
            style={Styles.flatList}
            data={
              (routeName === 'Mobile Phones' && data) ||
              (routeName === 'Cars' && registerData) ||
              (routeName === 'Cars on Installments' && registerData) ||
              []
            }
            renderItem={item => renderItems(item)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AllMobilePhonesModal;
