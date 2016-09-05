import React from 'react';

const style = {
    strokeWidth: 1,
    stroke: "black"
};

const Line = ({children, points}) => (
    <line x1={points.x1} y1={points.y1} x2={points.x2} y2={points.y2}
          style={style}>{children}</line>
);

export default Line;