/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import HomeMarkup from './HomeMarkup';
import {Database} from '../.../../../../Setup';

const Home = props => {
  const [allAdsData, setAllAdsData] = useState();

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getAllData()
    });

    return unsubscribe;
  }, [props.navigation]);

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

  return (
    <View>
      <HomeMarkup {...props} allAdsData={allAdsData} />
    </View>
  );
};

export default Home;
