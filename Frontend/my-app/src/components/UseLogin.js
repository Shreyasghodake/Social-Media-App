import axios from "axios"
import { useState } from "react"

function UserLogin() {
    
    // const [id,setId] = useState('')
    // const [name, setName] = useState('')
    // const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login(event) {
        event.preventDefault();
        try
        {
            await axios.post("http://localhost:8085/api/user/login",
            {
                // name:name,
                // username:username,
                email:email,
                password:password
            }).then((res)=>{
                console.log(res)
                if(res.data.status === true) {
                    alert("login Successful")
                }
                else {
                    alert(res.data.message)
                }
            })

            // alert("Registration successful")

            // setName('')
            // setUsername('')
            setEmail('')
            setPassword('')
        }
        catch(error) {
            alert("Registration failed")
        }
    }

    return <div className="d-flex align-items-center justify-content-center">
    <form Style="width:350px; padding-top:100px;">
    <div class="form-group">
      <label for="name">email</label>
      <input type="email" class="form-control" placeholder="Enter email"
      value = {email}
      onChange = {(event) => 
        {
            setEmail(event.target.value);
        }}
      />
    </div>
    <div class="form-group" Style="padding-top:10px;">
      <label for="password">password</label>
      <input type="password" class="form-control" placeholder="Enter password"
      value = {password}  
      onChange = {(event) => 
        {
            setPassword(event.target.value);
        }}
      />
    </div>
    <div Style = "padding-top:10px;">
    <button type="Login" class="btn btn-primary" onClick={login}>Login</button>
    </div>    
    </form>
    </div>
}

export default UserLogin