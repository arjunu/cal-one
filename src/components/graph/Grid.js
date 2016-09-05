import React from 'react';
import G from '../SVG/G';
import Defs from '../SVG/Defs';

const strokeColor = "#bebebe";

const Grid = ({unit})=> (
    <G>
        <Defs>
            <pattern id="smallGrid" width={unit} height={unit} patternUnits="userSpaceOnUse">
                <path d={`M ${unit} 0 L 0 0 0 ${unit}`} fill="none" stroke={strokeColor} strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width={unit * 10} height={unit * 10} patternUnits="userSpaceOnUse">
                <rect width={unit * 10} height={unit * 10} fill="url(#smallGrid)"/>
                <path d={`M ${unit * 10} 0 L 0 0 0 ${unit * 10}`} fill="none" stroke={strokeColor} strokeWidth="1"/>
            </pattern>
        </Defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
    </G>
);

export default Grid;
