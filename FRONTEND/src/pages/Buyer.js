import axios from "axios";
//import { toast } from 'react-toastify';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



export default function Register() {
  
    const Propertycard=(props)=>{
    
        return (
          <div className='container'>
            <img  width={300} height={300} src={props.url} alt="logo"/>
      <h3>{props.propertyName}</h3>
      <h4> {props.propertyPrice}</h4>
     
      <h4>{props.area}</h4>
          </div>
        )
      }
       
    
        return (

            <div><ToastContainer />
                <h1 className="display-1 bg-primary text-light p-5">Buyer</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-5"> <h3>Real-state & Homes for sales</h3></div>
                           
                            <center>   <table>
                                <tr><td><Propertycard propertyName="Bunglow" propertyPrice="1.3cr" url="https://5.imimg.com/data5/PI/XV/MJ/ANDROID-84155764/product-jpeg-500x500.jpg" /></td>
                                <td><Propertycard propertyName="Bunglow" propertyPrice="1.3cr" url="https://media.istockphoto.com/id/174860264/photo/small-house.jpg?s=612x612&w=0&k=20&c=UiB9fSE4FQfFMLxerWhSAG91QmYCc3LqGSf0gYKgJKI=" /></td>
                                <td><Propertycard propertyName="Bunglow" propertyPrice="6cr" url="https://media.istockphoto.com/id/1269776313/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=iNaSdrxJt7H37rjQZumXYScrmSTRm2fDJrqZzxpDL_k=" /></td>
                                <td><Propertycard propertyName="Bunglow" propertyPrice="6cr" url="https://media.istockphoto.com/id/155396123/photo/ranthambhore-np-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=LnWdEYBvIvLVURZUdUJuRlKM5pSl-JpR8M_uxNF_71E=" /></td></tr>
                            </table>
                            </center>

                            
                        


                    </div>
                </div>
            </div>
        )
    
}