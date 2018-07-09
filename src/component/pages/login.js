import React from "react"
import{Form,FormControl,FormGroup,ControlLabel,Button} from "react-bootstrap"
import {} from "react-dom"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {setLogin} from "../../actions/booksaction";
class Login extends React.Component{
    handleSubmit(){
        const login = [{
            username:document.getElementById("username").value,
            password:document.getElementById("password").value
        }]
        this.props.setLogin(login);
    }
    render(){
        return(
            <Form>
                <br/>
                <FormGroup>
                    <ControlLabel>username</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder ="username"
                        ref="username"
                        id ="username"
                    />
                    <ControlLabel>password</ControlLabel>
                    <FormControl
                        type="password"
                        placeholder ="password"
                        ref="password"
                        id ="password"
                    />
                    <Button onClick={(e) => this.handleSubmit(e)} bsStyle = "primary">Login</Button>
                </FormGroup>
                <br/>

            </Form>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setLogin},dispatch)
}


export default connect(null,mapDispatchToProps)(Login)