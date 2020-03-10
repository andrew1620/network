import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const Info = ({ title, pageRef = "/editPIForm", data = [] }) => {
  const items = data.map(item => {
    return (
      <div key={item.id} className={css.item}>
        <span className={css.left}>{item.label}</span>
        <span className={css.right}>{item.description}</span>
      </div>
    );
  });

  return (
    <div className={css.info}>
      <div className={css.header}>
        <span>{title}</span>
        <span className={css.btnEdit}>
          <NavLink to={pageRef} className={css.navlink}>
            Редактировать
          </NavLink>
        </span>
      </div>

      <div className={css.content}>{items}</div>
    </div>
  );
};

export default Info;

//Props:
//  title - sub info name. For example: 'main info'
//  pageRef - the page where this info can be edited
//  data - an array with items which include:
//    label - name of info
//    description - info
//    ('About me' 'Like football, like tennis ...')
