import React from 'react';
import './chatbot.css';
import chatbot from '../../assets/images/Chatbot-side.png'

function Chatbot() {
    return (
        <div className='h247__chatbot'>
            <img src={chatbot} alt="chatbot" />
        </div>
    )
}

export default Chatbot