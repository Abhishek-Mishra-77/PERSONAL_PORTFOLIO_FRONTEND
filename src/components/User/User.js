import React from 'react'
import Navbar from '../NavBar/NavBar'
import Bot from './Bot'
import Profile from './Profile'
import Experience from './Experience'
import Skills from './Skills'
import Project from './Project'
import MyTools from './MyTools'
import MyContribution from './MyContibution'
import Contact from './Contact'
import Footer from '../Footer/Footer'
import Services from './Services'

const User = () => {
    return (
        <>
            <Navbar />
            <Bot />
            <Profile />
            <Experience />
            <Skills />
            <Project />
            <Services />
            <MyTools />
            <MyContribution />
            <Contact />
            <Footer />
        </>
    )
}

export default User