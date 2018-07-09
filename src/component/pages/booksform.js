import React from "react"
import{Form,FormControl,FormGroup,ControlLabel,Button} from "react-bootstrap"
import {postBooks} from "../../actions/booksaction"
import {} from "react-dom"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

class Bookform extends React.Component{

    handleSubmit(){
        window.alert("as")
        const book = [{
            title:document.getElementById("title").value,
            description:document.getElementById("description").value,
            price:document.getElementById("price").value,
        }]
        this.props.postBooks(book);
    }
    render(){
        return(
            <Form>
                <br/>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                        type="text"
                        placeholder ="Title"
                        ref="title"
                        id ="title"
                        />
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="number"
                            placeholder ="Price"
                            ref="price"
                            id ="price"
                        />
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder ="Description"
                            ref="description"
                            id ="description"
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
   return bindActionCreators({postBooks},dispatch)
}


export default connect(null,mapDispatchToProps)(Bookform)