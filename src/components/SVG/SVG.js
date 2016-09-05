import React from 'react';

const SVG = ({children, className, style}) => (
    <svg width="100%" height="100%" className={className} style={style}>{children}</svg>
);

export default SVG;