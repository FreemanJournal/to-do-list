import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignInPage from '../pages/SignInPage'
import PrivateRoute from './PrivateRoute'

export default function Routing() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path='signIn' element={<SignInPage />} />
      </Routes>
    </>
  )
}
