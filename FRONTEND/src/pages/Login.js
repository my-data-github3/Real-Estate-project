import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom";
export default function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[role,setRole]=useState("");
    const navigate = useNavigate();
    

    // const handleSubmit=async(e)=>{
    //     try{

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
const  Login=()=>{
    debugger;
    const url = "http://localhost:8080/user/login";
    axios.post(url, { email, password,role })
    .then((response)=>{
        alert("Login Success");
        if(response.data.role==='admin'){
            navigate('/Admin');
        }else if(response.data.role==='buyer'){
            navigate('/Buyer');
        }
        else(response.data.role==='seller')
            navigate('/Seller');
        
        
        
    })
        .catch((error)=>{
            console.log('error')
            console.log(error)

        })



}

    return(
 
        <div>
            <h1 className="display-1 bg-primary text-light p-5">Login</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <form onSubmit={Login}> 
                        
                        

                            <input type="text" placeholder="Enter your email" className="form-control" required autoFocus value={email} onChange={e=>setEmail(e.target.value)}/>
       




                            <input type="text" placeholder="Enter your password" className="form-control mb-4" required autoFocus value={password} onChange={e=>setPassword(e.target.value)}/>
                            <button className="btn btn-primary col-12 mb-4">Login</button>

                        </form>
                        <ToastContainer/>
                    </div>
            

                </div>
            </div>
        </div>
    )
}