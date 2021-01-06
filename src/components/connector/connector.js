import React from 'react';

const Connector = ({ index, treePointsSpent }) => {

    // activate the previous connector when a rune is selected, except for the first one
    const activeClass = treePointsSpent >= 1 && treePointsSpent > index ? 'active' : '';
    const className = `connector ${activeClass}`;

    return (
        <div className={className}/>
    );
};

export default Connector;