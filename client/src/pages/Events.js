// import React, { useState, useEffect } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// function Events() {
//   // Setting our component's initial state
//   const [events, setEvents] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all events and store them with setEvents
//   useEffect(() => {
//     loadEvents()
//   }, [])

//   // Loads all events and sets them to events
//   function loadEvents() {
//     API.getEvents()
//       .then(res => 
//         setEvents(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a event from the database with a given id, then reloads events from the db
//   function deleteEvent(id) {
//     API.deleteEvent(id)
//       .then(res => loadEvents())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload events from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveBook({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(res => loadEvents())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>List of Events</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(formObject.author && formObject.title)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Events On My List</h1>
//             </Jumbotron>
//             {events.length ? (
//               <List>
//                 {events.map(event => (
//                   <ListItem key={event._id}>
//                     <Link to={"/events/" + event._id}>
//                       <strong>
//                         {event.title} by {event.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => deleteEvent(event._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Events;
