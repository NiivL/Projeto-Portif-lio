import './Styles.css'
import Navigation from './components/Navigation/navigation'
import SectionCV from './components/SectionCV/sectionCV'
import SectionAbautMe from './components/SectionAbautMe/sectionAbautMe'
import SectionMyResume from './components/SectionAbautMe/SectionMyResume/sectionMyResume'
import SectionProjects from './components/SectionProjects/sectionProjects'
import Footer from './components/Footer/footer'

function App() {

  return (
    <>
      <Navigation />
      <SectionCV />
      <SectionAbautMe />
      <SectionMyResume />
      <SectionProjects />
      <Footer />
    </>
  )
}

export default App
