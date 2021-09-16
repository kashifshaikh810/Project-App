/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from '../../Utility/ResponsiveDimensions/Responsive';
import {Styles} from './Styles';

const LeaveModal = props => {
  const leave = () => {
    props.navigation.goBack();
    props.setShowLeaveModal(false);
  };

  return (
    <Modal visible={props.showLeaveModal} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <View>
            <Text
              style={[Styles.textStyles, {fontSize: responsiveFontSize(2.7)}]}>
              You will lose progress
            </Text>

            <Text
              style={[
                Styles.textStyles,
                {
                  height: responsiveScreenHeight(7),
                  textAlignVertical: 'center',
                  fontWeight: 'normal',
                },
              ]}>
              By leaving the screen you will lose current progress
            </Text>
          </View>

          <View style={Styles.main}>
            <View style={Styles.buttonsContainer}>
              <TouchableOpacity onPress={() => leave()}>
                <Text
                  style={[
                    Styles.textStyles,
                    {fontSize: responsiveFontSize(2.2)},
                  ]}>
                  LEAVE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => props.setShowLeaveModal(false)}>
                <Text
                  style={[
                    Styles.textStyles,
                    {fontSize: responsiveFontSize(2.2)},
                  ]}>
                  CANCEL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LeaveModal;
