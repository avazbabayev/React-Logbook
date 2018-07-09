import React from 'react'
import {Well,Col,Row,Button} from 'react-bootstrap'

class Bookitem extends React.Component{
    render(){
        return(
        <Well>
        <Row>
            <Col xs={12} >
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <h6>{this.props.price} eur.</h6>
                <Button bsStyle = "primary">Buy</Button>
            </Col>
            </Row>
        </Well>
    )
    }
}

export default Bookitem;