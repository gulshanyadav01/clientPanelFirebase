import React, {Component } from "react"; 
// import { compose } from "redux"; 
// import { connect } from "react-redux";
import { firebaseConnect} from "react-redux-firebase";


class Login extends Component {
    state = {
        email:"",
        password:""
    }
    onChange = (e) => { 
        this.setState({[e.target.name]: e.target.value})

    }

    onSubmit = (e) => { 
        e.preventDefault();
        const { email, password } = this.state;
        const { firebase } = this.props; 
        console.log(this.state);

        firebase.login({
            email,
            password
        }).catch(err => alert("invalid login credentials"));
        this.props.history.push("/");
    }

    render() {
        return (
            <div className = "w-52 rounded h-48 bg-blue-300 m-auto">
                <form className = "mt-12 ml-2" onSubmit = {this.onSubmit}>
                    <label htmlFor = "email">Email</label>
                    <input
                        type = "email"
                        name = "email"
                        value ={this.state.email}
                        onChange = {this.onChange}
                        />
                    <label htmlFor = "password">password</label>
                    <input 
                        type = "password"
                        name = "password"
                        value ={this.state.password}
                        onChange = {this.onChange}
                        /><br/>
                    <input className = "m-2" type  = "submit" value = "login"/>
                </form>
            </div>
        )
    }
}


export default firebaseConnect()(Login);
