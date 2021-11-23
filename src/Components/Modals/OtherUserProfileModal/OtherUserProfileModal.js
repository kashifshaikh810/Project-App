/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const OtherUserProfileModal = props => {
  return (
    <Modal visible={props.showModal} animationType="fade" transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <View style={{flex: 1, justifyContent: 'space-evenly'}}>
            <Text style={Styles.textStyles}>Share profile</Text>

            <Text style={Styles.textStyles}>Report user</Text>

            <Text style={Styles.textStyles}>Block user</Text>

            <TouchableOpacity onPress={() => props.setShowModal(false)}>
              <Text style={Styles.textStyles}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OtherUserProfileModal;
