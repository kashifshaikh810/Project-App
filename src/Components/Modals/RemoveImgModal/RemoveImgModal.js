import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const RemoveImgModal = props => {
  return (
    <Modal
      visible={props.showRemoveImgModal.shown}
      transparent
      animationType="fade">
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <TouchableOpacity
          style={{padding: 10}}
            onPress={() => props.emptyImg(props.showRemoveImgModal.indexNum)}>
            <Text style={Styles.textStyles}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{padding: 10}}
            onPress={() => props.setShowRemoveImgModal({shown: false})}>
            <Text style={Styles.textStyles}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveImgModal;
