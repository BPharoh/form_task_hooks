import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notes.css';

const Notes = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsloading ] = useState(false);


    useEffect(() => {
        setIsloading(true)
        axios
        .get("http://localhost:3001/notes")
        .then((res) => {
            console.log(res)
            setData(res.data)
            setIsloading(false);
        });
      
    }, []);

    return (
        <div className='notesContainer'>
            <h1>Your notes</h1>
            <ul>
                {data.map((note) => ( 
                <li key={note.id}>
                    FirstName: {note.firstname},
                    LastName: {note.lastname},
                    Mobile: {note.phone},
                    Role: {note.role},
                    Message: {note.message}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;