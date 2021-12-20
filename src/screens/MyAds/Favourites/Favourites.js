import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Styles} from './Styles';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import {Auth, Database} from '../../../../Setup';

export const renderItemsTwo = ({item, index}, props, userIds, pushKeys) => {
  const removeToFav = (i) => {
    Database().ref(`/userAds/${userIds[i]}`).child(pushKeys[i]).update({heart: false});
  }

  console.log(item);
  return (
    <>
   {item.heart ? <TouchableOpacity
      style={Styles.renderItemContainer}
      activeOpacity={1}
      onPress={() =>
        props.navigation.navigate('ViewMyFullFavourtiesAd', {data: item})
      }>
      <View style={Styles.renderItemContent}>
        <ImageBackground source={{uri: item.adImages[0].adImages}} style={Styles.imgBackground}>
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
            {item.titile}
          </Text>
        </View>
        <View style={Styles.flexContainer}>
          <Text style={Styles.rsStyle}>Rs {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity> : []}
    </>
  );
};

const Favourites = props => {
  const [allAdsData, setAllAdsData] = useState();
  const [userIds, setuserIds] = useState('');
  const [pushKeys, setpushKeys] = useState('');
  const [favOrNot, setfavOrNot] = useState('');
  let uid = Auth().currentUser.uid;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getAllData()
    });

    return unsubscribe;
  }, [props.navigation]);

  const getAllData = () => {
    let arr = [];
    Database()
      .ref(`/addToFav/${uid}`)
      .on('value', snapshot => {
        if(snapshot.val()){
          let favAds = Object.values(snapshot.val());
          favAds.forEach((items, index) => {
            let favAd = Object.values(items);
            favAd.forEach((ads, i) => {
              arr.push(ads);
              setAllAdsData(arr);
            });
          });
        }
      });
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
     
     {/* {
       allAdsData.length > 0 &&  
      <View style={{width: '100%', height: 300, justifyContent: 'center', alignItems: 'center'}}><Text>You haven't liked anything yet.</Text></View>
     } */}

      <FlatList
        data={allAdsData}
        renderItem={item => renderItemsTwo(item, props)}
        numColumns={2}
      />
    </View>
  );
};

export default Favourites;
