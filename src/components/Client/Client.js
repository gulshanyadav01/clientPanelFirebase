import React, { Component } from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom"
import { compose } from "redux"; 
import { connect } from "react-redux"; 
import {firestoreConnect} from "react-redux-firebase"; 
import PropTypes from 'prop-types'
import Spinner from "../Layout/Spinner"



class Client extends Component {
    state = {
        totalOwed: null
    }

    static getDerivedStateFromProps(props, state){
        const {clients} = props;

        if(clients){
            // add balance d
            const total = clients.reduce((total, client) => {
                return total + parseFloat(client.balance.toString());


            },0);
            return{
                totalOwed:total
            }
        }
        return null;
    }

    render() {
        let count = 1; 
        const {clients} = this.props;
        const {totalOwed} = this.state;

        if(clients){
            return (
                <div className = "ml-20">
                <div className = "flex justify-between">
                <div>
                    <PeopleAltIcon style = {{width:"50px", height:"40px"}} />
                </div>
                <div className = "text-blue-600 font-bold">
                    <h5 >Total owed ${totalOwed.toFixed(2)}</h5>
                </div>
                </div>
                <div> 
                    
<table class="shadow-xl rounded   w-full">
  <tr>
    <th class="bg-blue-100 border  text-left px-8 py-4">NAME</th>
    <th class="bg-blue-100 border  text-left px-8 py-4">EMAIL</th>
    <th class="bg-blue-100 border  text-left px-8 py-4">PHONE</th>
  </tr>
  {
      clients.map(client =>{
          count++; 
          return(
              <>
              <tr key = {client.id}  class =  {count%2 ===0 ? "bg-gray-200 border text-left px-8 py-4" : null } >
      
    <td class=" border font-bold px-8 py-4">{client.firstName.toLocaleUpperCase()} {client.lastName.toLocaleUpperCase()}</td>
    <td class=" border font-bold px-8  py-4">{client.email}</td>
    <td class=" border font-bold px-8 py-4">{client.balance}</td>
    <td><Link to = {`/client/detail/${client.id}`} className = "bg-gray-300 px-2 py-1 shadow rounded hover:bg-blue-600 hover:text-white hover: font-bold"><ArrowForwardIcon className = " w-1/2 h-1/2 text-black-500 bg-yellow-400 rounded-xl"/> Detail</Link></td>
    </tr>
              </>
          )
      }
      
    )
  }
</table>
                </div>
                </div>
            )

        }
        else{
            return <Spinner/>
        }
        
    }
}

Client.propsTypes = {
    firestore: PropTypes.object.isRequired,
    clients: PropTypes.arrayt
}

export default compose(
    firestoreConnect([{collection:"clients"}]),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients
    }))
)(Client);