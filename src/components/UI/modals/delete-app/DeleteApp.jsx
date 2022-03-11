import React from 'react';
import classes from './DeleteApp.module.css'
import Button from "../../button";
import attentionIcon from '../../../../assets/icons/attention-icon.svg'

const DeleteApp = ({ deleteActive, setDeleteActive, onclick, name}) => {

  return (
    <div
      className={deleteActive ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setDeleteActive(false)}
    >
      <div
        className={
          deleteActive
            ? `${classes.modal__content} ${classes.active}`
            : classes.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modal__content_attention}>
        <img className={classes.modal__content_icon} src={attentionIcon} alt="attention"/>
        <h2 className={classes.modal__content_title}>Уверены, что хотите удалить приложение «{name}»?</h2>
        </div>
        <Button type={'mini'} text={'Нет'} onClick={() => setDeleteActive(false)}/>
        <Button type={'mini'} text={'Да'} onClick={onclick}/>
      </div>
    </div>
  );
};


export default DeleteApp;