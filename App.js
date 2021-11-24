import React from 'react';
import { Button, StatusBar, Text, TextInput, View } from 'react-native';
import Nav from './src/screens/Navigation/Nav';
import { useNetInfo } from "@react-native-community/netinfo";
import {Provider, useSelector} from 'react-redux'
import store from './src/redux/Store/Store';

export const Testing = () => {
  const list = useSelector((state) => state.add.list);

  return (
    <View>
      <TextInput placeholder="Text" />
      <Button title="click" />
      
      {
        list.map((arr) => {
          return (
            <View>
              <Text>{arr.list}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

const App = () => {
  const net = useNetInfo();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="grey" />
      {/* {
        net.isConnected &&
        <Nav />
      }
      {!net.isConnected && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 15, color: 'red'}}>
          No Internet Connection
        </Text>
      </View>} */}

  <Provider store={store}>
    <Testing />
  </Provider>
    </View>
  );
};

export default App;
