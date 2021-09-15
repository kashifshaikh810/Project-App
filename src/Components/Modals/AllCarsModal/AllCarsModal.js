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
import {data} from './Data';

const AllCarsModal = props => {
  const routeName = props.route.params.routeData.name;

  const click = item => {
    props.setShowCarsModal({
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
    <Modal visible={props.showCarsModal.shown} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <View style={Styles.container}>
            <View style={Styles.iconContainer}>
              <TouchableOpacity
                onPress={() => props.setShowCarsModal({shown: false})}>
                <CloseIcon name="close" size={25} />
              </TouchableOpacity>
              <Text style={Styles.offeringTxt}>Choose Make</Text>
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
            data={(routeName === 'Cars' && data) || []}
            renderItem={item => renderItems(item)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AllCarsModal;
