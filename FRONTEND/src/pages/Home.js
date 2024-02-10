import { useAuth } from "../context/auth";
export default function Home() {
    const [auth, setAuth] = useAuth();


    const Propertycard=(props)=>{
        return (
          <div className='container'>
            <img className='rest-logo' src='https://5.imimg.com/data5/PI/XV/MJ/ANDROID-84155764/product-jpeg-500x500.jpg' alt="logo"/>
      <h3>{props.propertyName}</h3>
      <h4> {props.propertyPrice}</h4>
     
      <h4>{props.area}</h4>
          </div>
        )
      }
    
    return (
        <div>
            <h1 className="display-1 bg-primary text-light p-5">Home</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        {/* </div> */}

        {/* <div className='body'> */}
            
        <div className='rest-container'>
                <Propertycard propertyName="Bunglow" propertyPrice="1.3cr" time="30 mins" />
                <Propertycard propertyName="Alankar" propertyPrice="1.3cr" time="34 mins" />
                <Propertycard propertyName="Cafe Goodluck" propertyPrice="1.3cr" time="20 mins" />
                <Propertycard propertyName="DownTown" propertyPrice="1.3cr" time="30 mins" />
                <Propertycard propertyName="Ocean cafe" propertyPrice="1.3cr" time="35 mins" />
                <Propertycard propertyName="Pacific" propertyPrice="1.3cr" time="25 mins" />
                <Propertycard propertyName="A.P. Restaurant" propertyPrice="1.3cr" time="50 mins" />
                <Propertycard propertyName="Kha" propertyPrice =" 1.3cr" time="25 mins"/>
                <Propertycard propertyName="Coffee house" propertyPrice="1.3cr" time="30 mins" />





            </div>
        </div>


    )
}



const Header = () => {
    return (<div className='header'>

        <div className='logo-container'>
            <img className='logo' src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000" alt="logo" />
        </div>
        <div className='nav-items'>
            {/* <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
  
          
          
        </ul> */}
        </div>
    </div>)
}
const RestaurantCard = (props) => {
    return (
        <div className='rest-card'>
            <img className='rest-logo' src='https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702166400&semt=ais' alt="logo" />
            <h3>{props.resName}</h3>
            <h4> {props.cusins}</h4>
            <h4>4.8 Stars</h4>
            <h4>{props.time}</h4>
        </div>
    )
}
