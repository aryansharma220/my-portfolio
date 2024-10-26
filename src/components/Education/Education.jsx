import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id='education' className="design-section">
      <h2 className="design-heading">My Education Timeline</h2>
      <div className="timeline">
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-component timeline-content">
          <h3>Secondary School</h3>
          <p>Bharti Public School</p>
          <p>2019</p>
        </div>

        <div className="timeline-component timeline-content">
          <h3>Higher Secondary School</h3>
          <p>Bharti Public School</p>
          <p>2021</p>
        </div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-empty"></div>
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-component timeline-content">
          <h3>B. Tech in Computer Science</h3>
          <p>VIT Bhopal University</p>
          <p>2022 - 2026 (Ongoing...)</p>
        </div>
      </div>
      <p className='journey' style={{color: 'white', textAlign: 'center', fontSize: '1.5rem',paddingBottom: '1rem'}}>Long way to go ahead...</p>
    </section>
  )
}

export default Education