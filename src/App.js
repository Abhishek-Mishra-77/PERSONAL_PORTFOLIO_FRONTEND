import React from 'react';
import NavBar from './components/NavBar'
import Bot from './components/Bot'
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MyTools from './components/MyTools';
import MyContibution from './components/MyContibution';

function App() {
  return (
    <>
      <NavBar />
      <Bot />
      <Profile />
      <Skills />
      <MyTools />
      <Project />
      <MyContibution />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
