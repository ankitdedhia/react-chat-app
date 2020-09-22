import { Avatar, IconButton } from '@material-ui/core'
import { EmojiEmotionsOutlined, MoreVert, Send } from '@material-ui/icons';
import CallIcon from '@material-ui/icons/Call';
import React from 'react'
import Message from '../Message'
import './messagelist.css'

export const MessageList = () => {
    return (
        <div className="message-content">
            <div className="message-header">
                <Avatar />
                <div className="message-header-info">
                    <h3>Jon Snow</h3>
                    <p>Last Seen at...</p>
                </div>
                <div className="message-header-tools">
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="message-list">
                <Message />
            </div>
            <div className="message-footer">
                <EmojiEmotionsOutlined />
                <input type="text" placeholder="Type a message" />
                <Send />
            </div>
        </div>
    )
}
