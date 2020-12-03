import React, { Component } from 'react'
import { firebaseConnect } from 'react-redux-firebase';
import {Link} from "react-router-dom";
import { compose } from "redux"; 
import { connect } from "react-redux"; 
import HomeIcon from '@material-ui/icons/Home';



class AppNavbar extends Component {
    state = {
        isAuthenticated: false
    }

    static getDerivedStateFromProps(props, state) {
        const { auth } = props;
        if(auth.uid){
            return {isAuthenticated:true }
        }
        else{
            return {isAuthenticated: false}
        }

    }
    onLogoutClick = (e) => { 
        e.preventDefault();
        const { firebase } = this.props; 
        firebase.logout();
    }
        
    render() {
        const { isAuthenticated} = this.state;
        return (
            <div className = 'w-full h-12 bg-blue-400 flex items-center justify-around'>
            <div className = "text-white font-bold"> CLIENT PANEL</div>
                <nav className ="flex items-center">
                    <ul>
                    {isAuthenticated ? (<li >
                                    <Link to ="/" className = "ml-1 mr-2 font-bold ">
                                       <HomeIcon/> Dashboard
                                    </Link>
                                    </li>): null}
                        
                    </ul>
                    {isAuthenticated ? (
                        <ul className = "mr-2 ml-2 font-bold underline">
                            <li>
                                {this.props.auth.email}
                            </li>
                        </ul>
                    ): null}
                    {isAuthenticated? (
                        <Link to = "#" onClick = {this.onLogoutClick} className = "px-4 py-1 ml-32 font-bold bg-red-400 rounded shadow-lg hover:bg-red-600">
                            logout
                        </Link>
                    ): null}
                </nav>
            </div>
        )
    }
}


export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(AppNavbar);