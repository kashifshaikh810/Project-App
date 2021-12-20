/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import PrivateMessagesMarkup from './PrivateMessagesMarkup';
import {Auth, Database} from '../../../Setup';

const PrivateMessages = props => {
  const [showModal, setShowModal] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [sendShortMessage, setSendShortMessage] = useState('cancel');
  const [defaultMessage, setDefaultMessage] = useState('');
  const [arr, setArr] = useState([]);
  const [changePosition, setChangePosition] = useState('');
  let receiverId = props.route.params.itemData.userId;
  let data = props.route.params.itemData;
  let name = props.route.params.routeName;
  let senderId = Auth().currentUser.uid;
  const scrollViewRef = useRef();

  const sendMessages = () => {
    if(name === 'PrivateMessages' && inputMessage){
      let dd = new Date();
      let msgDate = dd.toISOString().split('t')[0];
      Database().ref(`/chatListData/${senderId}`).push({chatList: data, msgDate});
      let date = dd.toISOString().split('t')[0];
      let pathRes = `${senderId}${receiverId}`.split('').sort().join('');
      Database().ref(`/chatMessages/${pathRes}`).push({senderId: senderId, receiverId: receiverId, time: date, receiverName: data.userName, msg: inputMessage});
      setInputMessage('');
    }else{
      let dd = new Date();
      let date = dd.toISOString().split('t')[0];
      let pathRes = `${senderId}${receiverId}`.split('').sort().join('');
      Database().ref(`/chatMessages/${pathRes}`).push({senderId: senderId, receiverId: receiverId, time: date, receiverName: data.userName, msg: inputMessage});
      setInputMessage('');
    }
  };

  useEffect(() => {
    setDefaultMessage('Hello');
    setDefaultMessage('');
    fetchMessages();
  }, [defaultMessage]);

  const fetchMessages = () => {
    let pathRes = `${senderId}${receiverId}`.split('').sort().join('');
    Database().ref(`/chatMessages/${pathRes}`).on("value", (snapshot) => {
      let messageData = snapshot.val() ? Object.values(snapshot.val()).reverse() : []
      messageData.sort(function compare(a, b) {
        var dateA = new Date(a.time);
        var dateB = new Date(b.time);
        return dateA - dateB;
      });
      setArr(messageData);
    });
  }

  return (
    <>
      <PrivateMessagesMarkup
        {...props}
        showModal={showModal}
        setShowModal={setShowModal}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        sendMessages={sendMessages}
        arr={arr}
        sendShortMessage={sendShortMessage}
        setSendShortMessage={setSendShortMessage}
        defaultMessage={defaultMessage}
        setDefaultMessage={setDefaultMessage}
        senderId={senderId}
        changePosition={changePosition}
        setChangePosition={setChangePosition}
        scrollViewRef={scrollViewRef}
      />
    </>
  );
};

export default PrivateMessages;
