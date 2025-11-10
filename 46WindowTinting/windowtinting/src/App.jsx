import Navbar from './Components/Nav/Nav'
import Home from './Components/home/home'
import About from './Components/about/about'
import Services from './Components/services/services'
import Contact from './Components/contact/contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
      <Home />
      <About />
      <Services />
      <Contact />
      </main>
    </>
  )
}

export default App
