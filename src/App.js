import React, { useState } from 'react';

import PointCounter from './components/point-counter'
import RuneTree from './components/rune-tree';
import './styles/app.scss'

const App = ({ props }) => {

    const [totalPointsSpent, setTotalPointsSpent] = useState(0); // begin with points spent at 0

    /**
     * Update the point counter with the number of points spent
     * @param {number} points the point value to be added (negative for subtracting points)
     */
    const updatePointCounter = (points) => {
        setTotalPointsSpent(totalPointsSpent + points);
    }

    return (
        <div className="main">
            <div className="banner">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</div>
            <div className="content">
                <div className="rune-trees">
                    {props.runeTrees.map((runeTree) => (
                        <RuneTree
                            id={runeTree.id}
                            key={runeTree.id} // needed for uniqueness
                            label={runeTree.label}
                            maxPointsAllowed={props.maxPointsAllowed}
                            runes={runeTree.runes}
                            totalPointsSpent={totalPointsSpent}
                            updatePointCounter={updatePointCounter}
                        />
                    ))}
                </div>
                <PointCounter
                    pointsSpent={totalPointsSpent}
                    maxPointsAllowed={props.maxPointsAllowed}
                />
            </div>
        </div>
    );
}

export default App;
