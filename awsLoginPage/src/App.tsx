import React from "react";
import { BrowserRouter as Router, Route,Routes, Navigate, BrowserRouter } from 'react-router-dom'
import Account from './page/account'
import Otp from './page/otp'
import Finalisation from './page/finalisation'
import WelcomePage from './page/welcomePage'
import Error from './page/notfound'


export default function App() {
  const [data, setData] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('http://localhost:6000/') 
      .then(response => response.json())
      .then(data => {
        setData(JSON.stringify(data));
        console.log(data)
      })
      .catch(error => {
        console.error('Erreur lors de la connexion au backend:', error)
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Account/>}/>
      <Route path="/Otp" element={<Otp />} />
      <Route path="/finalisation" element={<Finalisation />} />
      <Route path="/welcomePage" element={<WelcomePage />} />
      <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}