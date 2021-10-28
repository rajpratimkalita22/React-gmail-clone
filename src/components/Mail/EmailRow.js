import { Checkbox, IconButton } from '@material-ui/core';
// import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import React from 'react';
import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {   // As a component it will accept couple of props
    
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({                    // payload for the action name selectMail
                id,
                title,
                subject,
                description,
                time,
            })
        );
        history.push("/mail");
    };
    
    return (
      <div onClick={openMail} className="emailRow">
        <div className="emailRow__options">
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>

        <h3 className="emailRow__title">
            {title}
        </h3>

        <div className="emailRow__message">
            <h4>{subject}{" "}
            <span className="emailRow__description">-{" "}
                {description}
            </span>
            </h4>
        </div>

        <p className="emailRow__time">{time}</p>
     </div>
     );
}

export default EmailRow;
  