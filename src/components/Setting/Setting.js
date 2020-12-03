import React, { Component } from 'react'
import {Link} from "react-router-dom"; 
import { connect } from "react-redux"; 
import  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit } from "../../Actions/SettingAction"



class Settings extends Component {


    disableBalanceOnAddChange = () => { 
        const { setDisableBalanceOnAdd } = this.props; 
        setDisableBalanceOnAdd();
    }

    disableBalanceOnEditChange = () => { 
        const { setDisableBalanceOnEdit} = this.props; 
        setDisableBalanceOnEdit();
    }

    allowRegistrationChange = () => { 
        const { setAllowRegistration} = this.props; 
        setAllowRegistration();
    }

    
    render() {
        const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration } = this.props;
        return (
            <div className = "m-10">
                <div className = "w-1/2 bg-blue-100">
                <Link to  = "/">
                Dashboard
                </Link>
                </div>
                <div className = "w-72 h-64 mt-2 rounded shadow-xl flex flex-wrap bg-red-400 ">
                <div className = "w-full pl-2 h-8 font-bold bg-gray-300 rounded ">
                Edit Settings 
                </div>
                <div className = "p-3">
                <label>Allow Registration </label>
                <input
                type = "checkbox"
                name = "allowRegistration"
                checked = {!! allowRegistration}
                onChange = { this.allowRegistrationChange }
                />
                </div>
                <div className = "p-3">
                <label>Disable Balance On Add </label>
                <input 
                type = "checkbox"
                name = "disableBalanceOnAdd"
                checked = {!!disableBalanceOnAdd}
                onChange = { this.disableBalanceOnAddChange}
                />
                </div>
                <div className = "p-3">
                <label> Disable Balance on Edit</label>
                <input 
                type = "checkbox"
                name = "disableBalanceOnEdit"
                checked = {!!disableBalanceOnEdit}
                onChange = { this.disableBalanceOnEditChange}
                />
                </div>

                </div>
            </div>
           
        )
    }
}


export default connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings

}),{setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit})(Settings); 