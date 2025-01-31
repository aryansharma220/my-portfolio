import React from 'react'
import './MyApproach.css';
import ApproachCard from '../../elements/ApproachCard/ApproachCard';

const approachSteps = [
  {
    title: "User-Centered Design",
    description: "Every project I undertake begins with the end user in mind. My focus is on creating seamless, intuitive experiences that combine design and functionality, aiming for solutions that genuinely solve problems effectively and beautifully."
  },
  {
    title: "Scalability & Efficiency",
    description: "Building scalable solutions is essential. I prioritize modular, maintainable code, with optimized algorithms and clean structures. This approach ensures applications can evolve easily, adapting to changing requirements and expanding user demands."
  },
  {
    title: "Continuous Learning",
    description: "The tech world evolves rapidly, and I embrace it. I consistently learn through courses, certifications, and projects, staying current with new frameworks, tools, and best practices to bring fresh ideas to each project."
  },
  {
    title: "Collaboration & Open Source Contribution",
    description: "I value teamwork and actively contribute to open-source projects, where feedback and shared knowledge are key. Collaborating with peers helps refine ideas, troubleshoot issues, and deliver robust, well-crafted solutions."
  },
  {
    title: "Detail-Oriented Execution",
    description: "Quality is essential, from the largest function to the smallest detail. I rigorously test, debug, and optimize code, ensuring reliability and a polished outcome, with a commitment to deliver excellence in every project."
  }
];


const MyApproach = () => {
  return (
    <div data-aos='zoom-out-up' id="myApproach" className='approach-section' >
      <h2 className="approach-heading">My Approach</h2>
      <div data-aos="zoom-out-left" className="approach-cards-section">
      {approachSteps.map((step, index) => (
        <ApproachCard key={index} title={step.title} description={step.description} />
      ))}
      </div>
    </div>
  )
}

export default MyApproach