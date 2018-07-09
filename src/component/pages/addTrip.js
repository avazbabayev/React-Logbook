import React from 'react';
import {connect} from 'react-redux'
import {findDOMNode} from "react-dom"
import {bindActionCreators} from "redux"
import {setTrip} from "../../actions/tripaction"
import {Grid,Row,Form,FormGroup,ControlLabel,FormControl,Button,Col} from "react-bootstrap"
import axios from "axios"

class Addtrip extends React.Component{

    handleSubmit() {
        const trip = [{
            boat:document.getElementById("boat").value,
            destination:document.getElementById("destination").value,
            departure:document.getElementById("departure").value,
            arrival:document.getElementById("arrival").value,
            signin:"Not Started"
        }]
        this.props.setTrip(trip);
        axios.post('/posttrip', trip
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render(){

        return (

            <Form>
                <br/>
                <FormGroup>
                    <ControlLabel>Boat</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder ="Boat"
                        id ="boat"
                    />
                    <ControlLabel>Destination</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder ="Destination"
                        id ="destination"
                    />
                    <ControlLabel>Departure</ControlLabel>
                    <FormControl
                        type="date"
                        placeholder ="Departure"
                        id ="departure"
                    />
                    <ControlLabel>Arrival</ControlLabel>
                    <FormControl
                        type="date"
                        placeholder ="Arrival"
                        id ="arrival"
                    />
                    <br/>
                    <Button onClick={(e) => this.handleSubmit(e)} bsStyle = "primary">Save</Button>
                </FormGroup>
                <br/>
            </Form>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setTrip},dispatch)
}


export default connect(null,mapDispatchToProps)(Addtrip)