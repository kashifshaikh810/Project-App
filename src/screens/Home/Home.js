/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import HomeMarkup from './HomeMarkup';
import {Database} from '../.../../../../Setup';

const Home = props => {
  const [allAdsData, setAllAdsData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setIsLoading(true);
      let adsArr = [];
      Database()
        .ref('/userAds/')
        .on('value', snapshot => {
            let usersAds = Object.values(snapshot.val());
            let arr = usersAds;
            arr.forEach((items, index) => {
              let allAds = Object.values(items);
              allAds.forEach((ads, i) => {
                adsArr.push(ads);
                console.log(adsArr, 'dd');
                setAllAdsData(adsArr);
                setIsLoading(false);
              });
            });
        });
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <View>
      <HomeMarkup {...props} allAdsData={allAdsData} isLoading={isLoading} />
    </View>
  );
};

export default Home;
