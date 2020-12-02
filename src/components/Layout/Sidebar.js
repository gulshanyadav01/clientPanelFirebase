import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from "react-router-dom"


const Sidebar = () =>  {
    return (
        <div>
            <Link to = "/client/add"><button className = " w ml-10 mt-1 rounded-lg shadow bg-blue-400 font-bold  hover:bg-green-600 hover:scale-50" >Add <AddCircleIcon className = "text-white bg-blue-600 rounded-lg hover:bg-blue-500 hover:scale-50" /></button></Link><br/>
            {/* <button className = " ml-10 mt-3"><Link to ="/dashboard" className  = ' rounded-l shadow-xl  px-2 py-1 bg-blue-600 hover:shadow hover:bg-blue-700'>Edit</Link><Link to = "/dashboard" className  = '  shadow-xl  px-2 py-1 bg-red-600 hover:shadow hover:bg-red-800 hover:scale-100' >Delete</Link><Link to = "/dashboard" className  = ' rounded-r shadow-xl  px-2 py-1 bg-blue-600 hover:shadow hover:bg-yellow-800 hover:scale-100' >Delete</Link></button> */}
        </div>
    )
}
export default Sidebar; 