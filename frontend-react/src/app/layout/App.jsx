import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDetailPage from "../../features/events/eventsDetail/EventDetailPage";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/navBar";

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <div>
            <NavBar/>
            <Container className='main'>
              <Route exact event path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailPage} />
              <Route path={['/createEvent','/manage/:id']} component={EventForm} />
            </Container>
          </div>
        )}
      />
    </>
  );
}

export default App;
