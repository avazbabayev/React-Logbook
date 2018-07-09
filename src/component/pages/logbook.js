import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {getTrip,setTrip} from "../../actions/tripaction"
import {Grid,Row,Button,Col} from "react-bootstrap"
import Login from "./login"
import Addtip from "./addTrip"
import Bookitem from "./bookitem"
import Bookform from "./booksform"
import {getBooks, getLogin} from "../../actions/booksaction";
import axios from "axios/index";
class Logbook extends React.Component{


    handleSignin =()=> {
this.trip.setState={signin: 'signed in'}
    }
    render(){

        const tripdata = this.props.trip.map(function (arr,index) {
            return(
                <tr key={index}>
                    <td align="center">{arr.boat}</td>
                    <td align="center">{arr.destination}</td>
                    <td align="center">{arr.arrival}</td>
                    <td align="center">{arr.departure}</td>
                    <td align="center">{arr.signin}</td>
                    <td align="center"><Button onClick={(e) => this.handleSignin(e)} > Sign In</Button><Button>Start</Button></td>
                </tr>
            )
        }.bind(this))


        return (
            <div style={{marginTop:'15px'}}>
                <Grid>
                    <Row style ={{marginTop:'15px'}}>
                        <Col xs={12} sm={12} md={8} mdOffset={2} >
                        <div className="table-responsive">
                            <table className="table-sm  table-bordered"  id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th align="center">Boat</th>
                                    <th align="center">Destination</th>
                                    <th align="center">Departure</th>
                                    <th align="center">Arrival</th>
                                    <th align="center">Status</th>
                                    <th align="center">Action</th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <th align="center">Boat</th>
                                    <th align="center">Destination</th>
                                    <th align="center">Departure</th>
                                    <th align="center">Arrival</th>
                                    <th align="center">Status</th>
                                    <th align="center">Action</th>
                                </tr>
                                </tfoot>
                                <tbody id="tablebody">
                                {tripdata}
                                </tbody>
                            </table>

                        </div>
                        </Col>
                    </Row>
               <br></br>
                    <Row>
                        <Col xs = {6} md={8} mdOffset={2}>
                        <Addtip/>
                        </Col>
                    </Row>

                </Grid>
            </div>)
    }
}
function mapStateToProps(state) {
    return{
        trip:state.trip.trip
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getTrip},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Logbook);