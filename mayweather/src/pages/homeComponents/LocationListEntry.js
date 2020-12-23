import React from "react";

const LocationListEntry = ({ locationlist, handleClick }) => {
    return (
        <div className="location-list-entry">
            <div className="location-object">
                <div className="location-list-entry-name" onClick={() => handleClick(locationlist)}>{locationlist}</div>
            </div>
        </div>
    )
}

export default LocationListEntry;