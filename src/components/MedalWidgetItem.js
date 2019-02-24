import React from "react";
import { Table } from 'semantic-ui-react'

const MedalWidgetItem = (props) => {
    
    return(
        <Table.Row>
            <Table.Cell className="index">{props.countryMedalData.index}</Table.Cell>
            <Table.Cell className="country_flag">
                <div className={`flags-${props.countryMedalData.code ? props.countryMedalData.code.toLowerCase() : 'aut'}`} ></div>
            </Table.Cell>
            <Table.Cell className="country">{props.countryMedalData.code}</Table.Cell>
            <Table.Cell>{props.countryMedalData.gold}</Table.Cell>
            <Table.Cell>{props.countryMedalData.silver}</Table.Cell>
            <Table.Cell>{props.countryMedalData.bronze}</Table.Cell>
            <Table.Cell className="total">{props.countryMedalData.total}</Table.Cell>
        </Table.Row>
    )
}



export default MedalWidgetItem