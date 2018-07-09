import axios from "axios"
export function getTrip() {
    return {
        type:"GET_TRIP"
    }

}
export function setTrip(trip){
    return {
        type:"CREATE_TRIP",
        payload : trip
    }
}