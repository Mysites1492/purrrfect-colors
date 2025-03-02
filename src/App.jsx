import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MainGallery from './components/MainGallery'
import Footer from './components/Footer'
import Banner from './components/Banner'
import NavBar from './components/NavBar'


function App() {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set dark mode in localStorage to persist the theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  // Check if dark mode was enabled previously from localStorage
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "enabled") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <>
      <div>
        <section id="home">
          <Header />
        </section>
        <section className="sticky top-2 z-20">
          <NavBar />
        </section>

        <section id="banner">
          <Banner />
        </section>
        

        <section id="portfolio" className="z-80">
          <MainGallery />
        </section>

        <section id="pricing">
          {/* <PricingMenu /> */}
        </section>

        <section id="contact">
          {/* <Contact /> */}
        </section>

        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4 p-2" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "🌙 Light Mode" : "🌞 Dark Mode"}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
