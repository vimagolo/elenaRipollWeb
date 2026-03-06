import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import AboutContact from './components/AboutContact'
import Projects from './components/Projects'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<AboutContact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
