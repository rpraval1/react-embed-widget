import React from "react";
import { Container, Grid, Header } from 'semantic-ui-react'

const MedalWidget = (props) => {
    return(
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h3' color='grey'>MEDAL COUNT</Header>
                        Sort type: {props.sort}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}


export default MedalWidget
