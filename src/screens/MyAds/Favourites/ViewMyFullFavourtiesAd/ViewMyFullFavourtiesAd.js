import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/Entypo';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import SMSIcon from 'react-native-vector-icons/Feather';
import MessageIcon from 'react-native-vector-icons/AntDesign';
import ReadMore from 'react-native-read-more-text';
import RightIcon from 'react-native-vector-icons/Entypo';
import {Styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {dummyData} from '../../../Home/Data';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Database, firebase} from '../../../../../Setup';

const ViewMyFullFavourtiesAd = props => {
  const [showFullImageModal, setShowFullImageModal] = useState(false);
  const [userData, setUserData] = useState('');
  const routeData = props.route.params.data;
  const heart = props.route.params.heart;
  let uid = firebase?.auth()?.currentUser?.uid;

  const _renderTruncatedFooter = handlePress => {
    return (
      <View style={Styles.readMoreContainer}>
        <Text style={Styles.readMore} onPress={handlePress}>
          READ MORE
        </Text>
      </View>
    );
  };

  const _renderRevealedFooter = handlePress => {
    return (
      <View style={Styles.readMoreContainer}>
        <Text style={Styles.readMore} onPress={handlePress}>
          READ LESS
        </Text>
      </View>
    );
  };

  const images = [
    {
      // Simplest usage.
      url: '',

      // width: number
      // height: number
      // Optional, if you know the image size, you can set the optimization performance

      // You can pass props to <Image />.
      props: {
        source: routeData.image,
      },
    },
    {
      url: '',
      props: {
        // Or you can set source directory.
        source: routeData.image,
      },
    },
    {
      url: '',
      props: {
        // Or you can set source directory.
        source: routeData.image,
      },
    },
    {
      url: '',
      props: {
        // Or you can set source directory.
        source: routeData.image,
      },
    },
    {
      url: '',
      props: {
        // Or you can set source directory.
        source: routeData.image,
      },
    },
    {
      url: '',
      props: {
        // Or you can set source directory.
        source: routeData.image,
      },
    },
    {
      url: '',
      props: {
        // Or you can set source directory.
        source: routeData.image,
      },
    },
  ];

  const renderItems = ({item}) => {
    return (
      <View style={Styles.renderItemContainer}>
        <View style={Styles.renderItemContent}>
          <ImageBackground source={item.image} style={Styles.imgBackground}>
            <View style={Styles.insideContainer}>
              <View style={Styles.iconContainer}>
                <View style={Styles.iconMain}>
                  <MyAdsIcon name="heart-outlined" size={20} color="white" />
                </View>
              </View>
            </View>
          </ImageBackground>

          <Text style={Styles.rsStyle}>Rs {item.rs}</Text>
          <View style={Styles.flexContainer}>
            <Text style={Styles.description} numberOfLines={1}>
              {item.description}
            </Text>
            <View style={Styles.rowContainer}>
              <Text style={Styles.locationStyle} numberOfLines={1}>
                {item.location}
              </Text>
              <View style={Styles.dateContainer}>
                <Text style={Styles.locationStyle}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  let futureDate = new Date(routeData.postedDate);
  futureDate.setDate(futureDate.getDate() + 30);
  let res = futureDate?.toISOString().split('T')[0];
  let beforeThirteenDate = res.split('-');

  const monthNamesArr = [
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
  let date = new Date(routeData.joinDate);
  let year = date.getFullYear();
  let monthName = monthNamesArr[date.getMonth()];

  useEffect(() => {
    data();
  }, [])

  const data = () => {
    Database()
      .ref(`/userSignUp/${routeData.userId}`)
      .on('value', snapshot => {
        let data = snapshot ? snapshot?.val() : {};
        setUserData(data);
      });
  };

  return (
    <>
      <View style={Styles.headerParent}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('FAVOURITES')}>
            <IconLeft name="chevron-left" size={24} color="white" />
          </TouchableOpacity>

          <View style={Styles.shareIconContainer}>
            <TouchableOpacity>
              <ShareIcon name="share" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={Styles.container}>
        <TouchableOpacity activeOpacity={1} onPress={() => setShowFullImageModal(true)}>
          <ImageBackground
            source={{uri: routeData.adImages[0].adImages}}
            style={Styles.backgroundImg}>
            <View style={[Styles.imagesCountParent, {flexDirection: 'row'}]}>
              <View style={Styles.backImgFeaturedTxtContainer}>
                <Text style={Styles.backImgFeaturedTxt}>
                  FEATURED
                </Text>
              </View>
              <View
                style={[
                  Styles.imagesCountParent,
                  {marginHorizontal: 0, marginVertical: 0},
                ]}>
                <View style={Styles.imagesCountContainer}>
              <Text style={Styles.imagesCount}>1/{images.length}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View style={Styles.rsAndDescriptionContainer}>
          <View style={Styles.rsAndDescription}>
            <Text style={Styles.midRs}>Rs {routeData.price}</Text>
           {uid === routeData.userId ? null : <View style={Styles.heartIconContainer}>
              <TouchableOpacity>
                <HeartIcon
                  name={heart ? 'heart' : 'heart-o'}
                  size={17}
                  color={heart ? '#fece37' : 'black'}
                />
              </TouchableOpacity>
            </View>}
          </View>
          <Text style={Styles.adDescription} numberOfLines={2}>
            {routeData.titile}
          </Text>
        </View>

        <View style={Styles.locationAndExpireDateContainer}>
          <LocationIcon name="location-outline" size={20} color="#023034" />
          <Text style={{flex: 1}}>{routeData.location}</Text>

          <View style={Styles.expireDateContainer}>
            <Text>{beforeThirteenDate[2]}/{beforeThirteenDate[1]}/
              {beforeThirteenDate[0]}</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={Styles.lastContainerOnDetails}>
            {routeData.price ? (
              <>
                <Text style={Styles.details}>Details</Text>
                <View style={Styles.priceContainer}>
                  <Text style={Styles.price}>Price</Text>

                  <View style={Styles.rsContainer}>
                    <Text style={Styles.rs}>{routeData.price}</Text>
                  </View>
                </View>
                <View style={Styles.priceContainer}>
                  <Text style={Styles.price}>Type</Text>

                  <View style={Styles.rsContainer}>
                    <Text style={Styles.rs}>{routeData.type}</Text>
                  </View>
                </View>
                <View style={Styles.conditionContainer}>
                  <Text style={Styles.price}>Condition</Text>
                  <View style={Styles.rsContainer}>
                    <Text style={Styles.rs}>{routeData.condition}</Text>
                  </View>
                </View>
              </>
            ) : null}
          </View>

          <View style={Styles.conditionBottomLine}>
            <View style={Styles.line} />
          </View>

          <View style={Styles.lastContainerOnDetails}>
            <View style={Styles.descriptionHeadingContainer}>
              <Text style={Styles.descriptionHeading}>Description</Text>
            </View>
            <SafeAreaView style={Styles.readMoreParent}>
              <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}>
                <Text style={Styles.fullDescription}>
                  {routeData.description}
                </Text>
              </ReadMore>
            </SafeAreaView>
          </View>

          <View style={Styles.descriptionBottomLine}>
            <View style={Styles.line} />
          </View>

          <TouchableOpacity
            style={Styles.lastContainerOnDetails}
            activeOpacity={1}
            onPress={() =>
              props.navigation.navigate('OtherUserProfile', {
                userData: routeData,
                year: year,
                monthName: monthName,
                userInfo: userData,
              })
            }>
            <View style={Styles.profileSectionContainer}>
              <View>
                <Image
                  source={userData?.dpImage ? {uri: userData.dpImage} : require('../../../../Components/Utility/Images/profile.png')}
                  style={[Styles.profileImg, userData?.dpImage && {borderRadius: 50}]}
                />
              </View>

              <View style={Styles.usernameAndDataContainer}>
                <Text style={Styles.username}>{routeData.userName} {uid === routeData.userId ? "(You)" : ""}</Text>
                <Text>Member since {monthName} {year}</Text>
                <Text style={[Styles.username, {color: '#3366ce'}]}>
                  SEE PROFILE
                </Text>
              </View>
              <View style={Styles.rightIconContainer}>
                <RightIcon name="chevron-small-right" size={23} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.profileSectionBottomLine}>
          <View style={Styles.line} />
        </View>

        <View style={Styles.relatedTextContainer}>
          <Text style={Styles.relatedText}>Related Ads</Text>
        </View>

        <FlatList
          data={dummyData}
          renderItem={item => renderItems(item)}
          horizontal={true}
        />

        <Modal visible={showFullImageModal}>
          <View style={Styles.imgModalContainer}>
          <TouchableOpacity
          activeOpacity={1}
          style={Styles.modalCloseIcon}
                onPress={() => setShowFullImageModal(false)}>
                <CloseIcon name="close" size={30} color="white" />
              </TouchableOpacity>
          <ImageViewer imageUrls={images} />
          </View>
        </Modal>
      </ScrollView>
     {uid === routeData.userId ? null : <View style={Styles.threeButtonsContainer}>
        <TouchableOpacity
          style={Styles.buttonTextAndIconContainer}
          onPress={() =>
            uid ? props.navigation.navigate('PrivateMessages', {itemData: routeData}) : props.navigation.navigate("SignUpAndSignInMenu")
          }>
          <MessageIcon name="message1" size={17} color="white" />
          <Text style={Styles.buttonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttonTextAndIconContainer}>
          <LocationIcon name="call-outline" size={17} color="white" />
          <Text style={Styles.buttonText}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttonTextAndIconContainer}>
          <SMSIcon name="mail" size={17} color="white" />
          <Text style={Styles.buttonText}>SMS</Text>
        </TouchableOpacity>
      </View>}
    </>
  );
};

export default ViewMyFullFavourtiesAd;
