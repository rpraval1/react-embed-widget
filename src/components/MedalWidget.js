/**
* React Imports 
*/
import React, { Component } from "react";

/**
 * Semantic UI Imports
 */
import { Container, Grid, Header, Table } from 'semantic-ui-react'

/**
 * Load all Helper methods
 */
import {
    addTotalToData,
    getTieBreakerField,
    getMedalType,
    renderMedalDataRows,
    renderMedalWidgetHeader,
    sortMedalData
} from '@helpers'

/**
 * Load all React components
 */
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
          sortField: null
        };

        this.handleMedalIconClick = this.handleMedalIconClick.bind(this)
    }

    componentDidMount() {
        if (this.props.debug) {
            console.log("DEBUG: Fetching Medal data from source ...")
        }
        
        let medalType = getMedalType(this.props.sort)

        fetch(process.env.MEDALDATA_API_URL)
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
            data = addTotalToData(data).sort(sortMedalData(medalType, getTieBreakerField(medalType),'desc'))

            this.setState({
                data,
                sortField: medalType,
                loading: false
            })
        })
        .catch(err => {
            // Error fetching data from medal source
            this.setState({
                fetchError: true
            })
            console.log(err)
        })
    }

    handleMedalIconClick(e, data) {
        if (this.props.debug) {
            console.log("sorting by: ")
            console.log(data)
        }

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
        const { sort, top, debug } = this.props
        const { data, fetchError, loading, sortField } = this.state

        if (fetchError) return (
            <MedalWidgetError />
        )

        if (loading) return (
            <MedalWidgetLoading />
        )
        
        if (debug) {
            console.log("DEBUG MODE: ");
            console.log(data);
            console.log("DEBUG MODE: ");
            console.log(sortField);
        }

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