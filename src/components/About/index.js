import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Greetings! I'm Shawn, a passionate IT professional on an exciting journey of transformation. With a background rooted in database administration and a curiosity for all things tech, I've set out to reshape my career as a Full Stack Developer.
        </p>
        <p>
          My professional journey began as a database administrator, where I honed my skills in crafting and analyzing data architectures. Over the years, I've had the privilege of managing complex databases and ensuring data integrity – both of which have equipped me with a meticulous eye for detail and a commitment to quality.
        </p>
        <p>
          As technology evolved and landscapes shifted, I found myself captivated by the world of programming. The idea of crafting complete, end-to-end solutions resonated deeply with me, prompting me to embark on this new chapter. With an adventurous spirit and a determination to broaden my horizons, I've immersed myself in the realm of web development, mastering front-end technologies that shape user experiences and back-end technologies that power applications.
        </p>
        <p>
          What sets me apart is my unique journey – transitioning from a data-centric role to one that encapsulates the entire software development lifecycle. This shift has granted me a holistic perspective, allowing me to bridge the gap between databases and user interfaces. Drawing from my database expertise, I approach development with an inherent understanding of data management, scalability, and security, resulting in applications that are not only visually appealing but also robust under the hood.
        </p>
        <p>
          My toolset includes JavaScript along with proficiency in modern frameworks like React and Node.js. Equipped with a deep appreciation for user-centered design, I am committed to crafting applications that blend seamless functionality with intuitive interfaces.</p>
        <p>
          Beyond technical prowess, I am an avid collaborator and an ardent problem solver. I thrive in dynamic environments where innovation is encouraged and challenges are viewed as opportunities for growth. My experience as a Database Administrator has instilled in me the importance of adaptability, planning, and effective communication – qualities that continue to serve as the cornerstone of my professional career.</p>
        <p>
          As I navigate this career transition, I am fueled by a thirst for knowledge and a desire to create meaningful, impactful software solutions. Come along on this exciting journey with me as I use my past experiences to shape the future of technology from the perspective of a Full Stack Developer.
        </p>
      </div>
    </div>
  )
}

export default About
