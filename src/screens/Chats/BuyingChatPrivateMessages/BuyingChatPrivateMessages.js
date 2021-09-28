/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import BuyingChatPrivateMessagesMarkup from './BuyingChatPrivateMessagesMarkup';

const BuyingChatPrivateMessages = props => {
  const [showModal, setShowModal] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [sendShortMessage, setSendShortMessage] = useState('cancel');
  const [defaultMessage, setDefaultMessage] = useState('');
  const [arr, setArr] = useState([]);

  const sendMessages = () => {
    arr.push(inputMessage);
    setArr(arr);
    setInputMessage('');
  };

  useEffect(() => {
    setDefaultMessage('Hello');
    if (defaultMessage) {
      arr.push(defaultMessage);
      setArr(arr);
    }
    setDefaultMessage('');
  }, [defaultMessage]);

  return (
    <>
      <BuyingChatPrivateMessagesMarkup
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
      />
    </>
  );
};

export default BuyingChatPrivateMessages;
