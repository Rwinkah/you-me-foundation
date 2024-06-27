import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer';
import About from './pages/About/About';
import Contribute from './pages/Contribute/Contribute';
import Impact from './pages/Impact/Impact';
import Contact from './pages/Contact/Contact';
// Import other pages here

function App() {
  return (
    <Router>
      <div id='main-app' className='flex flex-col gap-[40px]'>
        <Navbar/>
        <div id='main-app-body' className=' flex flex-col justify-between gap-4 w-full items-center '>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path='/about' element={<About/>} />
            {/* Define other routes here */}
            <Route path='/involved' element={<Contribute/>} />
            <Route path='/impact' element={<Impact/>}/>
            <Route path='/contact' element={<Contact/>}/>

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App