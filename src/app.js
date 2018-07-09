import {createStore,applyMiddleware} from 'redux';
import reducers from "./reducers/index"
import React from 'react'
import {render} from 'react-dom'
import Bookslist from './component/pages/bookslist'
import  {Provider} from 'react-redux'
import Login from "./component/pages/login";
import Bookitem from "./component/pages/bookitem";
import Logbook from "./component/pages/logbook"
import Menu from "./component/menu"
import Footer from "./component/footer";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Addtrip from "./component/pages/addTrip"
import thunk from "redux-thunk"
import axios from "axios/index";

const middleware = applyMiddleware(thunk);
const store = createStore(reducers,middleware);

let dbdata;
axios.get("tripdata").then(function (response) {

    dbdata = response.data;
    console.log(dbdata.length)
    for( var i =0;i<dbdata.length;i++){
        console.log(dbdata[i])
        store.dispatch({type:"CREATE_TRIP", payload :[dbdata[i]]
        });
    }
})

const Routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" strict component={Logbook}/>
                    <Route path="/addtrip" exact strict component={Addtrip}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
)
render(Routes, document.getElementById('app')
);