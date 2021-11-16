/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/Entypo';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import ReadMore from 'react-native-read-more-text';
import {Styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageViewer from 'react-native-image-zoom-viewer';

const ViewFullAd = props => {
  const routeData = props.route.params.data;
  const [showFullImageModal, setShowFullImageModal] = useState(false);
  const [imagesArr, setimagesArr] = useState([]);
  let futureDate = new Date(routeData.postedDate || routeData.joinDate);
  futureDate.setDate(futureDate.getDate() + 30);
  let res = futureDate?.toISOString().split('T')[0];
  let beforeThirteenDate = res.split('-');

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

  useEffect(() => {
    routeData.adImages.map(aa => {
      let images = aa.adImages;
      imagesArr.push({url: images});
      setimagesArr(imagesArr);
    });
    return () => {
      console.log('cleanup');
    };
  }, [routeData.adImages]);

  return (
    <>
      <View style={Styles.headerParent}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ADS')}>
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
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setShowFullImageModal(true)}>
          <ImageBackground
            source={{uri: routeData.adImages[0].adImages}}
            style={Styles.backgroundImg}>
            <View style={[Styles.imagesCountParent, {flexDirection: 'row'}]}>
              <View
                style={[
                  Styles.imagesCountParent,
                  {marginHorizontal: 0, marginVertical: 0},
                ]}>
                <View style={Styles.imagesCountContainer}>
                  <Text style={Styles.imagesCount}>
                    1/{routeData.adImages.length}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <Modal visible={showFullImageModal} animationType="fade">
          <View style={Styles.imgModalContainer}>
            <TouchableOpacity
              activeOpacity={1}
              style={Styles.modalCloseIcon}
              onPress={() => setShowFullImageModal(false)}>
              <CloseIcon name="close" size={30} color="white" />
            </TouchableOpacity>
            <ImageViewer imageUrls={imagesArr} />
          </View>
        </Modal>

        <View style={Styles.likeAndHeartParent}>
          <View style={Styles.likeAndHeartContainer}>
            <View style={Styles.eyeAndViewsContainer}>
              <IconLeft
                name="eye"
                size={30}
                color="#023034"
                style={Styles.eyeIcon}
              />
              <Text style={Styles.views}>{routeData.views || 0}</Text>
            </View>
            <View style={Styles.midLine} />
            <View style={Styles.eyeAndViewsContainer}>
              <HeartIcon
                name="heart"
                size={30}
                color="#023034"
                style={Styles.eyeIcon}
              />
              <Text style={Styles.views}>{routeData.likes || 0}</Text>
            </View>
          </View>
        </View>

        <View style={Styles.rsAndDescriptionContainer}>
          {routeData.price && (
            <Text style={Styles.midRs}>Rs {routeData.price}</Text>
          )}
          <Text style={Styles.adDescription}>{routeData.titile}</Text>
        </View>

        <View style={Styles.locationAndExpireDateContainer}>
          <LocationIcon name="location-outline" size={20} color="#023034" />
          <Text>{routeData.location}</Text>

          <View style={Styles.expireDateContainer}>
            <Text>YOUR AD EXPIRES ON</Text>
            <Text>
              {beforeThirteenDate[2]}/{beforeThirteenDate[1]}/
              {beforeThirteenDate[0]}
            </Text>
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

            <View style={Styles.descriptionHeadingContainer}>
              <Text style={Styles.descriptionHeading}>Description</Text>
            </View>
            <SafeAreaView style={Styles.readMoreParent}>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}>
                <Text style={Styles.fullDescription}>
                  {routeData.description}
                </Text>
              </ReadMore>
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ViewFullAd;
