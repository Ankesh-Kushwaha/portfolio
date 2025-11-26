
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import  {Projects} from './components/Project'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Acheivement from './components/Acheivement'
import { SidebarNav } from './components/SidebarNav'
import PortfolioStats from './components/PortfolioStats'

const App = () => {
  return (
    <>
      <Header />
      <SidebarNav />
      <Hero />
      <About />
      <PortfolioStats/>
      <Skills />
      <Projects />
      <Acheivement />
      <Contact />
      <Footer />
    </>
  );
}

export default App