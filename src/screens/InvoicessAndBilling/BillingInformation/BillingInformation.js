import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';

const BillingInformation = props => {
  return (
    <>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('InvoicessAndBilling')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Billing Information</Text>
      </View>
      <KeyboardAwareScrollView>
        <ScrollView style={Styles.container}>
          <View style={{height: 100, justifyContent: 'flex-end'}}>
            <View style={{width: 125, height: 21, alignItems: 'center'}}>
              <Text
                style={{color: '#718281', fontSize: 13, fontWeight: 'bold'}}>
                Customer Type *
              </Text>
            </View>
            <View style={Styles.mobilePhonesDropDownContainer}>
              <View style={Styles.mobilePhonesDropDownTouchAbleParent}>
                <TouchableOpacity
                  onPress={() => console.log('sa')}
                  style={Styles.direction}>
                  <View style={Styles.mobilePhonesDropDownTextContainer}>
                    <Text style={Styles.mobilePhonesDropDownSelectedValue}>
                      Select a customer type
                    </Text>
                    <View style={Styles.mobilePhonesDropDownIconContainer}>
                      <IconLeft name="chevron-down" size={18} color="#718281" />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{height: 110, justifyContent: 'flex-end'}}>
            <View style={{width: 67, height: 21, alignItems: 'center'}}>
              <Text
                style={{color: '#718281', fontSize: 13, fontWeight: 'bold'}}>
                Email
              </Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your email"
                style={Styles.input}
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={{height: 110, justifyContent: 'flex-end'}}>
            <View style={{width: 122, height: 21, alignItems: 'center'}}>
              <Text
                style={{color: '#718281', fontSize: 13, fontWeight: 'bold'}}>
                Customer name
              </Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput placeholder="Enter your name" style={Styles.input} />
            </View>
          </View>

          <View style={{height: 110, justifyContent: 'flex-end'}}>
            <View style={{width: 120, height: 21, alignItems: 'center'}}>
              <Text
                style={{color: '#718281', fontSize: 13, fontWeight: 'bold'}}>
                Business Name
              </Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your business name"
                style={Styles.input}
              />
            </View>
          </View>

          <View style={{height: 110, justifyContent: 'flex-end'}}>
            <View style={{width: 115, height: 21, alignItems: 'center'}}>
              <Text
                style={{color: '#718281', fontSize: 13, fontWeight: 'bold'}}>
                Phone Number
              </Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your phone number"
                style={Styles.input}
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View
            style={{
              width: 170,
              height: 80,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{color: '#022b2c', fontSize: 18, fontWeight: 'bold'}}>
              Customer Address
            </Text>
          </View>

          <View style={{height: 90, justifyContent: 'flex-end'}}>
            <View style={{width: 100, height: 21, alignItems: 'center'}}>
              <Text
                style={{color: '#718281', fontSize: 13, fontWeight: 'bold'}}>
                Address Line
              </Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your address"
                style={Styles.input}
              />
            </View>
          </View>

          <View style={{height: 110, justifyContent: 'flex-end'}}>
            <View style={{width: 53, height: 21, alignItems: 'center'}}>
              <Text
                style={{color: '#718281', fontSize: 13, fontWeight: 'bold'}}>
                City
              </Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your address"
                style={Styles.input}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity style={Styles.buttonTouchAble} onPress={() => {}}>
          <Text style={Styles.buttonTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BillingInformation;
