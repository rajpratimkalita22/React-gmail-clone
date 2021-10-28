import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { signOut } from "firebase/auth";

function Header() {
    const userdetails = useSelector(selectUser);
    const dispatch = useDispatch();

    const SignOut = () => {
      signOut(auth).then(() => {
        dispatch(logout());
      });
    };

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
              <Avatar onClick={SignOut} src={userdetails?.photoUrl} style={{cursor: "pointer"}} />
            </div>
        </div>
    );
}

export default Header;
