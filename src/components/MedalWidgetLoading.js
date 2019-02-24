import React from "react";
import { Container, Dimmer, Loader } from 'semantic-ui-react'

const MedalWidgetLoading = (props) => {
    return (
        <Container fluid className="medal_widget">
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>    
        </Container>
    )
}

export default MedalWidgetLoading