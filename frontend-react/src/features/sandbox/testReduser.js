
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER= 'DECREMENT_COUNTER';

export function increment(amount){
    return{
        type:INCREMENT_COUNTER,
        paylod:amount
    }
}

export function decrement(amount){
    return{
        type:DECREMENT_COUNTER,
        paylod:amount
    }
}

const initialState = {
    data: 42
}

export default function testReducer(state=initialState,{type,paylod}){
    switch (type){
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + paylod
            }
        
        case DECREMENT_COUNTER:
            return{
                ...state,
                data: state.data - paylod
            }
        default:
            return state
    }
}