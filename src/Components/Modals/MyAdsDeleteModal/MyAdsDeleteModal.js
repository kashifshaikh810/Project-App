/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {responsiveScreenHeight} from '../../Utility/ResponsiveDimensions/Responsive';
import {Styles} from './Styles';

const MyAdsDeleteModal = props => {
  return (
    <Modal visible={props.showModal.isShow} transparent animationType="fade">
      <View style={Styles.modalContainer}>
        <View
          style={[
            Styles.modalMain,
            {
              height:
                props.showModal.postType === 'Active'
                  ? responsiveScreenHeight(35)
                  : responsiveScreenHeight(15),
            },
          ]}>
          {props.showModal.postType === 'Active' && (
            <TouchableOpacity onPress={() => props.handleEditOnPress()}>
              <Text style={Styles.textStyles}>Edit</Text>
            </TouchableOpacity>
          )}

          {props.showModal.postType === 'Active' && (
            <TouchableOpacity onPress={() => props.handleDeactivateOnPress()}>
              <Text style={Styles.textStyles}>Deactivate</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => props.handleDeleteOnPress()}>
            <Text style={[Styles.textStyles, {color: 'red'}]}>Delete</Text>
          </TouchableOpacity>

          {props.showModal.postType === 'Active' && (
            <TouchableOpacity onPress={() => props.handleMarkAsSoldOnPress()}>
              <Text style={Styles.textStyles}>Mark as sold</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => props.setShowModal({ isShow: false})}>
            <Text style={Styles.textStyles}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MyAdsDeleteModal;
