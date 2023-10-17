import React, { useEffect, useState } from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Portfolio = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  console.log(portfolioData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  })


  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="portfolio" />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button
                    className="gitbtn"
                    onClick={() => window.open(port.giturl)}
                  ><FontAwesomeIcon
                  icon={faGithub}
                  color="ffd700"
                  size="2x"
                  className="giticon"
                  /></button>
                  <button
                    className="demobtn"
                    onClick={() => window.open(port.demourl)}
                  >Demo</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;