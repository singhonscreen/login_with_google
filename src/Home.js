import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import  {ClientId}  from './Client_Id';
import history from './history'

function Home() {
  const [state, setState] = useState(false)
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)

const successResponseGoogle = (response)=>{
  setState2(true) 
}
const failiureResponseGoogle = (err)=>{
console.log("Credentials are not right")
}
console.log(history)
const HandleChange = (key, e)=>{
  if(key === "manager"){

    setState(true)
    
  }else{
    setState(false)
  }
  if(key === "hr"){

    setState1(true)
  }else{
    setState1(false)
  }
}

  return (
    <div className="App">
    <h1>Sign in</h1>
    <form action="">
    <label>
    <input type="checkbox" name="name" id="1" value="same" onChange={(e) => HandleChange("manager",e)} checked={state}/>
    Manager
    </label>
    <label>
    <input type="checkbox" name="name" id="1" value="same" onChange={(e) => HandleChange("hr",e)} checked={state1} />
    HR
    </label>
    </form>
    <GoogleLogin className="google_btn"
    clientId = {ClientId}
    buttonText="Login with Google"
    onSuccess={successResponseGoogle}
    onFailure={failiureResponseGoogle}
    cookiePolicy={'single_host_origin'}
  />

  {state2 && state ? history.push('/manager/home') : state2 && state1 ? history.push('/hr/home'): null }
  </div>
  );
}

export default Home;