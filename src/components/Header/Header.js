import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="Header">
            <div className="header_left">
            <IconButton>
               <MenuIcon />
            </IconButton>
            <img 
               src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" 
               alt="" 
            />
            </div>

            <div className="header_middle">
              <SearchIcon />    
              <input placeholder="Search mail" type="text" />   
              <ArrowDropDownIcon className="header__inputCaret" />   
            </div>

            <div className="header_right">
              <IconButton>
                <AppsIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <Avatar />
            </div>
        </div>
    );
}

export default Header;
