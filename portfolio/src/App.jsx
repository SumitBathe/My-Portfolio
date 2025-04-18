import { useSelector } from 'react-redux'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import PortfolioProjects from './components/PortfolioProjects'
import Profile from './components/Profile'
import QuotesCarousel from './components/QuotesCarousel'
import SkillCarousel from './components/SkillCarousel'
import { useEffect } from 'react'
import { initGA, trackPageView } from './analytics'


function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <div id='landingPage'><LandingPage/></div>
        <div id='profile'><Profile/></div>
        <div id='experienceSection'><ExperienceSection/>  </div>
        <div id='skillCarousel'><SkillCarousel/></div>
        <div id='portfolioProjects'><PortfolioProjects/></div>
        <div id='quotesCaraousel'><QuotesCarousel/></div>
        <div id='footer'><Footer/></div>        
      </div>
    </div>
  )
}

export default App
