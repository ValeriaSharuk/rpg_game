import React from 'react';
import CustomLink from "../../components/CustomLink/CustomLink";
import styles from "./Start.module.css"

const Start = () => {
    return (
        <div>
            <CustomLink to='/'>Back</CustomLink>
            <div className={styles.container}>
                <div className={styles.textCol}>
                    <CustomLink to='/train' bigButton>Train</CustomLink>
                </div>
                <div className={styles.textCol}>
                    <CustomLink to='/battle' bigButton>Battle</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Start;