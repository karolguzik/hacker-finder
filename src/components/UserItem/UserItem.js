import React from 'react';
import styles from './UserItem.module.scss';
import { NavLink } from 'react-router-dom';


const UserItem = ({login}) => {
  return (
    <NavLink className={styles.userItem} to={`/users/${login}`}>{login}</NavLink>
  )
}

export default UserItem;