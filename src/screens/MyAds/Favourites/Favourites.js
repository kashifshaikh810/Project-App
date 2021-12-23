import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {Styles} from './Styles';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import {Auth, Database, firebase} from '../../../../Setup';

export const renderItemsTwo = ({item, index}, props, dataPushKeys, setAllAdsData, allAdsData) => {
  const removeToFav = (i) => {
      let uid = Auth().currentUser.uid;
      Database().ref(`/addToFav/${uid}/${dataPushKeys[i]}`).remove();
      if(allAdsData.length === 1){
        setAllAdsData([]);
      }
  }

  return (
    <>
   <TouchableOpacity
      style={Styles.renderItemContainer}
      activeOpacity={1}
      onPress={() =>
        props.navigation.navigate('ViewMyFullFavourtiesAd', {data: item.items, heart: item.heart})
      }>
      <View style={Styles.renderItemContent}>
        <ImageBackground 
        source={{uri: item.items.adImages[0].adImages}}
         style={Styles.imgBackground}
        >
          <View style={Styles.insideContainer}>
            <View style={Styles.iconContainer}>
                <TouchableOpacity
                  style={Styles.iconMain}
                  onPress={() => removeToFav(index)}>
                  <MyAdsIcon name="heart" size={16} color="white" />
                </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View>
          <Text style={Styles.description} numberOfLines={2}>
            {item.items.titile}
          </Text>
        </View>
        <View style={Styles.flexContainer}>
          <Text style={Styles.rsStyle}>Rs {item.items.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
    </>
  );
};

const Favourites = props => {
  const [allAdsData, setAllAdsData] = useState([]);
  const [dataPushKeys, setDataPushKeys] = useState('');
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getAllData();
    });

    return unsubscribe;
  }, [props.navigation]);

  const getAllData = () => {
    let uid = firebase?.auth()?.currentUser?.uid;
    let arr = [];
    setisLoading(true);
    Database()
      .ref(`/addToFav/${uid}`)
      .on('value', snapshot => {
        if(snapshot.val() === null){
          setisLoading(false);
        }else{
          let favAds = snapshot.val() ? Object.values(snapshot.val()) : [];
          let keys = snapshot.val() ? Object.keys(snapshot.val()) : [];
          setDataPushKeys(keys);
          favAds.forEach(async(items, index) => {
            let favAd = items;
            await arr.push(favAd);
            setAllAdsData(arr);
            setisLoading(false);
          });
        }
      })
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.midContainer}>
        <View style={Styles.midContainerChild}>
          <Text style={Styles.heavyDiscountText}>
            Heavy discount on packages
          </Text>
          <View style={Styles.viewPackageBoxContainer}>
            <TouchableOpacity style={Styles.viewPackageBox} activeOpacity={0.6}>
              <Text style={Styles.viewPackageText}>View packages</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
     {
       allAdsData.length === 0 &&  
      <View style={{width: '100%', height: 300, justifyContent: 'center', alignItems: 'center'}}><Text>You haven't liked anything yet.</Text></View>
     }

     {isLoading ? <ActivityIndicator size={50} color="green" /> : <FlatList
        data={allAdsData}
        renderItem={item => renderItemsTwo(item, props, dataPushKeys, setAllAdsData, allAdsData)}
        numColumns={2}
      />}
    </View>
  );
};

export default Favourites;
