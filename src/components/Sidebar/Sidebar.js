import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from "./SidebarOption";
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from "react-redux";
import { openSendMessage } from '../../features/mailSlice';
import { useHistory } from 'react-router-dom';



function Sidebar() {                // startIcon={<AddIcon fontSize="large" />}
    const dispatch = useDispatch();
    const history = useHistory();
    return <div className="sidebar">  
            <Button 
            className="sidebar__compose"
            onClick={() => dispatch(openSendMessage())}
            >
              <img 
               src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" 
               alt="" 
            />
            
             <h4>Compose</h4>
            </Button>

            <SidebarOption 
              Icon={InboxIcon} 
              title="Inbox"
              number={54} 
              selected={true}
              onClick={() => history.push("/")}
            /> 
            <SidebarOption Icon={StarIcon} title="Starred" number={54} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
            <SidebarOption Icon={SendIcon} title="Sent" number={54} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

          <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
              <IconButton>
                <PersonIcon />
              </IconButton>
              <IconButton>
                <DuoIcon />
              </IconButton>
              <IconButton>
                <PhoneIcon />
              </IconButton>
            </div>
          </div>
        </div>
    
}

export default Sidebar;
