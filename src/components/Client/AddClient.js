// import { Add } from '@material-ui/icons';
import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase';
// import { Link } from "react-router-dom"; 


class AddClient extends Component {
    state = {
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        balance:""
    }
    
    onSubmit = async (e) => { 
        e.preventDefault(); 

        const {firstName, lastName, phone, email, balance } = this.state;
        const newClient = {
            firstName, 
            lastName,
            phone,
            email,
            balance
        }
        // console.log(newClient);
        const {firestore, history} = this.props;

       const res = await  firestore.add({collection:"clients"}, newClient);
       if(res){
           history.push("/");
       }



    }
    onChange = (e) => { 
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className = "w-52 rounded h-72 bg-blue-300 m-auto">
            <form className = "m-2" onSubmit = { this.onSubmit}>
                <label htmlFor = "firstName">FirstName:</label>
                <input 
                type = "text"
                name = "firstName"
                onChange = {this.onChange}
                value  = {this.state.firstName}
                /><br/>
                 <label htmlFor = "lastName">lastName:</label>
                <input 
                type = "text"
                name = "lastName"
                onChange = {this.onChange}
                value  = {this.state.lastName}
                /><br/>
                 <label htmlFor = "email">EMAIL</label>
                <input 
                type = "email"
                name = "email"
                onChange = {this.onChange}
                value  = {this.state.email}
                /><br/>

                 <label htmlFor = "phone">PHONE</label>
                <input 
                type = "text"
                name = "phone"
                onChange = {this.onChange}
                value  = {this.state.phone}
                />
                <br/>

                 <label htmlFor = "balance">Balance</label>
                <input 
                type = "text"
                name = "balance"
                onChange = {this.onChange}
                value  = {this.state.balance}
                />
                <br/>
                <input className = "mt-2 px-2 py-1 shadow-lg rounded bg-blue-600 font-bold hover:bg-blue-800" type = "submit" value = "submit"/>

            </form>
            
            </div>
        )
    }
}
export default  firestoreConnect()(AddClient);