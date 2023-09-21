import React from 'react';
import NavBar from './components/NavBar'
import Bot from './components/Bot'
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills'
import HireMe from './components/HireMe'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';
import MyTools from './components/MyTools';
import MyContibution from './components/MyContibution';


function App() {
  return (
    <div>
      <NavBar />
      <Bot />
      <Profile />
      <About />
      <Skills />
      <MyTools />
      <HireMe />
      <Project />
      <MyContibution />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
