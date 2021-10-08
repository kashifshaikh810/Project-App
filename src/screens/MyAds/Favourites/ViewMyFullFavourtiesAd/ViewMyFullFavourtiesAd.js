import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
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

const ViewMyFullFavourtiesAd = props => {
  const [addToFav, setAddToFav] = useState(false);
  const routeData = props.route.params.data;

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
        <View>
          <ImageBackground
            source={routeData.image}
            style={Styles.backgroundImg}>
            <View style={[Styles.imagesCountParent, {flexDirection: 'row'}]}>
              <View style={Styles.backImgFeaturedTxtContainer}>
                <Text style={Styles.backImgFeaturedTxt}>
                  {routeData.featured}
                </Text>
              </View>
              <View
                style={[
                  Styles.imagesCountParent,
                  {marginHorizontal: 0, marginVertical: 0},
                ]}>
                <View style={Styles.imagesCountContainer}>
                  <Text style={Styles.imagesCount}>1/6</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={Styles.rsAndDescriptionContainer}>
          <View style={Styles.rsAndDescription}>
            <Text style={Styles.midRs}>Rs {routeData.rs}</Text>
            <View style={Styles.heartIconContainer}>
              <TouchableOpacity onPress={() => setAddToFav(!addToFav)}>
                <HeartIcon
                  name={addToFav ? 'heart-o' : 'heart'}
                  size={17}
                  color={addToFav ? 'black' : '#fece37'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={Styles.adDescription} numberOfLines={2}>
            {routeData.description}
          </Text>
        </View>

        <View style={Styles.locationAndExpireDateContainer}>
          <LocationIcon name="location-outline" size={20} color="#023034" />
          <Text>{routeData.location}</Text>

          <View style={Styles.expireDateContainer}>
            <Text>{routeData.date}</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={Styles.lastContainerOnDetails}>
            {routeData.rs ? (
              <>
                <Text style={Styles.details}>Details</Text>
                <View style={Styles.priceContainer}>
                  <Text style={Styles.price}>Price</Text>

                  <View style={Styles.rsContainer}>
                    <Text style={Styles.rs}>{routeData.rs}</Text>
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
                  {routeData.fullDescription}
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
            onPress={() => props.navigation.navigate('OtherUserProfile')}>
            <View style={Styles.profileSectionContainer}>
              <View>
                <Image
                  source={require('../../../../Components/Utility/Images/profile.png')}
                  style={Styles.profileImg}
                />
              </View>

              <View style={Styles.usernameAndDataContainer}>
                <Text style={Styles.username}>{routeData.username}</Text>
                <Text>Member since {routeData.joinDate}</Text>
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
      </ScrollView>
      <View style={Styles.threeButtonsContainer}>
        <TouchableOpacity style={Styles.buttonTextAndIconContainer}>
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
      </View>
    </>
  );
};

export default ViewMyFullFavourtiesAd;
