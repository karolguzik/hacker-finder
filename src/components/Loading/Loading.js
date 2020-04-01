import React from 'react';
import style from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={style.wrapper}>
    <div className={style.loadingWrapper}>
      <span className={style.loadingText}>LOADING...</span>
      <div className={style.loadingBar}></div>
    </div>
    </div>
  )
}

export default Loading;