import React, {useState} from 'react';
import PrivateMessagesMarkup from './PrivateMessagesMarkup';

const PrivateMessages = props => {
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
      <PrivateMessagesMarkup
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

export default PrivateMessages;
