import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import PortfolioProjects from './components/PortfolioProjects'
import Profile from './components/Profile'
import QuotesCarousel from './components/QuotesCarousel'
import SkillCarousel from './components/SkillCarousel'


function App() {

  return (
    <>
      <LandingPage/>
      <Profile/> 
      <ExperienceSection/>    
      <SkillCarousel/>
      <PortfolioProjects/>
      {/* <MessageBox/> */}
      <QuotesCarousel/>
      <Footer/>
    </>
  )
}

export default App
