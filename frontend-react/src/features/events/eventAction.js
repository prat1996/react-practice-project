import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstant";

export function createEvent(event){
    return {
        action: CREATE_EVENT,
        paylod: event
    }
}

export function updateEvent(event){
    return {
        action: UPDATE_EVENT,
        paylod: event
    }
}

export function deleteEvent(eventID){
    return {
        action: DELETE_EVENT,
        paylod: eventID
    }
}