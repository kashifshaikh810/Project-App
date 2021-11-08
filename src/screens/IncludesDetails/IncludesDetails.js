import React, {useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Camera from '../../Components/Camera/Camera';
import IncludesDetailsMarkup from './IncludesDetailsMarkup';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import CheckIcon from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';

const IncludesDetails = props => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showRemoveImgModal, setShowRemoveImgModal] = useState({
    shown: false,
    indexNum: '',
  });
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [camImgCaptureDone, setCamImgCaptureDone] = useState(false);
  const [flashMode, setFlashMode] = useState(false);
  const [imgPickerPic, setImgPickerPic] = useState('');
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
    setShowModal(false);
    try {
      const file = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of file) {
        imgArr.push({camera: res.uri});
        setImgPickerPic(res.uri);
        setImgArr(imgArr.slice(0, 10));
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
    setShowCamera(false);
    setCamImgCaptureDone(true);
  };

  const emptyImg = index => {
    let arr = [...imgArr];
    arr.splice(index, 1);
    setImgArr(arr);
    setShowRemoveImgModal({shown: false});
  };

  const captureImgHandler = () => {
    imgArr.push({camera: camImg});
    setImgArr(imgArr.slice(0, 10));
    setCamImgCaptureDone(false);
  };

  const click = () => {
    setShowModal(false);
    setShowCamera(true);
  };

  const fullImgErr = () => {
    Alert.alert('You can add at most 10 photos.');
  };

  return (
    <View>
      <StatusBar hidden={camImgCaptureDone ? true : false} />
      {showCamera ? (
        <Camera
          setShowCamera={setShowCamera}
          takePicture={takePicture}
          flashMode={flashMode}
          setFlashMode={setFlashMode}
        />
      ) : null}
      {camImgCaptureDone ? (
        <ImageBackground source={{uri: camImg}} style={Styles.imgBack}>
          <View style={Styles.iconContainer}>
            <TouchableOpacity onPress={() => setCamImgCaptureDone(false)}>
              <View style={Styles.iconSContainerMain}>
                <CloseIcon name="close" size={25} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => captureImgHandler()}>
              <View style={Styles.iconSContainerMain}>
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
        click={click}
        showRemoveImgModal={showRemoveImgModal}
        setShowRemoveImgModal={setShowRemoveImgModal}
        fullImgErr={fullImgErr}
      />
    </View>
  );
};

export default IncludesDetails;
