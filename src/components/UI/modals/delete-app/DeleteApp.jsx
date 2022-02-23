import React from 'react';
import classes from './DeleteApp.module.css'
import Button from "../../button";
import attentionIcon from '../../../../assets/icons/attention-icon.svg'

const DeleteApp = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${classes.modal__content} ${classes.active}`
            : classes.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modal__content_attention}>
        <img className={classes.modal__content_icon} src={attentionIcon} alt="attention"/>
        <h2 className={classes.modal__content_title}>Уверены, что хотите удалить приложение «Sketchbook»?</h2>
        </div>
        <Button type={'mini'} text={'Нет'}></Button>
        <Button type={'mini'} text={'Да'}></Button>
      </div>
    </div>
  );
};


export default DeleteApp;