import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const AddImagesModal = props => {
  return (
    <Modal visible={props.showModal} transparent animationType="fade">
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <TouchableOpacity
            disabled={true}
            onPress={() =>
              props.imgArr.length === 5 ? props.fullImgErr() : props.click()
            }>
            <Text style={Styles.textStyles}>Take a photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              props.imgArr.length === 5 ? props.fullImgErr() : props.upload()
            }>
            <Text style={Styles.textStyles}>Pick from gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.setShowModal(false)}>
            <Text style={Styles.textStyles}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddImagesModal;
