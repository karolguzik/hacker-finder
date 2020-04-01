import React from 'react';
import style from './UserList.module.scss';
import AppContext from '../../context';
import UserItem from '../UserItem/UserItem';

const UserList = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <ul className={style.userList}>
        {context.users.map(user => <UserItem key={user.id} {...user}/>)}
        </ul>
      )}
    </AppContext.Consumer>
  )
}

export default UserList;