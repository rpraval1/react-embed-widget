/**
* React Imports 
*/
import React, { Component } from "react";

/**
 * Semantic UI Imports
 */
import { Container, Grid, Header, Table } from 'semantic-ui-react'

import {
    addTotalToData,
    getTieBreakerField,
    renderMedalDataRows,
    renderMedalWidgetHeader,
    sortMedalData
} from '@helpers'

import {
    MedalWidgetItem,
    MedalWidgetHeader,
    MedalWidgetError,
    MedalWidgetLoading
} from '@components'

class MedalWidget extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
          fetchError: false,
          loading: true,
          sortField: "gold"
        };
        this.handleMedalIconClick = this.handleMedalIconClick.bind(this)

    }

    componentDidMount() {
        console.log("Fetching Medal data from source ...")
        fetch('https://s3-us-west-2ki.amazonaws.com/reuters.medals-widget/medals.json')
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
            data = addTotalToData(data)
            this.setState({
                data,
                loading: false
            })
        })
        .catch(err => {
            // Error fetching data from mdeal source
            this.setState({
                fetchError: true
            })
            console.log(err)
        })
    }

    handleMedalIconClick(e, data) {
        console.log("sort by: ")
        console.log(data)
        let medalType = data["data-medal-type"]
        if (medalType) {
            let data = this.state.data.sort(sortMedalData(medalType, getTieBreakerField(medalType),'desc'));

            this.setState({
                sortField: medalType,
                data
            })
        }
    }

    render() {
        const { sort, top } = this.props
        const { data, fetchError, loading, sortField } = this.state

        if (fetchError) return (
            <MedalWidgetError />
        )

        if (loading) return (
            <MedalWidgetLoading />
        )

        console.log(data);
        console.log(sortField);

        return (
            <Container className="medal_widget">
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3' color='grey' className="header">MEDAL COUNT</Header>
                            <Table basic='very' unstackable textAlign="center" compact>
                                <Table.Header>
                                    <Table.Row className="header">
                                        <Table.HeaderCell colSpan={3}></Table.HeaderCell>
                                        {renderMedalWidgetHeader(MedalWidgetHeader, sortField, this.handleMedalIconClick)}

                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {renderMedalDataRows(data, MedalWidgetItem, top)}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}


export default MedalWidget;