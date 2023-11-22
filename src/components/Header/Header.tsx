import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            – Get the work done –
        </div>
        <div className={styles.title2}>
         Pomodoro Focus
        </div>
    </div>
    )
}

export default Header;