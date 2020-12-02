import React, { Component } from 'react'
import {Link} from "react-router-dom";


class AppNavbar extends Component {
    render() {
        return (
            <div className = 'w-full h-12 bg-blue-400 flex justify-around'>
            <div className = "text-white"> CLIENT PANEL</div>
                <nav>
                    <ul>
                        <li>
                            <Link to ="/">
                                dashboard
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default AppNavbar;