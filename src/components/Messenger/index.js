import React from 'react'
import ConverstionList from '../ConversationList'
import { MessageList } from '../MessageList'
import "./messenger.css"

export const Messenger = () => {
    return (
        <div className="messenger">
            <div className="scrollable sidebar">
                <ConverstionList />
            </div>
            <div className="scrollable content">
                <MessageList />
            </div>
        </div>
    )
}
