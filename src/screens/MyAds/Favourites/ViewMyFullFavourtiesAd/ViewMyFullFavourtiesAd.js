import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/Entypo';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import ReadMore from 'react-native-read-more-text';
import {Styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const ViewMyFullFavourtiesAd = props => {
  const routeData = props.route.params.data;
  console.log(routeData);

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
  return (
    <>
      <View style={Styles.headerParent}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('FAVOURITES')}>
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
            <View style={Styles.imagesCountParent}>
              <View style={Styles.imagesCountContainer}>
                <Text style={Styles.imagesCount}>1/6</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={Styles.rsAndDescriptionContainer}>
          <Text style={Styles.midRs}>Rs {routeData.rs}</Text>
          <Text style={Styles.adDescription}>{routeData.description}</Text>
        </View>

        <View style={Styles.locationAndExpireDateContainer}>
          <LocationIcon name="location-outline" size={20} color="#023034" />
          <Text>{routeData.location}</Text>

          <View style={Styles.expireDateContainer}>
            <Text>YOUR AD EXPIRES ON</Text>
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
                    <Text style={Styles.rs}>
                      {routeData.condition}
                    </Text>
                  </View>
                </View>
              </>
            ) : null}
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
        </View>
      </ScrollView>
    </>
  );
};

export default ViewMyFullFavourtiesAd;
