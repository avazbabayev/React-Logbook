export function tripreducer (state = {
    trip :   []
} , action) {
    switch (action.type){
        case "CREATE_TRIP":
            return{trip:[...state.trip, ...action.payload]}
            break;
        case "GET_TRIP":
            return{...state,trip:[...state.trip]}
            break;
        case "UPDATE_TRIP":
            const tripforedit1 = [...state.trip];
            var id = tripforedit1.findIndex(function (trip) {
                return trip.id === action.payload.id;
            });
            var newbook = {...tripforedit1[id],signin:action.payload.signin}
            return {trip:[...tripforedit1.slice(0,id),newbook, ...tripforedit1.slice(id + 1)]}
    }
    return state;
}