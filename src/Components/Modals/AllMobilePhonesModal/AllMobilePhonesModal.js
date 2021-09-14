import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const AddImagesModal = props => {
  const navigation = useNavigation();

  console.log(props.route.params);
  const click = item => {
    props.setShowPhonesModal(false);
    navigation.navigate('IncludesDetails', {
      data: item,
      // routeData: props.route.params.route.name,
    });
  };
  // console.log(props.route.params.routeData);
  const renderItems = ({item}) => {
    return (
      <View
        style={{
          height: 40,
          width: 360,
          justifyContent: 'flex-end',
          borderBottomWidth: 1,
          borderColor: '#f3f3f3',
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => click(item)}>
          <View
            style={{
              width: 115,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal visible={props.showPhonesModal} transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMain}>
          <View style={Styles.container}>
            <View style={Styles.iconContainer}>
              <TouchableOpacity onPress={() => props.setShowPhonesModal(false)}>
                <CloseIcon name="close" size={25} />
              </TouchableOpacity>
              <Text style={Styles.offeringTxt}>Choose Make</Text>
            </View>
            <View
              style={{
                height: 50,
                width: 365,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 325,
                  height: 50,
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: '#183338',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                <SearchIcon name="search" size={20} />
                <TextInput style={{width: 282}} />
              </View>
            </View>
          </View>

          <FlatList
            style={{height: 20, marginVertical: 20}}
            data={[
              {name: 'Panasonic'},
              {name: 'djbhsjdbhas'},
              {name: 'fkskfska'},
              {name: 'jndsjd'},
              {name: 'ndsjld'},
              {name: 'dsD'},
              {name: 'Panasonic'},
              {name: 'KSJDKJS'},
              {name: 'CNAKCA'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
              {name: 'Panasonic'},
            ]}
            renderItem={item => renderItems(item)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddImagesModal;
