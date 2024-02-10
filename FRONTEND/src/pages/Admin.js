import { useAuth } from "../context/auth";
export default function Admin(){
    const [auth,setAuth]=useAuth();
    return(
        <div>
            <h1 className="display-1 bg-primary text-light p-5">Admin</h1>
        
        </div>
    )
}