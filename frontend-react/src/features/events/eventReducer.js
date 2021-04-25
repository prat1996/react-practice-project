import {sampleData} from '../../app/api/sampleData'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstant'

const initialState ={
    events:sampleData
}

export default function eventReducer(state = initialState, { type, paylod }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, paylod],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== paylod.id), paylod],
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== paylod)],
      };

    default:
      return state;
  }
}