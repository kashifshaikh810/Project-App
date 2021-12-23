/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import BasicInformationMarkup from './BasicInformationMarkup';
import {Database, Auth, Storage} from '../../../Setup';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';

const BasicInformation = props => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [aboutYou, setAboutYou] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [dpImage, setDpImage] = useState('');
  const [isImageLoading, setIsImageLoading] = useState(false);
  let userInformation = props.route.params.data;
  let uid = Auth()?.currentUser?.uid;

  const save = () => {
    let password = userInformation.password.toString();
    setIsLoading(true);
    if(dpImage) {
      Database().ref('/userSignUp').child(uid).update({dpImage: dpImage});
      setIsLoading(false);
      Alert.alert("Successfully uploaded...")
    }
    if (
      email !== userInformation.email &&
      userName === userInformation.userName &&
      phone === userInformation.phone &&
      aboutYou === userInformation.aboutYou
    ) {
      Auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
          Database().ref(`/userSignUp/${user.uid}`).set({
            email: email,
            password: password,
            phone: phone,
            userName: userName,
            aboutYou: aboutYou,
          });
          setIsLoading(false);
          console.log('?/?????');
        })
        .catch(err => {
          setIsLoading(false);
          if (
            err.message ===
            '[auth/invalid-email] The email address is badly formatted.'
          ) {
            setErrMsg('The email address is badly formatted');
          } else if (
            err.message ===
            '[auth/email-already-in-use] The email address is already in use by another account.'
          ) {
            setErrMsg('The email address is already in use by another account');
          } else if (
            err.message ===
            '[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.'
          ) {
            setErrMsg(
              'A network error (such as timeout, interrupted connection or unreachable host) has occurred',
            );
          }
        });
    } else {
      if (
        userName !== userInformation.userName &&
        aboutYou !== userInformation.aboutYou
      ) {
        Database()
          .ref('/userSignUp')
          .child(uid)
          .update({userName: userName, aboutYou: aboutYou});
      } else if (
        userName !== userInformation.userName &&
        phone !== userInformation.phone &&
        aboutYou !== userInformation.aboutYou
      ) {
        Database()
          .ref('/userSignUp')
          .child(uid)
          .update({userName: userName, aboutYou: aboutYou, phone: phone});
      } else if (userName !== userInformation.userName) {
        Database().ref('/userSignUp').child(uid).update({userName: userName});
        setIsLoading(false);
      } else if (phone !== userInformation.phone) {
        Database().ref('/userSignUp').child(uid).update({phone: phone});
        setIsLoading(false);
      } else if (aboutYou !== userInformation.aboutYou || aboutYou) {
        Database().ref('/userSignUp').child(uid).update({aboutYou: aboutYou});
        setIsLoading(false);
      }
    }
  };

  const userNameHandler = text => {
    setUserName(text);
    setErrMsg('');
  };

  const phoneHandler = text => {
    setPhone(text);
    setErrMsg('');
  };

  const emailHandler = text => {
    setEmail(text);
    setErrMsg('');
  };

  const aboutYouHandler = text => {
    setAboutYou(text);
    setErrMsg('');
  };

  const upload = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      for (const res of file) {
        addImgeToStorage(res);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  const addImgeToStorage = async images => {
    setIsImageLoading(true);
    try {
      let imageData = images;
      const uri = images.uri;
      const result = await RNFetchBlob.fs.readFile(uri, 'base64');
      const storage = await Storage().ref(`/dpImages/${imageData.name}`);
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
            setDpImage(myDownloadURL);
            setIsImageLoading(false);
          });
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setEmail(userInformation.email);
    setPhone(userInformation.phone);
    setUserName(userInformation.userName);
    setAboutYou(userInformation ? userInformation.aboutYou : '');
    setDpImage(userInformation.dpImage);
  }, [props.route.params]);

  // console.log(userInformation, dpImage);
  return (
    <>
      <BasicInformationMarkup
        {...props}
        save={save}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        userName={userName}
        setUserName={setUserName}
        aboutYou={aboutYou}
        setAboutYou={setAboutYou}
        isLoading={isLoading}
        errMsg={errMsg}
        userNameHandler={userNameHandler}
        emailHandler={emailHandler}
        phoneHandler={phoneHandler}
        aboutYouHandler={aboutYouHandler}
        upload={upload}
        userInformation={userInformation}
        isImageLoading={isImageLoading}
        dpImage={dpImage}
      />
    </>
  );
};

export default BasicInformation;
