import React from "react";

function renderMedalDataRows(medalData, Component) {
    return medalData.map( (countryMedalData, index) => {
        countryMedalData.index = index + 1
        return (
            <Component key={countryMedalData.index} countryMedalData={countryMedalData} />
        )
    })
}

function addTotalToData (medalData) {
    return medalData.map( (countryMedalData) => {
        countryMedalData.total = countryMedalData.gold + countryMedalData.silver + countryMedalData.bronze
        return countryMedalData
    })
}

// Ex: MedalData Sort by Gold and tie breaker - Silver: 
// medalData.sort(sortMedalData('gold', 'silver','desc'));
function sortMedalData (medalFieldName, tieBreakerFieldName, order='asc') {
    return function(a, b) {
        if(!a.hasOwnProperty(medalFieldName) || !b.hasOwnProperty(medalFieldName)) {
            // property doesn't exist on either object
            return 0;
        }

        let fieldValueA = (typeof a[medalFieldName] === 'string') ?
        a[medalFieldName].toUpperCase() : a[medalFieldName];
        let fieldValueB = (typeof b[medalFieldName] === 'string') ?
        b[medalFieldName].toUpperCase() : b[medalFieldName];

        let comparison = 0;

        if (fieldValueA > fieldValueB) {
            comparison = 1;
        } else if (fieldValueA < fieldValueB) {
            comparison = -1;
        } else {
            // Let's use tieBreakerFieldName
            fieldValueA = (typeof a[tieBreakerFieldName] === 'string') ?
            a[tieBreakerFieldName].toUpperCase() : a[tieBreakerFieldName];
            fieldValueB = (typeof b[tieBreakerFieldName] === 'string') ?
            b[tieBreakerFieldName].toUpperCase() : b[tieBreakerFieldName];

            fieldValueA = a[tieBreakerFieldName];
            fieldValueB = b[tieBreakerFieldName];
            if (fieldValueA > fieldValueB) {
                comparison = 1;
            } else if (fieldValueA < fieldValueB) {
                comparison = -1;
            }
        }

        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

function getTieBreakerField (sortField) {
    return {
        "gold": "silver",
        "silver": "gold",
        "bronze": "gold",
        "total": "gold"
    }[sortField]
}


export {
    addTotalToData,
    getTieBreakerField,
    renderMedalDataRows,
    sortMedalData
}