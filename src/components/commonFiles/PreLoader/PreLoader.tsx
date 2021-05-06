import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Styles from './PreLoader.module.scss'

export function PreLoader() {
  return (
    <div className={Styles.preloadWrapper}>
      <CircularProgress color={'inherit'}/>
    </div>
  );
}