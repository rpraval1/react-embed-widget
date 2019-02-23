import React from "react";
import { Container, Header, Button } from 'semantic-ui-react'

const MedalWidget = (props) => {
    return(
        <Container>
            <Header as='h1' color='grey'>MEDAL COUNT</Header>
            Sort type: {props.sort}
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
        </Container>
    )
}


export default MedalWidget
