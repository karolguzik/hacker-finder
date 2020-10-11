import React from 'react';
import style from './Access.module.scss';
import PropTypes from 'prop-types';

const Access = ({ access }) => {
  return (
    <div className={style.wrapper}>
    <div className={style.accessWrapper}>
      <span className={style.accessText}>{access === 'rejected' ? 'REJECTED' : 'GRANTED'}</span>
      <div className={access === 'rejected' ? style.accessBarRejected : style.accessBarGranted}></div>
    </div>
    </div>
  )
}


Access.propTypes = {
  access: PropTypes.string.isRequired,
}

export default Access;