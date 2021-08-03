import React, { useState } from 'react';
import { db, auth } from '../Firebase';
import firebase from 'firebase';
import { Input, Button } from '@material-ui/core';

function SendMessage() {
  const [msg, setMsg] = useState('');

  const SendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMsg("");
  };
  return (
    <div>
      <form style={{alignItems: 'center', margin: "1rem 2rem"}} onSubmit={SendMessage}>
        <Input style={{width: "85%"}} value={msg} onChange={(e) => setMsg(e.target.value)} />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default SendMessage;
