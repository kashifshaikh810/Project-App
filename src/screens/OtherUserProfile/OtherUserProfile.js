/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import IconLeft from 'react-native-vector-icons/Feather';
import {Auth, Database} from '../../../Setup';
import OtherUserProfileModal from '../../Components/Modals/OtherUserProfileModal/OtherUserProfileModal';
import {Styles} from './Styles';

const OtherUserProfile = props => {
  const [showModal, setShowModal] = useState(false);
  const [userAdsData, setUserAdsData] = useState();
  const [addToFav, setAddToFav] = useState({bool: false, id: ''});
  let uid = Auth()?.currentUser?.uid;
  const data = props.route.params.userData;
  const year = props.route.params.year;
  const monthName = props.route.params.monthName;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      Database()
        .ref(`/userAds/${data.userId}`)
        .on('value', snapshot => {
          let ads = snapshot.val() ? Object.values(snapshot.val()) : [];
          setUserAdsData(ads);
        });
    });
    return unsubscribe;
  }, [props.navigation]);

  const renderItemsTwo = ({item, index}) => {
    const monthNamesArray = [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let date = new Date(item.postedDate);
    let monthName = monthNamesArray[date.getMonth()];
    let postDate = new Date(item.postedDate).getDate();

    let monthCopy = new Date(item.joinDate);
    let monthNameCopy = monthNamesArray[monthCopy.getMonth()];
    let dateCopy = new Date(item.joinDate).getDate();

    return (
      <View style={Styles.renderItemContainer}>
        <View style={Styles.renderItemContent}>
          <ImageBackground
            source={item ? {uri: item?.adImages[0]?.adImages} : {}}
            style={Styles.imgBackground}>
            <View style={Styles.insideContainer}>
              <View style={Styles.featuredTextContainer}>
                <Text style={Styles.featuredText}>FEATURED</Text>
              </View>
              {data.userId !== uid && (
                <View style={Styles.iconContainer}>
                  <TouchableOpacity
                    style={Styles.iconMain}
                    onPress={() =>
                      setAddToFav({bool: !addToFav.bool, id: item.id})
                    }>
                    <MyAdsIcon
                      name={
                        addToFav.bool && addToFav.id === item.id
                          ? 'heart'
                          : 'heart-outlined'
                      }
                      size={16}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ImageBackground>

          <View>
            <Text style={Styles.rsStyle}>Rs {item.price}</Text>
          </View>
          <View style={Styles.flexContainer}>
            <Text style={Styles.description} numberOfLines={1}>
              {item.titile}
            </Text>
            <View style={Styles.rowContainer}>
              <Text style={Styles.locationStyle} numberOfLines={1}>
                {item.location}
              </Text>
              <View style={Styles.dateContainer}>
                <Text style={Styles.locationStyle}>
                  {postDate || dateCopy} {monthName || monthNameCopy}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.headerBottomLine}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <IconLeft name="chevron-left" size={25} color="#012f34" />
          </TouchableOpacity>

          <View style={Styles.shareIconContainer}>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <IconLeft name="more-vertical" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={Styles.profileSectionBottomLine}>
        <View style={Styles.profileSectionContainer}>
          <Image
            source={require('../../Components/Utility/Images/profile.png')}
            style={Styles.profileImg}
          />
          <View style={Styles.usernameAndDateContainer}>
            <Text style={Styles.username}>
              {data.userName} {data.userId === uid && '(You)'}
            </Text>
            <Text style={Styles.joinDate}>
              Member since {monthName} {year}
            </Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={Styles.publishedContainer}>
          <Text style={Styles.published}>Published ads</Text>
        </View>
      </View>

      <FlatList
        data={userAdsData}
        numColumns={2}
        extraData={addToFav}
        renderItem={item => renderItemsTwo(item)}
      />

      <OtherUserProfileModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default OtherUserProfile;
