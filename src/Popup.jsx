import React from 'react';
import './Popup.css';

const Popup = ({firstname, lastname, phone, role, message, send, cancel}) => {
    return (
        <div className='popupContainer'>
            <div className='popupContent'>
            <h2>This is your message</h2>
            <p>
             First name:   <span>{firstname}</span>
            </p>
            <p>
            Last name:   <span>{lastname}</span>
            </p>
            <p>
             Phone:  <span>{phone}</span>
            </p>
            <p>
             Role:   <span>{role}</span>
            </p>
            <p>Message: <p className='message_style'>{message}</p>
            </p>
            <div className='buttons'>
            <button onClick={send}>Ok</button>
            <button onClick={cancel}>Cancel</button>
            </div>
            </div>
        </div>
    );
};

export default Popup;