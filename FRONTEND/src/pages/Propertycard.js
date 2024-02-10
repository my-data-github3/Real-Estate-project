const Propertycard=(props)=>{
    return (
      <div className='conatiner'>
        <img className='rest-logo' src='https://5.imimg.com/data5/PI/XV/MJ/ANDROID-84155764/product-jpeg-500x500.jpg' alt="logo"/>
  <h3>{props.propertyName}</h3>
  <h4> {props.propertyPrice}</h4>
 
  <h4>{props.area}</h4>
      </div>
    )
  }
  export default Propertycard;