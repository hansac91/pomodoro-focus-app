import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
    <div className={styles.wrapper}>
        <span className={styles.title}>
            – Get the work done –
        </span>
        <span className={styles.title2}>
         Pomodoro Focus
        </span>
    </div>
    )
}

export default Header;