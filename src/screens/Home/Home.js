/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import HomeMarkup from './HomeMarkup';
import {Auth, Database} from '../.../../../../Setup';

const Home = props => {
  const [allAdsData, setAllAdsData] = useState();
  const [data, setData] = useState('');
  let uid = Auth().currentUser.uid;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getAllData();
      getDataForRemoveToFav();
    });

    return unsubscribe;
  }, [props.navigation]);

  const getDataForRemoveToFav = () => {
  let uid = Auth().currentUser.uid;
    Database()
      .ref(`/addToFav/${uid}`)
      .on('value', snapshot => {
        if(snapshot.val()){
          let data = Object.values(snapshot.val());
          data.forEach((a) => setData({heart: a.heart, id: a.items.userId}))
        }
      });
  }

  const getAllData = () => {
    let adsArr = [];
    Database()
      .ref('/userAds/')
      .on('value', snapshot => {
        if(snapshot.val()){
          let usersAds = Object.values(snapshot.val());
          usersAds.forEach((items, index) => {
            let allAds = Object.values(items);
            allAds.forEach(async(ads, i) => {
              await adsArr.push(ads);
              setAllAdsData(adsArr);
            });
          });
        }
      });
  }

  const addToFav = (item, i) => {
  let uid = Auth().currentUser.uid;
    Database().ref(`/addToFav/${uid}`).push({items: item, heart: true});
  };

  const removeToFav = (i) => {
      // Database().ref(`/userAds/${userIds[i]}`).child(pushKeys[i]).update({heart: false});
      // Database().ref(`/addToFav/${uid}/${dataPushKeys[i]}`).remove();
      Alert.alert("Warnning... ! Please go to your favourites and remove it...")
  }

  return (
    <View>
      <HomeMarkup {...props} allAdsData={allAdsData}
      addToFav={addToFav}
      removeToFav={removeToFav}
      uid={uid}
      data={data}
      />
    </View>
  );
};

export default Home;
