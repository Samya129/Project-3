import axios from "axios";

export default {
    //Get all events
    getEvents: function(){
        return axios.get("/api/events");
    },
    //Gets the event with the given id
    //Might not need this
    getEvent: function(id) {
        return axios.get("/api/events/" + id);
    },
    //deletes the event with the given id
    deleteEvent: function(id) {
        return axios.delete("/api/events/" + id);
    },
    //Saves an event to the database
    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData);
    }
}