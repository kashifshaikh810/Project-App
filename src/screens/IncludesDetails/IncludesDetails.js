import React, {useEffect, useState} from 'react';
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
import RNFetchBlob from 'rn-fetch-blob';
import {Storage} from '../../../Setup';

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
  const [isImagesLoading, setIsImagesLoading] = useState(false);
  const [storageImagesArr, setStorageImagesArr] = useState([]);
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
        addImgesToStorage(res);
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

  console.log('arr', storageImagesArr);

  const addImgesToStorage = async images => {
    try {
      setIsImagesLoading(true);
      let imageData = images;
      const uri = images.uri;
      const result = await RNFetchBlob.fs.readFile(uri, 'base64');
      const storage = await Storage().ref(`/adImages/${imageData.name}`);
      const task = storage.putString(result, 'base64', {
        contentType: imageData.type,
      });
      task.on('state_changed', taskSnapshot => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      await task.then(imageSnapshot => {
        console.log('Image Upload Successfully');
        Storage()
          .ref(imageSnapshot.metadata.fullPath)
          .getDownloadURL()
          .then(myDownloadURL => {
            console.log('download URL image ', myDownloadURL);
            storageImagesArr.push({adImages: myDownloadURL});
            setStorageImagesArr(storageImagesArr);
            setIsImagesLoading(false);
          });
      });
    } catch (err) {
      console.log(err);
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
    setImgArr(imgArr.slice(0, 5));
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
        isImagesLoading={isImagesLoading}
      />
    </View>
  );
};

export default IncludesDetails;
