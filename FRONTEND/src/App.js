import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Buyer from "./pages/Buyer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AuthProvider } from "./context/auth";
import Main from "./components/nav/Main";
import AccountActivate from "./pages/auths/AccountActivate";
function App() {
  return (
    <BrowserRouter>
    <Main/>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/buyer" element={<Buyer/>}/>
<Route path="/auth/account-activate/:token" element={<AccountActivate/>}/>

    </Routes>
    </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
