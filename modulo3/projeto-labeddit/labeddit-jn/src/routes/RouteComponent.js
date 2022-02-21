import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

export default function RouteComponent() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FeedPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/post/:id' element={<PostPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
