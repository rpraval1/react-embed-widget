import React from "react";
import { Label, Table } from 'semantic-ui-react'

const MedalWidgetHeader = (props) => {
    return(
        <Table.HeaderCell 
            className={props.sortField == props.currentField ? 'selected' : null}
        >
            <Label 
                className={props.currentField == 'total' ? 'total' : null}
                circular={props.currentField !== 'total' ? true : false}
                basic={props.currentField == 'total' ? true : false}
                color= { props.color }
                data-medal-type= { props.currentField }
                onClick={ props.handleClick }>
                {props.currentField == 'total' ? 'TOTAL' : null}
            </Label>
        </Table.HeaderCell>
    )
}



export default MedalWidgetHeader