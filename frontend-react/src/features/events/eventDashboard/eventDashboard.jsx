import React,{useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData'

export default function EventDashboard({formOpen,setFormOpen,selectEvent, selectedEvent}){

    const [events,setEvents]=useState(sampleData)

    function handelCreateEvent(event) {
      setEvents([...events, event]);
    }

    function handelUpdatedEvent(updateEvent) {
      setEvents(
        events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt)),
      );
      selectEvent(null);
    }
    function handelDeleteEvent(id) {
      setEvents(events.filter((evt) => evt.id !== id));
    }
    

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events}  selectEvent={selectEvent}  deleteEvent={handelDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              setFormOpen={setFormOpen}
              setEvents={setEvents}
              createEvent={handelCreateEvent}
              selectedEvent={selectedEvent}
              key={selectedEvent ? selectedEvent.id : null}
              updateEvent={handelUpdatedEvent}
            
            />
          )}
        </Grid.Column>
      </Grid>
    );
}