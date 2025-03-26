import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Import Page Components
import Hero from './components/Hero/Hero'
import Equipments from './components/Equipments/Equipments'
import Banner from './components/Banners/Banner'
import ClassesNavbar from './components/Classes/ClassesNavbar'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Profile from './components/Profile'
import ProfileSub from './components/ProfileSub'

const Layout = ({ children }) => {
  const location = useLocation();
  
  // 🔹 Define routes where Navbar & Footer should be hidden
  const hideLayoutPaths = ["/nbprintingservice/profile/nared", "/nbprintingservice/profile/spkconstruction"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="overflow-x-hidden">
      {/* Show Navbar only if shouldHideLayout is false */}
      {!shouldHideLayout && <Navbar />}

      {children}

      {/* Show Footer only if shouldHideLayout is false */}
      {!shouldHideLayout && <Footer />}
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
      
        <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Equipments />
                <Banner />
              </>
            }
          />
          <Route path="/englishclasses" element={<ClassesNavbar />} />
          <Route path="/printingservices" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/nbprintingservice/profile/nared" element={<Profile />} />
          <Route path="/nbprintingservice/profile/spkconstruction" element={<ProfileSub />} />

        </Routes>
        </Layout>
       

      </div>
    </Router>
  )
}

export default App
