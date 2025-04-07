// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'; // Adjust the path if necessary
import Slider from './components/Slider'; // Import the Slider component
import Footer from './components/Footer';
import AboutUs from './components/About'; // Import the About Us component
import Appointment from './components/Appointment'; // Import the Appointment component
import Team from './components/Team'; // Import the Team component
import VideoWrapper from './components/VideoWrapper';
import CounterSection from './components/CounterSection';
import TestimonialSection from './components/Testimonials';
import BookingSection from './components/BookingSection';
import PartnerSection from './components/PartnerSection';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Slider /> {/* Use the Slider component here */}
    <AboutUs /> {/* Use the About Us component here */}
    <Appointment /> {/* Use the Appointment component here */}
    <Team /> 
    <VideoWrapper />
    {/* Use the Team component here */}
<CounterSection />
<TestimonialSection />
<BookingSection />
{/* <PartnerSection /> */}
    <Footer /> {/* Use the Footer component here */}

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
