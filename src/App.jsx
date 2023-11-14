import './App.css'
import { Card } from './components/Card'
import { GameNews } from './components/GameNews'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { NavMobile } from './components/NavMobile'
import { articles, headerContent, gameNews, navLinks } from './data/data'
import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(true)
  }

  const handleCloseMenu = () => {
    setIsVisible(false)
  }

  return (
    <>
      <Header
        items={navLinks}
        handleClick={handleClick} 
      />
      {isVisible && (
        <NavMobile 
          items={navLinks} 
          handleClick={handleCloseMenu}
        />)
      }
      <main className='px-4'>
        <section className='m-auto sm:w-11/12 md:w-10/12 lg:flex lg:justify-between xl:max-w-[70rem]'>
          <HeroSection 
            title={headerContent.title} 
            content={headerContent.content} 
            styles={'lg:w-[62%] lg:mr-[3%] xl:w-[67%] xl:mr-[3%]'}
          />
          <Card articles={articles} />
        </section>
        <GameNews gameNews={gameNews} />
      </main>
    </>
  )
}

export default App
