import React from 'react';
import NavBar from './components/NavBar'
import Bot from './components/Bot'
import Profile from './components/Profile';
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MyTools from './components/MyTools';
import MyContibution from './components/MyContibution';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <NavBar />
      <Bot />
      <Profile />
      <Experience />
      <Skills />
      <Project />
      <MyTools />
      <MyContibution />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
