export function loginred (state = {
    login : []
} , action) {
    switch (action.type){
            case "SET_LOGIN":
            return{login:[...state.login, ...action.payload]}
            break;
        case "GET_LOGIN":
            return{...state,login:[...state.login]}
            break;

         }

    return state;
}