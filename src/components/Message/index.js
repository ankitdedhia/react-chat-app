import React from 'react'
import './message.css'

const Message = () => {
    return (
        <>
            <div className="message-body">
                {/* <span className="username">Victor Krum</span> */}
                <div className="bubble-container">
                    <div className="bubble" >
                        This is a message
                    </div>
                </div>
            {/* <div className="message_timestamp">{new Date().toUTCString()}</div> */}

            </div>
            <div className="message-body mine">
                {/* <span className="username">Jon Snow</span> */}
                <div className="bubble-container">
                    <div className="bubble" >
                        Message from Jon Snow
                    </div>
                </div>

                {/* <div className="message_timestamp">{new Date().toUTCString()}</div> */}

            </div>
            <div className="message-body mine">
                {/* <span className="username">Jon Snow</span> */}
                <div className="bubble-container">
                    <div className="bubble" >
                        Message from Jon Snow
                    </div>
                </div>

                {/* <div className="message_timestamp">{new Date().toUTCString()}</div> */}

            </div>
        </>
    )
}

export default Message
