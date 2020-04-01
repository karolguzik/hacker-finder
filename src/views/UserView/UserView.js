import React from 'react';
import User from '../../components/User/User';

const UserView = () => {
  console.log(this.props.match)
  return (
    <User />
  )
}

export default UserView;