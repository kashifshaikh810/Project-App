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
          <View style={Styles.firstInputContainer}>
            <View style={Styles.firstInputTextContainer}>
              <Text style={Styles.firstInputText}>Customer Type *</Text>
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

          <View style={Styles.secondInputContainer}>
            <View style={Styles.secondInputTextContainer}>
              <Text style={Styles.firstInputText}>Email</Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your email"
                style={Styles.input}
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={Styles.secondInputContainer}>
            <View style={Styles.thiredInputTextContainer}>
              <Text style={Styles.firstInputText}>Customer name</Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput placeholder="Enter your name" style={Styles.input} />
            </View>
          </View>

          <View style={Styles.secondInputContainer}>
            <View style={Styles.fourthInputTextContainer}>
              <Text style={Styles.firstInputText}>Business Name</Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your business name"
                style={Styles.input}
              />
            </View>
          </View>

          <View style={Styles.secondInputContainer}>
            <View style={Styles.fivithInputTextContainer}>
              <Text style={Styles.firstInputText}>Phone Number</Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your phone number"
                style={Styles.input}
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View style={Styles.headingContainer}>
            <Text style={Styles.heading}>Customer Address</Text>
          </View>

          <View style={Styles.sixithInputContainer}>
            <View style={Styles.sixithInputTextContainer}>
              <Text style={Styles.firstInputText}>Address Line</Text>
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                placeholder="Enter your address"
                style={Styles.input}
              />
            </View>
          </View>

          <View style={Styles.secondInputContainer}>
            <View style={Styles.seventhInputTexrContainer}>
              <Text style={Styles.firstInputText}>City</Text>
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
