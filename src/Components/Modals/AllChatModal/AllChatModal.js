import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const AllChatModal = props => {
  return (
    <Modal visible={props.showModal.show} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <TouchableOpacity onPress={() => props.deleteChat()}>
            <Text style={[Styles.textStyles, {color: 'red'}]}>Delete chat</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.markAsImportant()}>
            <Text style={Styles.textStyles}>{props.mark === "important" ? "Remove important" : "Mark as important"}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.setShowModal({ show: false})}>
            <Text style={Styles.textStyles}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AllChatModal;
