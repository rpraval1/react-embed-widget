import React from "react";
import { Container, Header, Icon, Message, Segment } from 'semantic-ui-react'

const MedalWidgetError = (props) => {
    return (
        <Container fluid className="medal_widget">
            <Segment placeholder="true" className="error">
                <Header icon color='red'>
                    <Icon name='circle notched' loading/>
                    MedalWidget is currently having trouble connecting to the server.
                </Header>
                <Message
                    error
                    list={[
                        'Please check your network connection.',
                        'Our medal widget services might be down, please try again in sometime.',
                        'If the problem persists over 24 hours. please contact our helpdesk at (XXX)-XXX-XXXX.'
                    ]}
                />
            </Segment>
        </Container>
    )
}

export default MedalWidgetError