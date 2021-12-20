/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, BackHandler, Alert} from 'react-native';
import HomeMarkup from './HomeMarkup';
import {Auth, Database} from '../.../../../../Setup';

const Home = props => {
  const [allAdsData, setAllAdsData] = useState();
  const [userIds, setuserIds] = useState('');
  const [pushKeys, setpushKeys] = useState('');
  let uid = Auth().currentUser.uid;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getAllData()
    });

    return unsubscribe;
  }, [props.navigation]);

  const getAllData = () => {
    let adsArr = [];
    let keyArr = [];
    Database()
      .ref('/userAds/')
      .on('value', snapshot => {
        if(snapshot.val()){
          let usersAds = Object.values(snapshot.val());
          let userUids = Object.keys(snapshot.val());
          setuserIds(userUids);
          usersAds.forEach((items, index) => {
            let allAds = Object.values(items);
            let pushKeys = Object.keys(items);
            keyArr.push(pushKeys);
            setpushKeys(keyArr.flat(Infinity));
            allAds.forEach(async(ads, i) => {
              await adsArr.push(ads);
              setAllAdsData(adsArr);
            });
          });
        }
      });
  }

  const addToFav = (item, i) => {
    Database().ref(`/addToFav/${uid}`).push({items: item, heart: true});
    Database().ref(`/userAds/${userIds[i]}`).child(pushKeys[i]).update({heart: true});
  };

  const removeToFav = (i) => {
    Database().ref(`/userAds/${userIds[i]}`).child(pushKeys[i]).update({heart: false});
  }

  return (
    <View>
      <HomeMarkup {...props} allAdsData={allAdsData}
      addToFav={addToFav}
      removeToFav={removeToFav}
      uid={uid}
      />
    </View>
  );
};

export default Home;
