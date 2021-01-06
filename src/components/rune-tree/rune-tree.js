import React, { useState } from 'react';

import Connector from '../connector';
import Rune from '../rune';

const RuneTree = ({
    id,
    label,
    maxPointsAllowed,
    runes,
    totalPointsSpent,
    updatePointCounter }) => {

    const runeCount = runes.length;
    const [treePointsSpent, setTreePointsSpent] = useState(0);

    /**
     * Update the points spent in this tree and the overall point counter
     * @param {number} points the point value to be added (negative for subtracting points)
     */
    const updatePoints = (points) => {
        setTreePointsSpent(treePointsSpent + points);
        updatePointCounter(points);
    }

    /**
     * Render a rune object, consisting of an icon and the connector that follows it.
     * @param {string} treeId
     * @param {object} rune
     * @param {number} runeIndex 
     */
    const renderRune = (treeId, { runeId, name, tier }, runeIndex) => {
        const runeKey = `${treeId}_${runeId}`;
        return (
            <div key={runeKey} className="wrapper">
                <Rune
                    maxPointsAllowed={maxPointsAllowed}
                    name={name}
                    tier={tier}
                    totalPointsSpent={totalPointsSpent}
                    treePointsSpent={treePointsSpent}
                    updatePoints={updatePoints}
                />
                {
                    // do not add connector after last rune
                    runeIndex === runeCount ? null :
                        <Connector
                            index={runeIndex}
                            treePointsSpent={treePointsSpent}
                        />
                }
            </div>
        );
    };

    return (
        <div className="rune-tree">
            <div className="label">{label}</div>
            <div className="runes">
                {runes.map((rune, index) => (renderRune(id, rune, index + 1)))}
            </div>
        </div>
    );
};

export default RuneTree;