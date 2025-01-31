import React from 'react'
import './Education.css'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const Education = () => {
  return (
    <section data-aos='zoom-out-down' id='education' className="design-section">
      <h2 className="design-heading">My Education Timeline</h2>
      <div className="timeline">
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-component timeline-content" data-aos="zoom-out-right">
          <div className="education-icon"><FaSchool /></div>
          <h3>Secondary School</h3>
          <p>Bharti Public School</p>
          <p className="duration">2019</p>
        </div>

        <div className="timeline-component timeline-content" data-aos="zoom-out-left">
          <div className="education-icon"><FaSchool /></div>
          <h3>Higher Secondary School</h3>
          <p>Bharti Public School</p>
          <p className="duration">2021</p>
        </div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-empty"></div>
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-component timeline-content" data-aos="zoom-out-right">
          <div className="education-icon"><FaGraduationCap /></div>
          <h3>B. Tech in Computer Science</h3>
          <p>VIT Bhopal University</p>
          <p className="duration">2022 - 2026 (Ongoing...)</p>
        </div>
      </div>
      <p className='journey' style={{color: '#bb86fc', textAlign: 'center', fontSize: '1.5rem', paddingBottom: '2rem', fontStyle: 'italic'}}>
        Long way to go ahead...
      </p>
    </section>
  )
}

export default Education