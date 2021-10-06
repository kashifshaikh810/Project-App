import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Rea
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/Entypo';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import {Styles} from './Styles';

const ViewFullAd = props => {
  const routeData = props.route.params.data;
  console.log(routeData);
  return (
    <>
      <View
        style={{
          backgroundColor: '#b3b3b3',
          elevation: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 15,
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ADS')}>
            <IconLeft name="chevron-left" size={24} color="white" />
          </TouchableOpacity>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <ShareIcon name="share" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={Styles.container}>
        <View>
          <ImageBackground
            source={routeData.adImg}
            style={{width: 355, height: 320}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#218386',
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>1/6</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            alignItems: 'center',
            borderBottomWidth: 0.3,
            borderBottomColor: '#b3b3b3',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              width: 300,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconLeft
                name="eye"
                size={30}
                color="#023034"
                style={{marginHorizontal: 10}}
              />
              <Text
                style={{fontWeight: 'bold', fontSize: 21, color: '#023034'}}>
                {routeData.views}
              </Text>
            </View>
            <View
              style={{borderWidth: 0.3, borderColor: '#b3b3b3', height: 40}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <HeartIcon
                name="heart"
                size={30}
                color="#023034"
                style={{marginHorizontal: 10}}
              />
              <Text
                style={{fontWeight: 'bold', fontSize: 21, color: '#023034'}}>
                {routeData.likes}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 65,
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: '#023034', fontSize: 18}}>
            Rs {routeData.rs}
          </Text>
          <Text style={{color: '#023034', fontSize: 16}}>
            {routeData.adDescription}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <LocationIcon name="location-outline" size={20} color="#023034" />
            <Text>{routeData.location}</Text>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>YOUR AD EXPIRES ON</Text>
            <Text>{routeData.expireDate}</Text>
          </View>
        </View>

        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#032e32'}}>
            Details
          </Text>

          <View
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              borderBottomWidth: 0.3,
              borderBottomColor: '#b3b3b3',
            }}>
            <Text>Price</Text>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>{routeData.rs}</Text>
            </View>
          </View>

          <View
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              borderBottomWidth: 0.3,
              borderBottomColor: '#b3b3b3',
            }}>
            <Text>Type</Text>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>{routeData.adType}</Text>
            </View>
          </View>

          <View
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text>Condition</Text>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>{routeData.condition}</Text>
            </View>
          </View>
          <View style={{height: 45, justifyContent: 'flex-end', marginVertical: 5}}>
              <Text style={{fontSize: 16, color: '#032e32'}}>Description</Text>

          </View>
              <View>
            <Text numberOfLines={3}>{routeData.fullDescription}</Text>
              </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ViewFullAd;
