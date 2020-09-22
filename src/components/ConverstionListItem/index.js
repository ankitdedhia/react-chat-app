import React from 'react';
import "./ConverstionListItem.css"

const ConversationListItem = (props) => {
  const { coversation_id, photo, name, text } = props.data;
    return (
        <div className="conversation-list-item" >
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{name}</h1>
          <p className="conversation-snippet">{text}</p>
        </div>
      </div>
    )
}

export default ConversationListItem
