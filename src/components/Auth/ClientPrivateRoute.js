import React from 'react'
import { Navigate } from 'react-router-dom'
import { useInfoContext } from '../../components/context/PostContext'

const ClientPrivateRoute = ({children}) => {
    const {logado} = useInfoContext()  
    console.log(logado)
  return (
    (logado ? children : <Navigate to="/Login" />)
  )
}

export default ClientPrivateRoute   