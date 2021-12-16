import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const ImportantChatModal = props => {
  return (
    <Modal visible={props.showModal.show} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <TouchableOpacity onPress={() => props.deleteChat()}>
            <Text style={[Styles.textStyles, {color: 'red'}]}>Delete chat</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.RemoveImportant()}>
            <Text style={Styles.textStyles}>Remove important</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.setShowModal({ show: false})}>
            <Text style={Styles.textStyles}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImportantChatModal;
