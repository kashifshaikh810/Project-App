/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import PrivateMessagesMarkup from './PrivateMessagesMarkup';

const PrivateMessages = props => {
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
      />
    </>
  );
};

export default PrivateMessages;
