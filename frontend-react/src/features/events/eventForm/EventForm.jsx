import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen}){
    return(
        <Segment clearing>
            <Header content="Create new event"/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Event Title"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event Category"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event Discription"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event City"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event Venue"/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date"/>
                </Form.Field>
                <Button type="submit" floated="right" positive content="submit"/>
                <Button onClick={()=>setFormOpen(false)} type="submit" floated="right" content="Cancel"/>
            </Form>

        </Segment>
    )
}