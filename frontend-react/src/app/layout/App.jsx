import React,{useState} from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar";

function App() {
  const [formOpen,setFormOpen]=useState(false)
  const [selectedEvent, setSelecteEvent]=useState(null)

  function handelSelectEvent(event) {
    setSelecteEvent(event);
    setFormOpen(true);
  }

  function handelCreateFormOpen() {
    setSelecteEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <NavBar setFormOpen={handelCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={handelSelectEvent}
        />
      </Container>
    </>
  );
}

export default App;
