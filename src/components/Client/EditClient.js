import React, { Component } from 'react'
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import { Link } from "react-router-dom"
import { compose } from "redux"; 
import { connect } from "react-redux"; 
import {firestoreConnect} from "react-redux-firebase"; 
// import PropTypes from 'prop-types'
import Spinner from "../Layout/Spinner"

// import React, { Component } from 'react'

class EditClient extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.client)
        // this.state = {
        //     firstName:this.props.client.firstName,
        //     lastName: this.props.client.lastName,
        //     email: this.props.client.email,
        //     phone: this.props.client.phone,
        //     balance: this.props.client.balance
        // }
        // console.log(this.state)

        // // create refs
        this.firstNameInput = React.createRef(); 
        this.lastNameInput = React.createRef(); 
        this.emailInput = React.createRef(); 
        this.phoneInput = React.createRef(); 
        this.balanceInput = React.createRef();

    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    

    onSubmit  = (e) => { 
        e.preventDefault(); 

        const {client, firestore } = this.props; 
        // const {firstName, lastName, email, phone, balance} = this.state;
        // console.log(this.state)
        
        // updated client 
        // console.log(this.firstNameInput.current.value);
        const updClient = {
            firstName:this.firstNameInput.current.value,
            lastName:this.lastNameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value,
            balance:this.balanceInput.current.value
        }

        // // // update in firebase 

        firestore.update({collection:"clients", doc:client.id}, updClient)
        .then(() =>{ 
            this.props.history.push("/");
        }) 

    }
    
    render() {
        const { client } = this.props; 
        if(client){
            return (
                <div className = "w-52 rounded h-72 bg-blue-300 m-auto">
                <form className = "m-2" onSubmit = { this.onSubmit}>
                    <label htmlFor = "firstName">FirstName:</label>
                    <input 
                    type = "text"
                    // onChange = {this.onChange}
                    name = "firstName"
                    ref = {this.firstNameInput}
                    defaultValue  = {client.firstName}
                    /><br/>
                     <label htmlFor = "lastName">lastName:</label>
                    <input 
                    type = "text"
                    // onChange = {this.onChange}
                    name = "lastName"
                    ref = {this.lastNameInput}
                    defaultValue  = {client.lastName}
                    /><br/>
                     <label htmlFor = "email">EMAIL</label>
                    <input 
                    type = "email"
                    // onChange = {this.onChange}
                    name = "email"
                    ref = {this.emailInput}
                    defaultValue  = {client.email}
                    /><br/>
    
                     <label htmlFor = "phone">PHONE</label>
                    <input 
                    type = "text"
                    // onChange = {this.onChange}
                    name = "phone"
                    ref = {this.phoneInput}
                    defaultValue  = {client.phone}
                    />
                    <br/>
    
                     <label htmlFor = "balance">Balance</label>
                    <input 
                    type = "text"
                    // onChange = {this.onChange}
                    ref = {this.balanceInput}
                    name = "balance"
                
                    defaultValue  = {client.balance}
                    />
                    <br/>
                    <input className = "mt-2 px-2 py-1 shadow-lg rounded bg-blue-600 font-bold hover:bg-blue-800" type = "submit" value = "submit"/>
    
                </form>
                
                </div>
            )
        }
        else{
            return(
                <div>
                    <Spinner/>
                </div>
            )
        }

    }
}
export default compose(
    firestoreConnect(props => [
        {collection:"clients",storeAs:"client", doc:props.match.params.id }
    ]),
    connect(({firestore: {ordered}}, props) => ({
        client: ordered.client && ordered.client[0]
    }))
)(EditClient);