import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Camera from '../../Components/Camera/Camera';
import IncludesDetailsMarkup from './IncludesDetailsMarkup';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import CheckIcon from 'react-native-vector-icons/Feather';

const IncludesDetails = props => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [camImgCaptureDone, setCamImgCaptureDone] = useState(false);
  const [imgArr, setImgArr] = useState([]);
  const [showPhonesModal, setShowPhonesModal] = useState({
    shown: false,
    routeData: '',
    data: '',
  });
  const [showCarsModal, setShowCarsModal] = useState({
    shown: false,
    routeData: '',
    data: '',
  });
  const [itemCondition, setItemCondition] = useState('');
  const [itemType, setItemType] = useState(null);
  const [camImg, setCamImg] = useState('');

  const upload = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setShowModal(false);
      for (const res of file) {
        console.log(res.uri, res.name, res.size, res.type, 'pic data');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        setShowModal(false);
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setCamImg(data.uri);
    console.log(data.uri);
    setShowCamera(false);
    setCamImgCaptureDone(true);
  };

  const emptyImg = index => {
    let arr = [...imgArr];
    arr.splice(index, 1);
    setImgArr(arr);
  };

  const captureImgHandler = () => {
    imgArr.push({camera: camImg});
    setImgArr(imgArr);
    setCamImgCaptureDone(false);
  };

  console.log(props);
  return (
    <View>
      <StatusBar hidden={camImgCaptureDone ? true : false} />
      {showCamera ? (
        <Camera setShowCamera={setShowCamera} takePicture={takePicture} />
      ) : null}
      {camImgCaptureDone ? (
        <ImageBackground
          source={{uri: camImg}}
          style={{width: '100%', height: '75.5%'}}>
          <View
            style={{
              height: '70%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginHorizontal: 30,
            }}>
            <TouchableOpacity onPress={() => setCamImgCaptureDone(false)}>
              <View
                style={{
                  borderWidth: 2,
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CloseIcon name="close" size={25} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => captureImgHandler()}>
              <View
                style={{
                  borderWidth: 2,
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CheckIcon name="check" size={25} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : null}
      <IncludesDetailsMarkup
        {...props}
        upload={upload}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        itemCondition={itemCondition}
        setItemCondition={setItemCondition}
        itemType={itemType}
        setItemType={setItemType}
        showModal={showModal}
        setShowModal={setShowModal}
        showPhonesModal={showPhonesModal}
        setShowPhonesModal={setShowPhonesModal}
        setShowCarsModal={setShowCarsModal}
        showCarsModal={showCarsModal}
        showLeaveModal={showLeaveModal}
        setShowLeaveModal={setShowLeaveModal}
        showCamera={showCamera}
        setShowCamera={setShowCamera}
        camImg={camImg}
        emptyImg={emptyImg}
        imgArr={imgArr}
      />
    </View>
  );
};

export default IncludesDetails;
