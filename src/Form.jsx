import React from 'react';
import './Form.css';

const Form = ({change, submit }) => {
    return (  <form onChange={change} onSubmit={submit}>
        <h1>Input Your Details</h1>
        <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" name="firstname" />
        </div>
        <div>
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" name="lastname" />
        </div>
        <div>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" />
        </div>
        <div>
            <label htmlFor="role">Role</label>
            <select id="role" name="role" defaultValue="choice">
                <option value="choice" disabled>Select a role</option>
                <option value="staff" >Staff</option>
                <option value="teacher" >Teacher</option>
                <option value="student" >Student</option>
                <option value="others" >Others</option>
            </select>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
        </div>
        <button type='submit'> Send Data </button>
     </form>
    );
    
};

export default Form;