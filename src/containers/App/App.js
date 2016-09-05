import React from 'react';
import * as styles from './App.css';
import Graph from '../../components/graph/Graph';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        const unit = 8;

        this.state = {
            unit,
            origin: {
                x: unit * 10, y: unit * 40
            },
            xAxis: {
                unit: {
                    x: 8, y:8
                },
                range: [0, 80]
            },
            yAxis: {
                unit: {
                    x: 1, y:1
                },
                range: [0, 40]
            }
        };
    }

    onOriginChange(coordinate, event) {
        this.setState({
            origin: {
                ...this.state.origin,
                [coordinate]: event.target.value
            }
        });
    }

    render() {
        return (
            <div className={styles.appWrapper}>
                <div className={styles.svgContainer}>
                   <Graph config={this.state}/>
                </div>
                <div className={styles.formControls}>

                </div>
            </div>);
    }
}



