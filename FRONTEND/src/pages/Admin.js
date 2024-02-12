import { useAuth } from "../context/auth";
import axios from 'axios';
import { useState, useEffect } from 'react';export default function Admin(){
    const [auth,setAuth]=useAuth();
   
    
    function Admin() {
        const url = "http://localhost:3000/admin";
        const[users,setUsers] = useState([]);
        const [user,setUser] = useState({name: "",email:"",mobile:"",adhar:""})
    
        const FetchRecords = ()=>{ 
            axios.get(url).then((result)=>{
            setUsers(result.data)
            })
        }
        const RemoveRecord = (No)=>{
            console.log(No);
    
            var deleteUrl = url + "/"+No;
            axios.delete(deleteUrl).then((result)=>{
                if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                    FetchRecords();
                }
            })
        }
        
        const OnTextChanged=(args)=>{
            var copyOfUser = {...user};
            copyOfUser[args.target.name]=args.target.value;
            setUser(copyOfUser);
        }
        const AddRecord=()=>{
            axios.post(url,user).then((result)=>{
                if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                    FetchRecords();
                    Reset();
                }
            })
        }
        const EditRecord=(No)=>{
            for (let i = 0; i<users.length; i++) {
                if(users[i].No === No){
                    var userToEdit = {...users[i]};
                    setUser(userToEdit);
                    break;
                }
                
            }
    
          //  setEmp(emps[No-1]);
    
    
            // var empToEdit = {...emps[No-1]};
            //         setEmp(empToEdit);
    
    
    
    
        }
        const UpdateRecord=()=>{
            var updateUrl = url +"/"+user.id;
            axios.put(updateUrl,user).then((result)=>{
                if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                    FetchRecords();
                    Reset();
                }
            })
        }
        const Reset=()=>{
            setUser({name: "",email:"",mobile:"",adhar:""});
        }
        useEffect(()=>{
                     FetchRecords()   
                    },[])
    
        return ( <div className='container'>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>
                                <input type='text' name='No'
                                value={user.No}
                                onChange={OnTextChanged}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type='text' name='name'
                                value={user.name}
                                onChange={OnTextChanged}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type='text' name='Email'
                                value={user.email}
                                onChange={OnTextChanged}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className='btn btn-primary' onClick={AddRecord}>Add Record</button>{" "}
                                <button className='btn btn-success' onClick={UpdateRecord}>Update Record</button>{" "}
                                <button className='btn btn-info' onClick={Reset}>Reset</button>{" "}
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
            <hr></hr>
            <hr></hr>
    
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {  users.map((emp)=>{
                                return (<tr key={emp.No}>
                                    <td>{emp.No}</td>
                                    <td>{emp.Name}</td>
                                    <td>{emp.Address}</td>
                                    <td>
                                        <button className='btn btn-warning' onClick={()=>{
                                            EditRecord(emp.No)
                                        }}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                    <button className='btn btn-danger' onClick={()=>{
                                        RemoveRecord(emp.No)
                                    }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
    
        </div> );
    }


}