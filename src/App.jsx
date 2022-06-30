import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Homepage from './pages/Homepage/Homepage.jsx'
import Documents from './pages/Documents/Documents.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import store from './store'

export default function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
