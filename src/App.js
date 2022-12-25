import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import login from './login-bg.png'
import swal from 'sweetalert'
import React,{useState} from 'react'

function App() {

  const [user,setUser] =useState('')
  const [pass,setPass]=useState('')

  const handleValidate =(e)=>{
    e.preventDefault();
    if(user==='react123@gmail.com' && pass===123456)
    swal('Login successful','Welcome React','success');
    if(user==='arubr09@gmail.com' && pass==="aru@9900")
    swal('Login successful','Welcome Aravind','success')
    else
    swal('Invalid credentials','Try to check your credentials again','error')
  }
  return (
    <div className="App-header">
     <h1>Authentication Portal</h1>
     <br/>
     <div className='row'>
      <div className='col-md-6'>
      <img  className='float-end' src={login}  width="450" />
      </div>
      <div className='col-md-6 my-auto bg-dark p-4 rounded'>
      <form onSubmit={handleValidate}>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" value={user} className="form-control" placeholder='Enter email' onChange={(e)=>setUser(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" value={pass} className="form-control" placeholder='Enter password' onChange={(e)=>setPass(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>

     </div>
    </div>
  );
}

export default App;
