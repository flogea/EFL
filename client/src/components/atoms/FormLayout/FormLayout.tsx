import React from 'react';

import styles from './FormLayout.module.scss';

export const FormLayout = ({ children }) => {
  return <div className={styles.formLayout}>{children}</div>;
};
