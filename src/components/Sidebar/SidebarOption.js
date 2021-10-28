// import { IconButton } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './SidebarOption.css';

function SidebarOption({ Icon, title, number, selected }) {
  const history = useHistory();
    return (
          <div className={`sidebarOption ${selected && "sidebarOption--active"}`} onClick={() => history.push("/")}>
          <Icon />
          <h3>{title}</h3>
          <p>{number}</p>
        </div>
    )
}

export default SidebarOption;
