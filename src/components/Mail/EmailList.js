import React, { useState, useEffect } from 'react';
import { Checkbox, IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../../firebase';

function EmailList() {
   const [emails, setEmails] = useState([]);

   useEffect(() => {

      // This feature gets the data from the firebase store and displays it in frontend upon click events
      const first = query(collection(db, 'emails'), orderBy('timestamp', 'desc'));

      const unsub = onSnapshot(first, (snapShot) => {
        setEmails(                  // So everytime a change happens inside of setEmails like (add, delete, modify) then the emails on the front end gets updated.
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      });
   }, [])
    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                      <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                      <RedoIcon />
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                <IconButton>
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                  <ChevronRightIcon />
                </IconButton>
                <IconButton>
                  <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                  <SettingsIcon />
                </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
              <Section Icon={InboxIcon} title="Primary"
               color="red" selected />
              <Section Icon={PeopleIcon} title="Social"
               color="#1A73E8" />
              <Section Icon={LocalOfferIcon} title="Promotions"
               color="green" />
              </div>

              <div className="emailList__list">
                  {emails.map(({id, data : {to, subject, message, timestamp}}) => (
                    <EmailRow
                      id={id}
                      key={id}   // using key here to avoid rendering of all the emails, so now it will pop one email at each push or send
                      title={to}
                      subject={subject}
                      description={message}
                      time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                  ))}
                 <EmailRow 
                  title="Twitch"
                  subject="Hey fellow streamer!!!"
                  description="This is a test and I want to pass please make me pass"
                  time="10:32"
                /> 
                 <EmailRow 
                  title="Twitter"
                  subject="Nahamsec shared news at twitch"
                  description="This is DOPE"
                  time="10:00"
                /> 
                 <EmailRow 
                  title="Twitch"
                  subject="Hey fellow streamer!!!"
                  description="This is a test and I want to pass please make me pass"
                  time="10:32"
                /> 
                 <EmailRow 
                  title="Twitter"
                  subject="Nahamsec shared news at twitch"
                  description="This is DOPE"
                  time="10:00"
                /> 
                 <EmailRow 
                  title="Twitch"
                  subject="Hey fellow streamer!!!"
                  description="This is a test and I want to pass please make me pass"
                  time="10:32"
                /> 
                 <EmailRow 
                  title="Twitter"
                  subject="Nahamsec shared news at twitch"
                  description="This is DOPE"
                  time="10:00"
                /> 
                 <EmailRow 
                  title="Twitch"
                  subject="Hey fellow streamer!!!"
                  description="This is a test and I want to pass please make me pass"
                  time="10:32"
                /> 
                 <EmailRow 
                  title="Twitter"
                  subject="Nahamsec shared news at twitch"
                  description="This is DOPE"
                  time="10:00"
                /> 
              </div>
        </div>
    )
}

export default EmailList;
