import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import News from '../pages/News'
import Business from '../pages/Business'
import Culture from '../pages/Culture'
import Earth from '../pages/Earth'
import Sport from '../pages/Sport'
import Travel from '../pages/Travel'
import Servey from '../pages/Servey'
import Login from '../components/Login'
import Register from '../components/Register'

const Router = () => {
    return (
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/news" element={<News />} />
            <Route  path="/business" element={<Business />} />
            <Route  path="/culture" element={<Culture />} />
            <Route  path="/earth" element={<Earth />} />
            <Route  path="/sport" element={<Sport />} />
            <Route  path="/travel" element={<Travel />} />
            <Route  path="/servey" element={<Servey />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/register" element={<Register />} />
        </Routes>
    )
}

export default Router