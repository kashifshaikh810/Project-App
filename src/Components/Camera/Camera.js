import React from 'react';
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

const Camera = props => {
  return (
    <View style={Styles.container}>
      <StatusBar hidden={true} />
      <RNCamera
        flashMode="on"
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
            <View
              style={{
                height: '98%',
                alignItems: 'flex-end',
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={{height: '18%', width: '35%', justifyContent: 'center', alignItems: 'center'}} onPress={() => props.setShowCamera(false)}>
                <View
                  style={{
                    borderWidth: 2,
                    height: 45,
                    width: 45,
                    borderRadius: 25,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <CloseIcon name="close" size={25} color="white" />
                </View>
              </TouchableOpacity>
            
            <View style={{width: '30%', height: '13.5%', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => props.takePicture(camera)}>
                <View
                  style={{
                    backgroundColor: '#b3b3b3',
                    width: 55,
                    height: 55,
                    borderRadius: 30,
                  }}
                />
              </TouchableOpacity>
                <Text style={{color: 'white', marginVertical: 10}}>PHOTO</Text>
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
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
