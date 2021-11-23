import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const ChatDeleteModal = props => {
  return (
    <Modal visible={props.showModal} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <TouchableOpacity>
            <Text style={[Styles.textStyles, {color: 'red'}]}>Delete chat</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={Styles.textStyles}>Report user</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={Styles.textStyles}>Show tips</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.setShowModal(false)}>
            <Text style={Styles.textStyles}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChatDeleteModal;
