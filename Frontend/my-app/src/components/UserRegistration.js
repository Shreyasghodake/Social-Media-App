import axios from "axios"
import { useState } from "react"

function UserRegistration() {
    
    // const [id,setId] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function save(event) {
        event.preventDefault();
        try
        {
            await axios.post("http://localhost:8085/api/user/save",
            {
                name:name,
                username:username,
                email:email,
                password:password
            })

            alert("Registration successful")

            setName('')
            setUsername('')
            setEmail('')
            setPassword('')
        }
        catch(error) {
            alert("Registration failed")
        }
    }

    return <div className="Container mt-4 d-flex align-items-center justify-content-center">
    <form>
    <div class="form-group" Style="width:300px;">
      <label for="name">Name</label>
      <input type="text" class="form-control " placeholder="Enter name"
      value = {name}
      onChange = {(event) => 
        {
            setName(event.target.value);
        }}
      />
    </div>
    <div class="form-group">
      <label for="username">username</label>
      <input type="text" class="form-control" placeholder="Enter username"
      value = {username}
      onChange = {(event) => 
        {
            setUsername(event.target.value);
        }}
      />
    </div>
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
    <div class="form-group">
      <label for="password">password</label>
      <input type="password" class="form-control" placeholder="Enter password"
      value = {password}
      onChange = {(event) => 
        {
            setPassword(event.target.value);
        }}
      />
    </div>
    <button type="submit" class="btn btn-primary" onClick={save}>Register</button>
        </form>
    </div>
}

export default UserRegistration