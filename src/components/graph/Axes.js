import React from 'react';
import Line from '../SVG/Line';

const Axes = ({origin, x, y, unit}) => {
    const yAxis = {
        x1: origin.x, y1: origin.y,
        x2: origin.x, y2: origin.y - y.range[1] * unit
    };

    const xAxis = {
        x1: origin.x, y1: origin.y,
        x2: origin.x + x.range[1] * unit, y2: origin.y
    };

    return (
        <g>
            <Line points={xAxis}/>
            <Line points={yAxis}/>
        </g>);
};

export default Axes;