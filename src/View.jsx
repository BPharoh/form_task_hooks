import React from 'react';
import './View.css';

const View = ({firstname, lastname, phone, role, message}) => {
    return <div className='viewContainer'>
           <h1>These are your inputs: </h1>
           <p> First name: 
            <span>{firstname}</span>
           </p>
           <p>Last name:
            <span>{lastname}</span>
           </p>
           <p>Phone:
            <span>{phone}</span>
           </p>
           <p>Role: 
            <span>{role}</span>
           </p>
           <p > Message: 
            <span className='message_style'>{message}</span>
           </p>
        </div>
    
};

export default View;