import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return <div>
    <Link to='/'>Go to Home Page</Link>
    <Link to='/login'>Go to Login Page</Link>
    <Link to='/register'>Go to Register Page</Link>
  </div>
}

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate()

  const handleChange = (name, value) => {
    setUser((pre) => ({ ...pre, [name]: value }))
  }

  const handleLogin = () => {
    if (user.username === "admin" && user.password === "admin") {
      navigate("/register")
    } else {
      alert("Invalid Credentials")
    }
  }

  return <div>
    <input onChange={(e) => handleChange("username", e.target.value)} />
    <input type='password' onChange={(e) => handleChange("password", e.target.value)} />
    <button onClick={handleLogin}>Login</button>
  </div>
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<p>Home Page</p>} />
        <Route path='/register' element={<p>Register Page</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;