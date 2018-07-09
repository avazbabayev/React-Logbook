
export function getBooks() {
    return {
        type:"GET_BOOKS"
    }

}
export function postBooks(book){
    return {
        type:"POST_BOOK",
        payload : book
    }
}
export function getLogin() {
    return {
        type:"GET_LOGIN"
    }

}
export function setLogin(login){
    return {
        type:"SET_LOGIN",
        payload : login
    }
}