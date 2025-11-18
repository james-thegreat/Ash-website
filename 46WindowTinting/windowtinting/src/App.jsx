import Navbar from './Components/Nav/Nav';
import Home from './Components/home/home';
import About from './Components/about/about';
import Services from './Components/services/services';
import Contact from './Components/contact/contact';

function App() {
  return (
    <>
      {/* Global navigation – good for SEO + screen readers */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main id="main-content">
        <Home />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Optional footer placeholder (good for local SEO) */}
      <footer className="text-center text-white py-6">
        <p>© 2025 46 Window Tinting — Auckland, New Zealand</p>
      </footer>
    </>
  );
}

export default App;
