import React, { useEffect, useState } from 'react';
import ConversationListItem from '../ConverstionListItem';
import "./ConversationList.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import axios from 'axios';

const ConverstionList = (props) => {
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
        getConversations()
      },[])

  const getConversations = async () => {
    
    let response = await axios.get('http://localhost:3001/conversation/getAllConvoByAuthorID?id=5f6854d300e1249de832578a');
            let newConversations = response.data.data.map(result => {
              return {
                conversation_id: result.conversation_id,
                photo: result.participants.picture.thumbnail,
                name: `${result.participants.first_name} ${result.participants.last_name}`,
                text: 'Hello world! This is a long message that needs to be truncated.'
              };
            });
    setConversations([...conversations, ...newConversations]);
      }
    
    return (
        <div className="conversation-list">
            <div className="sidebar-header">
                Messages
                 

            </div>
            <div className="sidebar-search">
                <SearchOutlinedIcon />
                <input type="text" name="search" placeholder="Search" />
            </div>
            {
            conversations.map((conversation)=>{
                return <ConversationListItem  key={conversation.name}
                data={conversation} />
                
            })
        }
            
        </div>
    )
}

export default ConverstionList
