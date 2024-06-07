import React from 'react'
import { MovieList } from '../components/MovieList'
import { Navigate } from 'react-router-dom'
import { UserLogin } from '../components/UserLogin'

export const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem('userData') !== null;
 if(isLoggedIn){
  return <MovieList/>
 }else{
  return <Navigate to={'/signIn'}/>
 }
}

