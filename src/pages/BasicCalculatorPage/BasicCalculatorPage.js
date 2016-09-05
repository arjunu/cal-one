import React from 'react';
import * as styles from './BasicCalculatorPage.css';

const buttons = [
    [
        {label: "7"},
        {label: "8"},
        {label: "9"},
        {label: "/"}
    ],
    [
        {label: "4"},
        {label: "5"},
        {label: "6"},
        {label: "*"}
    ],
    [
        {label: "1"},
        {label: "2"},
        {label: "3"},
        {label: "-"}
    ],
    [
        {label: "0"},
        {label: "00"},
        {label: "."},
        {label: "+"}
    ],
    [
        {label: ""},
        {label: ""},
        {label: "DEL"},
        {label: "="}
    ],

];

const Display = () => (
    <div className={styles.displayWrapper}>
        <div className={styles.display1Wrapper}><h2 className={styles.display1}>5*5</h2></div>
        <div className={styles.display2Wrapper}><h4 className={styles.display2}>25</h4></div>
    </div>
);

const ButtonRow = ({children}) => (
    <div className={styles.buttonRow}>
        {children}
    </div>
);

const Buttons = () => (
    <div className={styles.buttonsWrapper}>
        {buttons.map((buttonRow, index) => (
            <ButtonRow key={index}>
                {buttonRow.map((button, index) => <button key={button.label||index} className={styles.button}>{button.label}&nbsp;</button>)}
            </ButtonRow>
        ))}
    </div>
);

export default class BasicCalculatorPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={styles.pageWrapper}>
            <Display/>
            <Buttons/>
        </div>;
    }
}

