import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { decode } from 'punycode';

class Profile extends Component {
    
        
                
            
        
       
    

    
state = {
    users: [

    ]
}
    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
      
    this.setState({

    
        users: [{
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            mobile_number: decoded.mobile_number,
            dob: decoded.dob

        }
    ]} 
    )
        
    }

     handleDelete = (email) => {
    
    
     }

      handleEdit = (user,index) => {
        let {users}= {...this.state}
        user.first_name ="pkp"
        users.splice(index,1,user)
        this.setState({
            users:users
        })
        console.log(users);
      }
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome  </h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                           
                            <tr>
                                <td>First Name</td>
                               
                                <td>Last Name</td>
                                
                                <td>Email</td>
                                
                                <td>Mobile</td>
                                
                                <td>Dob</td>
                                
                           <td>Edit</td>
                           <td>Delete</td>
                            </tr>
                            
                            {
                                this.state.users.map((user,index)=>{
                                    return (
                                        <tr key={index}>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile_number}</td>
                                        <td>{user.dob}</td>
                                        <td> <button onClick={() => this.handleEdit(user,index)} className="btn btn-info">
                                            Edit
                                            </button></td>
                                            <td> <button onClick={() => this.handleDelete(user,index)} className="btn btn-info">
                                            Delete
                                            </button></td>
                                        </tr>
                                        
                                    )
                                } ) 
                            }
                            
                            
                            <tr>
                           
                            </tr>
                            <tr>
                                
                            </tr>
                            <tr>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile