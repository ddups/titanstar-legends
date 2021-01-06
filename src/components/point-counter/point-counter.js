import React from 'react';

const PointCounter = ({ pointsSpent, maxPointsAllowed }) => {
    
    return (
        <div className="point-counter">
            <div className="wrapper">
                <div className="points">{pointsSpent} / {maxPointsAllowed}</div>
                <div className="label">Points Spent</div>
            </div>
        </div>
    );
};

export default PointCounter;
