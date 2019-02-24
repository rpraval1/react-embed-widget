import React from "react";
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types';

const MedalWidgetItem = (props) => {
    
    return(
        <Table.Row>
            <Table.Cell width={1} className="index">{props.countryMedalData.index}</Table.Cell>
            <Table.Cell width={2} className="country_flag">
                <div 
                    className={`flags-${props.countryMedalData.code ? props.countryMedalData.code.toLowerCase() : 'none'}`} ></div>
            </Table.Cell>
            <Table.Cell width={5} className="country">{props.countryMedalData.code}</Table.Cell>
            <Table.Cell width={1}>{props.countryMedalData.gold}</Table.Cell>
            <Table.Cell width={1}>{props.countryMedalData.silver}</Table.Cell>
            <Table.Cell width={1}>{props.countryMedalData.bronze}</Table.Cell>
            <Table.Cell width={1} className="total">{props.countryMedalData.total}</Table.Cell>
        </Table.Row>
    )
}

MedalWidgetItem.PropTypes = {
    countryMedalData: PropTypes.object
}


export default MedalWidgetItem