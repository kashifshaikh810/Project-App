import React, {useEffect, useState} from 'react';
import { Button, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import Nav from './src/screens/Navigation/Nav';
import { useNetInfo } from "@react-native-community/netinfo";
import {Provider, useSelector, useDispatch} from 'react-redux'
import store from './src/redux/Store/Store';
import {AddList, RemoveList, UpdateList} from './src/redux/Actions/Actions'

export const Testing = () => {
  const [val, setVal] = useState('');
  const [arrVal, setArrVal] = useState([]);
  const [edit, setEdit] = useState({edit: false, index: '', existVal: ''});
  const dispatch = useDispatch();
  const list = useSelector((state) => state.add.todo);


  useEffect(() => {
    setArrVal(list);
  }, [list])

  const add = () => {
    if(val){
      dispatch(AddList(val));
      setVal('');
    }
  }

  const editFunc = (arr, index) => {
    setEdit({edit: true, index: index, existVal: arr});
    setVal(arr)
  }

  const update = () => {
    console.log(edit.index);
    dispatch(UpdateList(edit.index, val, edit.existVal))
    setEdit({edit: false})
    setVal('');
  }

  const deleteList = (index) => {
      arrVal.splice(index, 1)
      dispatch(RemoveList(index))
  }

  return (
    <View>
      <TextInput placeholder="Text" value={val} onChangeText={text => setVal(text)} />
      <Button title={edit.edit ? "update" : "add"} onPress={() => edit.edit ? update() : add()} />
      
      {
        arrVal.map((arr, index) => {
          return (
            <ScrollView key={index}>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 20}}>
              <Text>{arr}</Text>
              <View style={{width: 100, marginHorizontal: 10, marginVertical: 10}}>
             <Button title="delete" onPress={() => deleteList(index)} />
              </View>
              <View style={{width: 100, marginHorizontal: 10, marginVertical: 10}}>
             <Button title="edit" onPress={() => editFunc(arr, index)} />
             </View>
            </View>
          </ScrollView>
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
      {
        net.isConnected &&
        <Nav />
      }
      {!net.isConnected && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 15, color: 'red'}}>
          No Internet Connection
        </Text>
      </View>}

  {/* <Provider store={store}>
    <Testing />
  </Provider> */}
    </View>
  );
};

export default App;
