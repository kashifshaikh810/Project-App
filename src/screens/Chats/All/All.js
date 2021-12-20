import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AllMarkup from './AllMarkup';
import {Auth, Database} from '../../../../Setup';

const All = props => {
  const [showColor, setShowColor] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    index: '',
    mark: '',
  });
  const [chatListData, setChatListData] = useState([]);
  const [keys, setKeys] = useState('');
  const [lastMessage, setlastMessage] = useState('');
  const [mark, setMark] = useState('');
  let uid = Auth()?.currentUser?.uid;

  const ChangePageOnClick = para => {
    setShowColor(para);
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getChatListData();
      getMessagesData();
      setShowModal({show: false});
    });

    return unsubscribe;
  }, [props.navigation]);

  const getChatListData = () => {
    let uid = Auth()?.currentUser?.uid;
    setIsLoading(true);
    let arr = [];
    Database()
      .ref(`/chatListData/${uid}`)
      .on('value', snapshot => {
        let snap = snapshot.val();
        let data = snap ? Object?.values(snap) : [];
        let keys = snap
          ? Object?.keys(snap).reverse()
          : [] && setIsLoading(false);
        setKeys(keys);
        data.forEach(chatData => {
          arr.push(chatData);
          // sorting by date
          arr.sort(function compare(a, b) {
            var dateA = new Date(a.msgDate);
            var dateB = new Date(b.msgDate);
            return dateA - dateB;
          });
          let res = arr.every(a => {
            return a.chatList.mark === 'RemoveImportant';
          });
          setMark(res);
          setChatListData(arr);
          setIsLoading(false);
        });
      });
  };

  const getMessagesData = () => {
    let msgArr = [];
    Database()
      .ref(`/chatMessages/`)
      .on('value', async snapshot => {
        let snap = await snapshot.val();
        let data = snap ? Object?.values(snap) : [];
        data.forEach(async (items, i) => {
          let arr = Object?.values(items);
          let msg = arr[0].msg;
          await msgArr.push(msg);
          setlastMessage(msgArr.reverse());
        });
      });
  };

  const deleteChat = () => {
  let uid = Auth()?.currentUser?.uid;
    Database().ref(`chatListData/${uid}/${keys[showModal.index]}`).remove();
    getChatListData();
    setShowModal({show: false});
  };

  const markAsImportant = () => {
  let uid = Auth()?.currentUser?.uid;
    Database()
      .ref(`chatListData/${uid}/${keys[showModal.index]}`)
      .child('chatList')
      .update({mark: 'important'});
    getChatListData();
    setShowModal({show: false});
  };

  const RemoveImportant = () => {
  let uid = Auth()?.currentUser?.uid;
    Database()
      .ref(`chatListData/${uid}/${keys[showModal.index]}`)
      .child('chatList')
      .update({mark: 'RemoveImportant'});
    getChatListData();
    setShowModal({show: false});
  };

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
        lastMessage={lastMessage}
        RemoveImportant={RemoveImportant}
        mark={mark}
      />
    </View>
  );
};

export default All;
