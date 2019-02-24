/**
* React Imports 
*/
import React, { Component } from "react";

/**
 * Semantic UI Imports
 */
import { Container, Grid, Header, Image, Label, Table } from 'semantic-ui-react'


class MedalWidget extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
          fetchError: false,
          loading: true
        };
    }

    componentDidMount() {
        fetch('https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json')
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
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

    render() {
        const { sort } = this.props
        const { data, fetchError, loading } = this.state

        if (fetchError) return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            Error fetching Medals data, please try again later!
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )

        if (loading) return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            Loading Medal Data..... 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
        

        console.log(data);

        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3' color='grey' className="medal_widget_header">MEDAL COUNT</Header>
                            <Table basic='very' unstackable textAlign="center" compact>
                                <Table.Header>
                                    <Table.Row className="medal_widget_table_header">
                                        <Table.HeaderCell></Table.HeaderCell>
                                        <Table.HeaderCell></Table.HeaderCell>
                                        <Table.HeaderCell></Table.HeaderCell>
                                        <Table.HeaderCell className="selected">
                                            <Label circular color='yellow' />
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <Label circular color='grey' />
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <Label circular color='brown' /> 
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>TOTAL</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell>
                                            <div className="flags-aut" ></div>
                                        </Table.Cell>
                                        <Table.Cell>RUS</Table.Cell>
                                        <Table.Cell>13</Table.Cell>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>33</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell><div className="flags-blr" ></div></Table.Cell>
                                        <Table.Cell>RUS</Table.Cell>
                                        <Table.Cell>13</Table.Cell>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>33</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell><div className="flags-can" ></div></Table.Cell>
                                        <Table.Cell>RUS</Table.Cell>
                                        <Table.Cell>13</Table.Cell>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>33</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell><div className="flags-chn" ></div></Table.Cell>
                                        <Table.Cell>RUS</Table.Cell>
                                        <Table.Cell>13</Table.Cell>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>33</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell><div className="flags-fra" ></div></Table.Cell>
                                        <Table.Cell>RUS</Table.Cell>
                                        <Table.Cell>13</Table.Cell>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>33</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell><div className="flags-ger" ></div></Table.Cell>
                                        <Table.Cell>RUS</Table.Cell>
                                        <Table.Cell>13</Table.Cell>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>33</Table.Cell>
                                    </Table.Row>
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