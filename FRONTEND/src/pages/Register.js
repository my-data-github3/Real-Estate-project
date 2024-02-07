import axios from "axios";
import { toast } from 'react-toastify';
import { useState } from "react";
import { API } from "../config";
//import axios from "axios";
export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [adhar, setAdhar] = useState("");

    const handleSubmit = async (e) => {
   // debugger;
           
            const url = "http://localhost:8080/user/register";
            if (email.length === 0) {
                toast.error('Please enter email id!')
              } else if (password.length === 0) {
                toast.erro('Please enter password!')
            } else if (name.length === 0) {
                toast.erro('Please enter name!')
            
              } else if (roles.length === 0) {
                toast.error('Please select role!')
              } else if (adhar.length === 0) {
                toast.error('Please enter aadhar!')
              } else {
            axios.post(url, { email, password, name, mobile, adhar });
              }
        
    }
    // const AddRecord=()=>{
    //     const url="http://localhost:8080/user/register";
    //     axios.post(url).then((result)=>{

    //         }
    //     )
    // }

    return (

        <div>
            <h1 className="display-1 bg-primary text-light p-5">Register</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <form >

                            <input type="text" placeholder="Enter your name" className="form-control" required autoFocus value={name} onChange={e => setName(e.target.value)} />

                            <input type="text" placeholder="Enter your email" className="form-control" required autoFocus value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder="Enter your Mobile" className="form-control" required autoFocus value={mobile} onChange={e => setMobile(e.target.value)} />
                            <input type="text" placeholder="Enter your Adhar-Number" className="form-control" required autoFocus value={adhar} onChange={e => setAdhar(e.target.value)} />
                            <select name="Role" id="roll" className="form-control">
                                <option value="Admin">Admin</option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>

                            </select>




                            <input type="text" placeholder="Enter your password" className="form-control mb-4" required autoFocus value={password} onChange={e => setPassword(e.target.value)} />
                            <button className="btn btn-primary col-12 mb-4" onClick={handleSubmit}>Register</button>

                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}



