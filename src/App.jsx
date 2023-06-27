import React from 'react'
import Banner from './components/Banner'
import Section1 from './components/Section1'
import Testimonial from './components/Testimonial'
import Footer from "./components/Footer";
import Tour from './components/Tour';

function App() {
  return (
    <>
      <Banner />
      <div className="submain">
        <Section1 />
        <Tour />
      </div>
      <Testimonial />
      <Footer />
    </>
  );
}

export default App
