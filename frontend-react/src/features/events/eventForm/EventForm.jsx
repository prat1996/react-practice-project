import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen, setEvents,createEvent,selectedEvent }) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    city: "",
    venue: "",
    description: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handelSubmit() {
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: "Bob",
      attendees: [],
      hostPhotoURL: "/assets/user.png",
    });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form onSubmit={handelSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            value={values.title}
            name='title'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
        <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
          <input
            name='description'
            type='text'
            placeholder='Event Discription'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name='city'
            type='text'
            placeholder='Event City'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name='venue'
            type='text'
            placeholder='Event Venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name='date'
            type='date'
            placeholder='Date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='submit' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
