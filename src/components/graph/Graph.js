import React from 'react';
import SVG from '../SVG/SVG';
import Axes from '../graph/Axes';
import Grid from '../graph/Grid';

export default class Graph extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {origin, unit, xAxis, yAxis} = this.props.config;

        return <SVG>

            <Grid unit={unit}/>
            <Axes origin={origin}
                  unit={unit}
                  x={xAxis}
                  y={yAxis}
            />
        </SVG>;
    }
}

