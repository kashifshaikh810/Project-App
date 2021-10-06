import React from 'react';
import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import {data} from './Data';

const SortingAdsModal = props => {

  const click = item => {
    props.setShowSortingAdsModal({
      shown: false,
      data: item.name,
    });
  };

  const renderItems = ({item}) => {
    return (
      <View style={Styles.renderItemContainer}>
        <TouchableOpacity style={Styles.touchAble} onPress={() => click(item)}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                Styles.itemTxt,
                {color: item.id ? '#4376e8' : '#154040'},
              ]}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal visible={props.showSortingAdsModal.shown} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <View style={Styles.container}>
            <View style={Styles.iconContainer}>
              <TouchableOpacity
                onPress={() => props.setShowSortingAdsModal({shown: false})}>
                <CloseIcon name="close" size={25} />
              </TouchableOpacity>
              <Text style={Styles.offeringTxt}>Filters</Text>
            </View>
          </View>

          <FlatList
            style={Styles.flatList}
            data={data || []}
            renderItem={item => renderItems(item)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SortingAdsModal;
