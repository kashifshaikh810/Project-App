/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from '../../Utility/ResponsiveDimensions/Responsive';
import {Styles} from './Styles';

const MarkAsSoldModal = props => {
  const leave = () => {
    props.setShowMarkAsSoldModal(false);
  };

  return (
    <Modal visible={props.showMarkAsSoldModal} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <View>
            <Text
              style={[
                Styles.textStyles,
                {fontSize: responsiveFontSize(2.7), fontWeight: 'bold'},
              ]}>
              {props.heading}
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
              {props.titile}
            </Text>
          </View>

          <View style={Styles.main}>
            <View style={Styles.buttonsContainer}>
              <TouchableOpacity onPress={() => leave()}>
                <Text
                  style={[
                    Styles.textStyles,
                    {fontSize: responsiveFontSize(1.9)},
                  ]}>
                  {props.cancel}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.setShowMarkAsSoldModal(false)}>
                <Text
                  style={[
                    Styles.textStyles,
                    {fontSize: responsiveFontSize(1.9)},
                  ]}>
                  {props.markAsSold}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MarkAsSoldModal;
