import React, { useState } from 'react';

const Rune = ({
    maxPointsAllowed,
    name,
    tier,
    totalPointsSpent,
    treePointsSpent,
    updatePoints }) => {

    const pointValue = 1;
    const [isSelected, setSelected] = useState(false); // default to unselected
    const selectedClass = isSelected ? 'selected' : '';
    const className = `rune ${name} ${selectedClass}`;

    /**
     * Validation helper for selecting a rune
     */
    const canSelect = () => {
        return totalPointsSpent < maxPointsAllowed && tier === treePointsSpent;
    }

    /**
     * Validation helper for deselecting a rune
     */
    const canDeselect = () => {
        return tier === treePointsSpent - 1;
    }

    /**
     * Determine if the rune can be selected, and update the point counts and style of the icon if valid.
     * 
     * A rune can only be selected if:
     *  - it has not already been selected
     *  - the total points spent are less than the max points
     *  - the rune's tier is equal to the tree's point total
     */
    const select = () => {
        // validate before update
        if (!isSelected && canSelect()) {
            updatePoints(pointValue);
            setSelected(true);
        }
    };

    /**
     * Determine if the rune can be deselected, and update the point counts and style of the icon if valid.
     * 
     * A rune can only be deselected if:
     *  - it has already been selected
     *  - the rune's tier is one less than the tree's point total
     * 
     * @param {*} event the triggering click event
     */
    const deselect = (event) => {
        // prevent the "right-click" menu from displaying
        event.preventDefault();

        // validate before update
        if (isSelected && canDeselect()) {
            updatePoints(-pointValue);
            setSelected(false);
        }
    };

    return (
        <div
            className={className}
            onClick={select}
            onContextMenu={deselect}
            title={isSelected ? 'Selected' : canSelect() ? 'Unlocked' : 'Locked'}
        />
    );
};

export default Rune;