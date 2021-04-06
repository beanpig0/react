import React, {useState, useEffect} from 'react';
import {db} from '../firebase';

const Chat = () => {
  const [chatContent, setChatContent] = useState("");
  const [chats, setChats] = useState([]);
  const [uid] = useState("");

  const onTextareaChange = (evt) => {
    setChatContent(evt.target.value);
  }

  useEffect(() => {
    const chatRef = db
    .collection('chat')
    chatRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(data);
    })
  }, [])

  const addDocument = () => {
    db
    .collection('chat')
    .add({
      uid : uid,
      content: chatContent
    })
    .then((ref) => {
      setChatContent('');
    })
  }

  return(
    <>
    <div>
      <textarea value={chatContent} onChange={evt => {onTextareaChange(evt)}}></textarea><br />

      
      {chatContent}


      <button className="btn btn-sucess" onClick={evt => addDocument()}>Add Document</button>      
      <hr />
      {
        chats.map((chat) => {
          return <div>{chat.id} - {chat.content}</div>
        })
      }
    </div>
    </>
  )
}

export default Chat;