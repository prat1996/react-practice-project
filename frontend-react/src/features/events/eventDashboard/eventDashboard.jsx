import React,{useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData'

export default function EventDashboard(){

    const [events,setEvents]=useState(sampleData)

    function handelDeleteEvent(id) {
      setEvents(events.filter((evt) => evt.id !== id));
    }
    

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events}  deleteEvent={handelDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Event filters</h2>
        </Grid.Column>
      </Grid>
    );
}