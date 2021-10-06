import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const MyAdsDeleteModal = props => {
  return (
    <Modal visible={props.showModal} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <TouchableOpacity>
            <Text style={[Styles.textStyles, {color: 'red'}]}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.setShowModal(false)}>
            <Text style={Styles.textStyles}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MyAdsDeleteModal;
