import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from "../Layout/Spinner"
import { compose } from "redux"; 
import { connect } from "react-redux"; 
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from "react-router-dom"
import CreateIcon from '@material-ui/icons/Create';

class DetailClient extends Component {
    state = {
        showBalanceUpdate: false,
        balanceUpdateAmount:""
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    // update the balance 
    balanceSubmit = (e) => {
        e.preventDefault(); 
        const { client, firestore}  = this.props; 
        const { balanceUpdateAmount} = this.state;

        const clientUpdate = {
            balance:parseFloat(balanceUpdateAmount)
        }

        // update in firestore

        firestore.update({collection:"clients", doc: client.id}, clientUpdate)

    }

    // delete the client 
    onDeleteClick = () => {
        // console.log("hello gulshan");
        const { client, firestore} = this.props;
        
        firestore.delete({collection:"clients", doc: client.id})
        .then(() => this.props.history.push("/"));
    }


    render() {
        const {client} = this.props;
        const {showBalanceUpdate, balanceUpdateAmount}  = this.state;

        let balanceForm = "";
        //
        if(showBalanceUpdate){
            balanceForm = (
                <form onSubmit = {this.balanceSubmit} className = "w-8 ml-44 h-auto ">
                    <input
                    className = "inline"
                    type = "text"
                    name = "balanceUpdateAmount"
                    placeholder = "add new balance"
                    value = {balanceUpdateAmount}
                    onChange = {this.onChange} 
                    />
                    <input type  = "submit" value = "update"/>
                </form>
            )

        }
        else{
            balanceForm = null; 
        }
        
        if(client){
            return(
                <div className = " ml-60 mr-60">
                <div className = "flex justify-between">
                    <div>
                    <h1>back to dashboard</h1>
                    </div>
                    <div>
                    <button className = " ml-10 mt-3  "><Link to ="/client/edit/:id" className  = ' rounded-l shadow-xl  px-2 py-1 bg-blue-600 hover:shadow hover:bg-blue-700'>Edit</Link><button onClick = {this.onDeleteClick} className  = ' rounded-r shadow-xl  px-2 py-0.5 bg-red-600 hover:shadow hover:bg-red-800 hover:scale-100' >Delete</button></button>
                    </div>
                </div>
                    <div className = "w-2/3 m-auto">
                       <div className = "w-2/3 h-32 rounded  bg-blue-100">
                       <h1 className = "font-bold p-2 w-full h-8 bg-gray-100 rounded-t-r rounded-t-l ">{client.firstName} {client.lastName}</h1>
                       <div className = "flex">
                       <h3 className = "p-2"> id: {client.id}</h3>
                       <div className = "font-bold ml-4 mt-2 flex ">
                           Balance :<h1 className ={client.balance>0? "text-green-700" :"text-red-500" }>${client.balance}</h1> 
                           <CreateIcon className = "ml-1 text-green-600" onClick = {()=>{this.setState({showBalanceUpdate: !this.state.showBalanceUpdate})}}/>
                           
                       </div>
                       
                       </div>
                       {balanceForm}
                        
                       </div>
                    </div>

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
)(DetailClient);