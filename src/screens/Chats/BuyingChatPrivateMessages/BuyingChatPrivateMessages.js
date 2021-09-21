import React, {useState} from 'react';
import BuyingChatPrivateMessagesMarkup from './BuyingChatPrivateMessagesMarkup';

const BuyingChatPrivateMessages = props => {
  const [showModal, setShowModal] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [arr, setArr] = useState([]);

  const sendMessages = () => {
    arr.push(inputMessage);
    setArr(arr);
    setInputMessage('');
  };

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
      />
    </>
  );
};

export default BuyingChatPrivateMessages;
