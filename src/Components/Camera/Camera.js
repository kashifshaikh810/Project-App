import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../Utility/ResponsiveDimensions/Responsive';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import FlashIcon from 'react-native-vector-icons/MaterialIcons';

const Camera = props => {
  return (
    <View style={Styles.container}>
      <StatusBar hidden={true} />
      <RNCamera
        flashMode={props.flashMode ? 'on' : 'off'}
        style={Styles.container}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}>
        {({camera, status, recordAudioPermissionStatus}) => {
          return (
            <View style={Styles.cameraContainer}>
              <TouchableOpacity
                style={Styles.flashIcon}
                onPress={() => props.setFlashMode(!props.flashMode)}>
                <FlashIcon
                  name={props.flashMode ? 'flash-on' : 'flash-off'}
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
              <View style={Styles.bottomContainer}>
                <TouchableOpacity
                  style={Styles.closeIconContainer}
                  onPress={() => props.setShowCamera(false)}>
                  <View style={Styles.closeIconMain}>
                    <CloseIcon name="close" size={25} color="white" />
                  </View>
                </TouchableOpacity>

                <View style={Styles.picCaptureButtonContainer}>
                  <TouchableOpacity
                    style={Styles.picCaptureTouchAble}
                    onPress={() => props.takePicture(camera)}>
                    <View style={Styles.photoTextContainer} />
                  </TouchableOpacity>
                  <Text style={Styles.photo}>PHOTO</Text>
                </View>
              </View>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '75.5%',
  },
  flashIcon: {
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    height: '88%',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  closeIconContainer: {
    height: '18%',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconMain: {
    borderWidth: 2,
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(12.5),
    borderRadius: 25,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picCaptureButtonContainer: {
    width: '30%',
    height: '13.5%',
    alignItems: 'center',
  },
  picCaptureTouchAble: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoTextContainer: {
    backgroundColor: '#b3b3b3',
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  photo: {
    color: '#f0c634',
    fontSize: 16,
    marginVertical: 10,
  },
});

export default Camera;
