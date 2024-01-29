import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Greetings! I'm Shawn, a seasoned IT professional with a background
            in database administration transitioning to a Full Stack Developer.
            I bring a meticulous eye for detail and a commitment to quality from
            years of managing complex databases.
          </p>
          <p>
            My journey encompasses a shift from data-centric roles to mastering
            front-end and back-end technologies. With expertise in JavaScript,
            React, and Node.js, I create applications that seamlessly blend
            functionality with intuitive interfaces.
          </p>
          <p>
            What sets me apart is my holistic perspective, bridging the gap
            between databases and user interfaces. Drawing from my database
            expertise, I ensure applications are not only visually appealing but
            also robust under the hood, prioritizing data management,
            scalability, and security.
          </p>
          <p>
            An avid collaborator and problem solver, I thrive in dynamic
            environments, valuing adaptability, planning, and effective
            communication. Join me on this exciting journey as I leverage past
            experiences to shape the future of technology as a Full Stack
            Developer.
          </p>
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
