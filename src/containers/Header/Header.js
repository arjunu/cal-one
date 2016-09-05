import React from 'react';
import * as styles from "./Header.css";
import classNames from 'classnames';

export default class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <header className={styles.headerWrapper}>
            <i className={classNames("flaticon-bars", styles.headerIcon)}/>
            <h1 className={styles.headerTitle}>Cal-One</h1>
        </header>;
    }
}

