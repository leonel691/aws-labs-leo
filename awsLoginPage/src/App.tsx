// import React from "react";
import { BrowserRouter as Router, Route,Routes, Navigate, BrowserRouter } from 'react-router-dom'
import Account from './page/account'
import Otp from './page/otp'
import Finalisation from './page/finalisation'
import WelcomePage from './page/welcomePage'
import Error from './page/notfound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/finalisation" element={<Finalisation />} />
        <Route path="/welcomePage" element={<WelcomePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}