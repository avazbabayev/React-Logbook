export function bookred (state = {
    books : []
} , action) {
    switch (action.type){
        case "INC":
            return state + action.payload;
            break;
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};
            return{books:[...state.books, ...action.payload]}
            break;
           case "GET_BOOKS":
            return{...state,books:[...state.books]}
            break;
        case "DEL_BOOK":
            const bookforedit = [...state.books];
            var id = bookforedit.findIndex(function (book) {
                return book.id === action.payload.id;
            });
            return {books:[...bookforedit.slice(0,id), ...bookforedit.slice(id + 1)]}
        case "UPDATE_BOOK":
            const bookforedit1 = [...state.books];
            var id = bookforedit1.findIndex(function (book) {
                return book.id === action.payload.id;
            });
            var newbook = {...bookforedit1[id],name:action.payload.name}
            return {books:[...bookforedit1.slice(0,id),newbook, ...bookforedit1.slice(id + 1)]}
    }
    return state;
}