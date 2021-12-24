/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert, LogBox, View} from 'react-native';
import HomeMarkup from './HomeMarkup';
import {firebase, Database} from '../.../../../../Setup';

const Home = props => {
  const [allAdsData, setAllAdsData] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let uid = firebase.auth()?.currentUser?.uid;

  LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.']);

  const getDataForRemoveToFav = () => {
    let uid = firebase.auth()?.currentUser?.uid;
    setIsLoading(true);
    let arr = [];
    Database()
      .ref(`/addToFav/${uid}`)
      .on('value', snapshot => {
          let data = snapshot.val() ? Object.values(snapshot.val()) : [] && setData({});
            data && data?.filter(async(a) => {
              await arr.push({heart: a.heart, id: a.items.userId, userName: a.items.userName, title: a.items.titile});
              setData(arr)
            });
            setIsLoading(false);
      });
  }

  const getAllData = () => {
    setIsLoading(true);
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
              setIsLoading(false);
            });
          });
        }
      });
  }

  const addToFav = (item, i) => {
  let uid = firebase.auth()?.currentUser?.uid;
    Database().ref(`/addToFav/${uid}`).push({items: item, heart: true});
  };

  const removeToFav = (i) => {
      // Database().ref(`/userAds/${userIds[i]}`).child(pushKeys[i]).update({heart: false});
      // Database().ref(`/addToFav/${uid}/${dataPushKeys[i]}`).remove();
      Alert.alert("Warnning... ! Please go to your favourites and remove it...")
  }

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getAllData();
      getDataForRemoveToFav();
    });

    return unsubscribe;
  }, [props.navigation]);
  
  return (
    <View>
      <HomeMarkup {...props} allAdsData={allAdsData}
      addToFav={addToFav}
      removeToFav={removeToFav}
      uid={uid}
      data={data}
      isLoading={isLoading}
      />
    </View>
  );
};

export default Home;
