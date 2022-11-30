import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Popup from './Popup';
import Notes from './Notes';
import axios from 'axios';

const App = () => {
    const [ note, setNote ] = useState({
    id: '',
    firstname: '',
    lastname: '',
    phone: '',
    role: '',
    message: ''
    });
    const [ showpopup, setShowpopup ] = useState(false);
  
  
const inputHandler = (e) => {
  setNote({...note,  [e.target.name]: e.target.value})
};

const submitHandler = (e) => {
  e.preventDefault();
  setShowpopup(true);
};

const sendHandler = () => {
    axios
    .post("http://localhost:3001/notes", note)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
    window.location.reload();
};

const closeHandler = (e) => {
  e.preventDefault();
  setNote({
    ...note,
    firstname: '',
    lastname: '',
    phone: '',
    role: '',
    message: ''
    });
    setShowpopup(false);
};


    return (
      <div className='appContainer'>
        <Form change={inputHandler} submit={submitHandler} {...note}/>
        <View {...note} />
        <Notes />
       {showpopup && ( 
       <Popup
        firstname = {note.firstname}
        lastname={note.lastname}
        phone={note.phone}
        role={note.role}
        message={note.message}
        send={sendHandler}
        cancel={closeHandler}
         /> 
         )}     
      </div>
    );

  }


export default App;
