import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { auth } from '../Firebase';
import SendMessage from './SendMessage';
import SignOut from './SignOut';
import '../App.css';

function Chat() {
  const [message, setmessage] = useState([]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) =>
        setmessage(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div className="flex">
      <SignOut />
      <div>
        {message.map(({ text, uid, id, photoURL }) => (
          <div
            key={id}
            className={`msg  ${
              uid === auth.currentUser.uid ? 'send' : 'recip'
            }`}
          >
            <div
              className={`back  ${
                uid === auth.currentUser.uid ? 'back-send' : 'back-recip'
              }`}
            >
              <img src={photoURL} alt="Hola" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
