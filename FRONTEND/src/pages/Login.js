import { useState } from "react"
export default function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    

    // const handleSubmit=async(e)=>{
    //     try{

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    return(
 
        <div>
            <h1 className="display-1 bg-primary text-light p-5">Login</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        {/* <form onSubmit={handleSubmit}> */}
                        <form action="http://localhost:8080/login" method="post">
                        

                            <input type="text" placeholder="Enter your email" className="form-control" required autoFocus value={email} onChange={e=>setEmail(e.target.value)}/>
       




                            <input type="text" placeholder="Enter your password" className="form-control mb-4" required autoFocus value={password} onChange={e=>setPassword(e.target.value)}/>
                            <button className="btn btn-primary col-12 mb-4">Login</button>

                        </form>
                    </div>
            

                </div>
            </div>
        </div>
    )
}