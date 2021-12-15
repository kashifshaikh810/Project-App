import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AllMarkup from './AllMarkup';
import {Auth, Database} from '../../../../Setup';

const All = props => {
  const [showColor, setShowColor] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState({show: false, index: ''});
  const [chatListData, setChatListData] = useState([]);
  const [keys, setKeys] = useState('');
  let uid = Auth()?.currentUser?.uid;

  const ChangePageOnClick = para => {
    setShowColor(para);
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setIsLoading(true);
      let arr = [];
      Database()
        .ref(`/chatListData/${uid}`)
        .on('value', async snapshot => {
          let snap = await snapshot.val();
          let data = snap ? Object?.values(snap) : [];
          let keys = snap ? Object?.keys(snap) : [];
          setKeys(keys);
          data.forEach(chatData => {
            arr.push(chatData);
            setChatListData(arr);
            setIsLoading(false);
          });
        });
    });

    return unsubscribe;
  }, [props.navigation]);

  const deleteChat = () => {
    Database().ref(`chatListData/${uid}/${keys[showModal.index]}`).remove();
    setShowModal({show: false});
  };

  const markAsImportant = () => {
    Database().ref(`chatListData/${uid}/${keys[showModal.index]}`).child('chatList').update({mark: "important"})
    setShowModal({show: false});
  }

  return (
    <View>
      <AllMarkup
        showColor={showColor}
        ChangePageOnClick={ChangePageOnClick}
        showModal={showModal}
        setShowModal={setShowModal}
        chatListData={chatListData}
        uid={uid}
        deleteChat={deleteChat}
        isLoading={isLoading}
        markAsImportant={markAsImportant}
      />
    </View>
  );
};

export default All;
