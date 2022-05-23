import { useState } from 'react';
import Axios from 'axios';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus,setLogin] = useState("");
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    })
    .then((response)=>{
        console.log(response)
        if(response.data === '"Wrong Username/Password"'){
          setLogin(response.data);
        } else{
          setLogin(response.data[0])
          localStorage.setItem("auth", true)
          localStorage.setItem("username", response.data[0].uname)
          // console.log(response.data)
          window.location="/";
        }
    });
  }
  
  // console.log("This is my status"+loginStatus.username);


  return (
    <section className="vh-80">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX-2">Username</label>
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }} />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
                </div>
                <button className="btn btn-danger btn-lg btn-block" type="submit"
                onClick={login}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;