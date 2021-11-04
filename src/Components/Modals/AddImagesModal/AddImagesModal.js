import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

const AddImagesModal = props => {
  const click = () => {
    props.setShowModal(false);
    props.setShowCamera(true);
  };
  return (
    <Modal visible={props.showModal} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <TouchableOpacity onPress={() => click()}>
            <Text style={Styles.textStyles}>Take a photo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.upload()}>
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
