import React, {useState} from 'react';
import classes from './ChangeDescription.module.css';
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import PopupTextarea from "../../textarea";
import Button from "../../button";
import PostService from "../../../../api/PostService";

const ChangeDescription = ({ editActive, setEditActive, onClick, isEditing, setIsEditing }) => {

  return (
    <div
      className={editActive ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setEditActive(false)}
    >
      <div
        className={
          editActive
            ? `${classes.modal__content} ${classes.active}`
            : classes.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.modal__content_title}>Изменить описание</h2>
        <img
          className={classes.modal__content_cross}
          src={crossIcon}
          alt="cross"
          onClick={() => setEditActive(false)}
        />
        <PopupTextarea textareaLabel={"Описание"}
                       value={isEditing}
                       onChange={(e)=>setIsEditing(e.target.value)}/>
        <Button text={"Сохранить"} onClick={onClick}/>
      </div>
    </div>
  );
};


export default ChangeDescription;