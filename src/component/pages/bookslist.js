import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import{getBooks,getLogin} from "../../actions/booksaction"
import {Grid,Row,Button,Col} from "react-bootstrap"
import Login from "./login"
import Bookitem from "./bookitem"
import Bookform from "./booksform"
class Bookslist extends React.Component{
    render(){
        function componentDidMount() {
            return this.props.getBooks

        }

        const booklist = this.props.books.map(function (arr) {
            return(
                <Col xs={12} sm={6} md={4} >
                    <Bookitem
                        id ={arr.id}
                        title = {arr.title}
                        description = {arr.description}
                        price = {arr.price}
                    />
                </Col>
            )
        })
        const logindata = this.props.login.map(function (arr) {
            return(
                <Col xs={12} sm={6} md={4} >
                    {arr.username}
                </Col>
            )
        })

        return (
            <div style={{marginTop:'15px'}}>
                <Grid>
                    <Row>
                    <Col className="bg-light" md={6}  style = {{border:'1px solid black'}} >

                            <Bookform/>
                    </Col>
                    </Row>
                    <Row style ={{marginTop:'15px'}}>
                        {booklist}
                    </Row>
                    <Row style ={{marginTop:'15px'}}>
                        {logindata}
                    </Row>
                    <Row style ={{marginTop:'15px'}}>
                    <Login/>
                </Row>
                </Grid>
        </div>)
    }
}
function mapStateToProps(state) {
    return{
        books:state.books.books,
        login:state.login.login
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBooks:getBooks,getLogin:getLogin},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookslist);